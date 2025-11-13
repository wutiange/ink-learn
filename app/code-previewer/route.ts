import { NextRequest, NextResponse } from "next/server"
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"

const execFileAsync = promisify(execFile)
const inkDemoDir = path.join(process.cwd(), "ink-demo")
const packageJsonPromise = readFile(path.join(inkDemoDir, "package.json"), "utf8").then(json => JSON.parse(json))
const esbuildBin =
  process.platform === "win32"
    ? path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild.cmd")
    : path.join(process.cwd(), "ink-demo", "node_modules", ".bin", "esbuild")

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    await writeFile(path.join(inkDemoDir, "source", "app.js"), code, "utf8")

    const packageJson = await packageJsonPromise
    const externalDeps = new Set([
      ...(Object.keys(packageJson.dependencies ?? {})),
      ...(Object.keys(packageJson.peerDependencies ?? {})),
      "react-devtools-core",
    ])

    const esbuildArgs = [
      "source/cli.js",
      "--bundle",
      "--platform=node",
      "--format=esm",
      "--target=node18",
      "--log-level=info",
      "--loader:.js=jsx",
      "--outfile=dist/cli.js",
      ...Array.from(externalDeps, dep => `--external:${dep}`),
    ]

    await execFileAsync(esbuildBin, esbuildArgs, { cwd: inkDemoDir })

    const { stdout } = await execFileAsync("node", ["dist/cli.js", "--color=always"], {
      cwd: inkDemoDir,
    })

    return NextResponse.json({ content: stdout.toString() })
  } catch (error) {
    console.error("esbuild: 构建失败", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}