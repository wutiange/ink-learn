import { NextRequest, NextResponse } from "next/server"
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

export async function POST(request: NextRequest) {
  const { code } = await request.json()

  fs.writeFileSync(path.join(process.cwd(), "ink-demo", "source", 'app.js'), code);

  execSync(`cd ${path.join(process.cwd(), "ink-demo")} && npm install`);
  execSync(`cd ${path.join(process.cwd(), "ink-demo")} && npm run build`);

  const content = execSync(`cd ${path.join(process.cwd(), "ink-demo")} && node dist/cli.js --color=always`);

  return NextResponse.json({ content: content.toString() })
}