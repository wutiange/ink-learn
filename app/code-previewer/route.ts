import { NextRequest, NextResponse } from "next/server"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { IPty, spawn } from 'node-pty'

const execFileAsync = promisify(execFile)
const inkDemoDir = path.join(process.cwd(), "ink-demo")
const packageJsonPromise = readFile(path.join(inkDemoDir, "package.json"), "utf8").then(json => JSON.parse(json))
const esbuildBin =
  process.platform === "win32"
    ? path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild.cmd")
    : path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild")

const clients: Record<string, [ReadableStreamDefaultController, string | null, IPty | null]> = {};

async function delFile(tempDir: string) {
  // 删除指定文件夹下的全部文件，但是不删除文件夹本身
  await rm(tempDir, { recursive: true, force: true })
}

function killPty(clientId: string) {
  const client = clients[clientId]
  if (client) {
    client[2]?.kill()
    client[2] = null;
  }
}

export async function pushMessage(fileName: string, cols: number, rows: number) {
  for (const clientId in clients) {
    const [controller, , tempPty] = clients[clientId];
    const tempDir = path.join(inkDemoDir, `.temp-${clientId}`);
    const compiledFileName = `compiled-${fileName}`;
    tempPty?.kill();
    clients[clientId] = [
      controller,
      fileName,
      spawn("node", [path.join(tempDir, compiledFileName), "--color=always"], {
        cwd: tempDir,
        cols,
        rows,
      })
    ]
    const pty = clients[clientId][2];
    pty?.onData((data) => {
      try {
        controller.enqueue(`data: ${JSON.stringify({ fileName, data })}\n\n`)
      } catch (error) {
        console.info('enqueue error', error)
      }
    })
    pty?.onExit(() => {
      
    })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const clientId = searchParams.get("clientId")
  if (!clientId) {
    return new Response("Unauthorized", { status: 401 })
  }

  const stream = new ReadableStream({
    start(controller) {
      clients[clientId] = [controller, null, null];
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
    },
  });
}

type PostRequest = { code: string, cols: number, rows: number, clientId: string, fileName: string }
export async function POST(request: NextRequest) {
  try {
    const { code, cols, rows, clientId, fileName } = (await request.json()) as PostRequest
    const tempDir = path.join(inkDemoDir, `.temp-${clientId}`)
    await mkdir(tempDir, { recursive: true })
    const newCode = /import\s+React/.test(code) ? code : `import React from 'react';\n${code}`;
    await writeFile(path.join(tempDir, fileName), newCode, "utf8")

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
    pushMessage(fileName, cols, rows)
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
  return NextResponse.json({ content: 'ok' })
}