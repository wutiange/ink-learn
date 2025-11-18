'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "@/app/(main)/(view-layer)/components/terminal"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { IconArrowLeft, IconPlayerPlay } from "@tabler/icons-react"
import useEventSource from "../../../hooks/useEventSource"

function Preview() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialCode = searchParams.get('code') ? decodeURIComponent(searchParams.get('code')!) : ''
  const filename = searchParams.get('filename') || 'example.js'
  const [code, setCode] = useState(initialCode)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [termSize, setTermSize] = useState<{ cols: number, rows: number } | null>(null)
  const { send, content, isRunning } = useEventSource(filename)

  useEffect(() => {
    if (!termSize || !code) return;
    send(code, termSize.cols, termSize.rows);
  }, [code, termSize, send])


  const handleEditorChange = useCallback((value: string | undefined) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      if (value) {
        setCode(value)
      }
    }, 500)
  }, [])

  return (
    <div className="flex flex-col bg-gray-950 flex-1">
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <IconArrowLeft size={20} />
            <span>返回</span>
          </button>
          <div className="h-6 w-px bg-gray-700"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-500"></div>
            <span className="text-sm text-gray-400">{filename}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isRunning && (
            <div className="flex items-center space-x-2 text-sm text-purple-400">
              <IconPlayerPlay size={16} className="animate-pulse" />
              <span>运行中...</span>
            </div>
          )}
          <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-sm text-purple-200">
            实时预览
          </div>
        </div>
      </div>

      {/* 主内容区 - 左右分栏 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左侧编辑器 */}
        <div className="flex-1 flex flex-col border-r border-gray-800">
          <div className="px-4 py-2 bg-gray-900/50 border-b border-gray-800">
            <span className="text-sm text-gray-400">编辑器</span>
          </div>
          <div className="flex-1">
            <Editor 
              defaultLanguage="javascript" 
              defaultValue={initialCode} 
              theme="vs-dark" 
              onChange={handleEditorChange}
              options={{
                fontFamily: "'Geist Mono', 'Courier New', monospace",
                fontSize: 14,
                tabSize: 2,
                minimap: { enabled: false },
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        {/* 右侧终端输出 */}
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-2 bg-gray-900/50 border-b border-gray-800">
            <span className="text-sm text-gray-400">运行结果</span>
          </div>
          <div className="flex-1 relative">
            <Terminal 
              className="absolute inset-0 p-4" 
              content={content} 
              onResize={setTermSize} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview;

