'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "./terminal"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

function CodePreviewer({ code: defCode, className, itemClassName }: { code: string, className?: string, itemClassName?: string }) {

  const [code, setCode] = useState(defCode);
  const [content, setContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch("/code-previewer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      console.log('------data-----', data)
      setContent(data.content);
    };
    fetchContent();
  }, [code]);

  return (
    <div className={cn("flex flex-row gap-4", className)}>
      <div className={cn("flex-1", itemClassName)}>
        <Editor defaultLanguage="javascript" defaultValue={code} theme="vs-dark" />
      </div>
      <Terminal className={cn("flex-1 h-full", itemClassName)} content={content} />
    </div>
  )
}

export default CodePreviewer