import { NextRequest, NextResponse } from "next/server"
import { readFile, unlink, writeFile } from "node:fs/promises"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { spawn } from 'node-pty'

const execFileAsync = promisify(execFile)
const inkDemoDir = path.join(process.cwd(), "ink-demo")
const packageJsonPromise = readFile(path.join(inkDemoDir, "package.json"), "utf8").then(json => JSON.parse(json))
const esbuildBin =
  process.platform === "win32"
    ? path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild.cmd")
    : path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild")
let fileSerialNumber = 0

export async function POST(request: NextRequest) {
  try {
    const { code, cols, rows } = (await request.json()) as { code: string, cols: number, rows: number  }
    const fileName = `example-${fileSerialNumber++}-${Date.now().toString(36)}.js`
    const newCode = `import React from 'react';\n${code}`;
    await writeFile(path.join(inkDemoDir, fileName), newCode, "utf8")

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


    await execFileAsync(esbuildBin, esbuildArgs, { cwd: inkDemoDir })
    const pty = spawn("node", [`compiled-${fileName}`, "--color=always"], {
      cwd: inkDemoDir,
      env: {
        ...process.env
      },
      cols,
      rows,
    })
    const stdout = await new Promise<string>((resolve) => {
      let chunk = '';
      pty.onData((data) => {
        chunk += data.toString();
      });
      pty.onExit(() => {
        resolve(chunk);
      });
    });
    // 删除文件
    unlink(path.join(inkDemoDir, fileName))
    unlink(path.join(inkDemoDir, `compiled-${fileName}`))

    return NextResponse.json({ content: stdout })
  } catch (error) {
    console.error("esbuild: 构建失败", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}