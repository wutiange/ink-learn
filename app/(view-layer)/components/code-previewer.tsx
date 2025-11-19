'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "../../components/terminal"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useRef, useState } from "react"

function CodePreviewer({ code: defCode, className, itemClassName }: { code: string, className?: string, itemClassName?: string }) {

  const [code, setCode] = useState(defCode);
  const [content, setContent] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); 
  const [termSize, setTermSize] = useState<{ cols: number, rows: number } | null>(null);


  useEffect(() => {
    if (!termSize) return;
    const fetchContent = async () => {
      const res = await fetch("/code-previewer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, cols: termSize.cols, rows: termSize.rows }),
      });
      const data = await res.json();
      setContent(data.content);
    };
    fetchContent();
  }, [code, termSize]);

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (value) {
        setCode(value);
      }
    }, 500);
  }, []);

  return (
    <div className={cn("flex flex-row gap-4", className)}>
      <div className={cn("flex-1", itemClassName)}>
        <Editor 
          defaultLanguage="javascript" 
          defaultValue={code} 
          theme="vs-dark" 
          onChange={handleEditorChange}
          options={{
            fontFamily: "'Geist Mono', 'Courier New', monospace",
            fontSize: 14,
            tabSize: 2
          }}
        />
      </div>
      <Terminal className={cn("flex-1 h-full p-2", itemClassName)} content={content} />
    </div>
  )
}

export default CodePreviewer