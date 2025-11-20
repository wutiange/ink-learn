import { NextRequest, NextResponse } from "next/server"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { IPty, spawn } from 'node-pty'

// 异步执行 esbuild 命令
const execFileAsync = promisify(execFile)

// ink-demo 目录：用于放置可执行的临时代码
const inkDemoDir = path.join(process.cwd(), "ink-demo")

// 预读 package.json，用于从中提取 external 依赖，避免每次请求都读取
const packageJsonPromise = readFile(path.join(inkDemoDir, "package.json"), "utf8").then(
  (json) => JSON.parse(json),
)

// esbuild 可执行文件路径（兼容 Windows / 其他平台）
const esbuildBin =
  process.platform === "win32"
    ? path.join(inkDemoDir, "node_modules", ".bin", "esbuild.cmd")
    : path.join(inkDemoDir, "node_modules", ".bin", "esbuild")

// 以 clientId 维度维护的长连接和对应的 pty 进程
// tuple: [SSE controller, 最近运行的文件名, pty 实例]
const clients: Record<string, [ReadableStreamDefaultController, string | null, IPty | null]> = {}

// 删除指定 client 的临时目录（包含编译产物）
async function delFile(tempDir: string) {
  try {
    await rm(tempDir, { recursive: true, force: true })
  } catch (error) {
    console.warn('delete file error', error)
  }
}

// 关闭并清理某个 clientId 对应的 pty 进程
function killPty(clientId: string) {
  const client = clients[clientId]
  if (client) {
    client[2]?.kill()
    client[2] = null
  }
}

// GET：建立 SSE 长连接，并为当前 client 启动一个「受限 shell」(jail.mjs)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const clientId = searchParams.get("clientId")
  if (!clientId) {
    return new Response("Unauthorized", { status: 401 })
  }

  // 为每个 clientId 创建独立的临时目录，隔离运行环境
  const tempDir = path.join(inkDemoDir, `.temp-${clientId}`)
  await mkdir(tempDir, { recursive: true })

  const stream = new ReadableStream({
    start(controller) {
      // 启动 Node 子进程，运行自定义的「受限 shell」
      // 终端真实尺寸由后续 POST 请求中的 cols/rows 再进行 resize
      const jailScript = path.join(process.cwd(), "app", "code-previewer", "jail.mjs")
      const pty = spawn("node", [jailScript, tempDir], {
        cwd: tempDir,
      })

      clients[clientId] = [controller, null, pty]

      pty.onData((data) => {
        try {
          // 前端通过 fileName="shell" 订阅整个 Shell 的输出
          controller.enqueue(`data: ${JSON.stringify({ fileName: 'shell', data })}\n\n`)
        } catch (error) {
          console.info('enqueue error', error)
        }
      })
      
      pty.onExit(() => {
        // Shell 退出时关闭 SSE
        try {
          controller.close()
        } catch {
          // 忽略关闭时的异常
        }
      })
    },
    cancel() {
      const client = clients[clientId]
      if (client) {
        killPty(clientId)
      }
      delete clients[clientId];
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no"
    },
  });
}

// 在已有的 shell 中运行指定文件
// - 会根据 cols/rows 对当前 client 的 pty 进行 resize，使其与前端终端尺寸一致
// - 先发送 Ctrl+C 中断上一条命令，然后执行新的 `node xxx`
export function pushMessage(clientId: string, fileName: string, cols: number, rows: number) {
  const client = clients[clientId]
  if (!client) return

  const pty = client[2]
  if (!pty) return

  // 调整到真实终端尺寸
  if (Number.isFinite(cols) && Number.isFinite(rows) && cols > 0 && rows > 0) {
    try {
      pty.resize(cols, rows)
    } catch (error) {
      console.warn('pty resize error', error)
    }
  }

  // 中断当前正在运行的命令
  pty.write('\x03')

  // 根据是否已经是 compiled-* 决定要运行的文件名
  const targetFileName = fileName.startsWith('compiled-') ? fileName : `compiled-${fileName}`

  // 通过回车触发执行
  setTimeout(() => {
    pty.write(`node ${targetFileName}\r`)
  }, 100)
}

type PostRequest = { code: string, cols: number, rows: number, clientId: string, fileName: string }
export async function POST(request: NextRequest) {
  try {
    const { code, cols, rows, clientId, fileName } = (await request.json()) as PostRequest;
    const tempDir = path.join(inkDemoDir, `.temp-${clientId}`)
    await mkdir(tempDir, { recursive: true })
    const newCode = /import\s+React/.test(code) ? code : `import React from 'react';\n${code}`;
    await writeFile(path.join(tempDir, fileName), newCode, "utf8")

    // 如果文件名本身已经是 compiled-*，认为它是已经打包好的文件，直接运行，不再经过 esbuild
    if (!fileName.startsWith('compiled-')) {
      const packageJson = await packageJsonPromise
      const externalDeps = new Set([
        ...(Object.keys(packageJson.dependencies ?? {})),
        ...(Object.keys(packageJson.peerDependencies ?? {})),
        "react-devtools-core",
      ])

      const esbuildArgs = [
        fileName,
        "--bundle",
        "--platform=node",
        "--format=esm",
        "--target=node18",
        "--log-level=info",
        "--loader:.js=jsx",
        `--outfile=compiled-${fileName}`,
        ...Array.from(externalDeps, dep => `--external:${dep}`),
      ]

      await execFileAsync(esbuildBin, esbuildArgs, { cwd: tempDir })
    }

    // 使用当前 client 和真实终端尺寸在 shell 中执行
    pushMessage(clientId, fileName, cols, rows)
    return NextResponse.json({ fileName })
  } catch (error) {
    console.error("esbuild: 构建失败", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const { clientId } = (await request.json()) as { clientId: string  }
  await delFile(path.join(inkDemoDir, `.temp-${clientId}`))
  killPty(clientId)
  return NextResponse.json({ content: 'ok' })
}

type PutRequest = { clientId: string; data: string }

export async function PUT(request: NextRequest) {
  try {
    const { clientId, data } = (await request.json()) as PutRequest
    const client = clients[clientId]

    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 400 })
    }

    const pty = client[2]

    if (!pty) {
      return NextResponse.json({ error: 'PTY not initialized' }, { status: 400 })
    }

    pty.write(data)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('code-previewer PUT error', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}