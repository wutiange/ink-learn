import { NextRequest, NextResponse } from "next/server"
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises"
import path from "node:path"
import { execFile, execSync } from "node:child_process"
import { promisify } from "node:util"

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
    let { code } = (await request.json()) as { code: string }
    const fileName = `example-${fileSerialNumber++}-${Date.now().toString(36)}.js`
    code = `import React from 'react';\n${code}`;
    await writeFile(path.join(inkDemoDir, fileName), code, "utf8")

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

    const { stdout } = await execFileAsync("node", [`compiled-${fileName}`, "--color=always"], {
      cwd: inkDemoDir,
    })
    // 删除文件
    unlink(path.join(inkDemoDir, fileName))
    unlink(path.join(inkDemoDir, `compiled-${fileName}`))

    return NextResponse.json({ content: stdout.toString() })
  } catch (error) {
    console.error("esbuild: 构建失败", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}