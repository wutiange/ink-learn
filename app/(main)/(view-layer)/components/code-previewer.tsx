'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "./terminal"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useRef, useState } from "react"
import { editor } from "monaco-editor"

function CodePreviewer({ code: defCode, className, itemClassName }: { code: string, className?: string, itemClassName?: string }) {

  const [code, setCode] = useState(defCode);
  const [content, setContent] = useState<string | undefined>(undefined);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
      setContent(data.content);
    };
    fetchContent();
  }, [code]);

  const handleEditorChange = useCallback((value: string | undefined, _: editor.IModelContentChangedEvent) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (value) {
        setCode(value);
      }
    }, 1000);
  }, []);

  return (
    <div className={cn("flex flex-row gap-4", className)}>
      <div className={cn("flex-1", itemClassName)}>
        <Editor defaultLanguage="javascript" defaultValue={code} theme="vs-dark" onChange={handleEditorChange} />
      </div>
      <Terminal className={cn("flex-1 h-full", itemClassName)} content={content} />
    </div>
  )
}

export default CodePreviewer