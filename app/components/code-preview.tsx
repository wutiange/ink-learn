'use client'

import { IconBolt } from '@tabler/icons-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useRouter } from 'next/navigation'

interface CodePreviewProps {
  code: string
  filename?: string
  showPreview?: boolean
  className?: string
  language?: string
  showHeader?: boolean
  codeClassName?: string
}

export default function CodePreview({ 
  code, 
  filename = 'example.jsx',
  showPreview = true,
  className = '',
  language = 'jsx',
  showHeader = true,
  codeClassName = ''
}: CodePreviewProps) {
  const router = useRouter()

  const handlePreviewClick = () => {
    // 将代码通过 URL 参数传递到预览页面
    const encodedCode = encodeURIComponent(code)
    router.push(`/preview?code=${encodedCode}&filename=${filename}`)
  }

  // 自定义样式 - 使用 Ink logo 的颜色主题
  const customStyle = {
    ...vscDarkPlus,
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: 'transparent',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: 0,
    },
  }

  return (
    <div className={`mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900 ${className}`}>
      {showHeader && (
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex space-x-2">
            {/* 红色到紫色 */}
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-500"></div>
            {/* 青色到绿色 */}
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-green-500"></div>
            {/* 黄色到橙色 */}
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
          </div>
          <span className="text-sm text-gray-400 ml-4">{filename}</span>
        </div>
      )}
      
      <div className={`p-6 overflow-x-auto ${codeClassName}`}>
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          customStyle={{
            background: 'transparent',
            padding: 0,
            margin: 0,
          }}
          wrapLongLines={false}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* 实时预览标签 - 使用 Ink logo 的渐变色 */}
      {showPreview && (
        <div 
          className="px-6 py-3 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 border-t border-purple-700/50 cursor-pointer hover:from-purple-800 hover:via-pink-800 hover:to-orange-800 transition-all"
          onClick={handlePreviewClick}
        >
          <div className="flex items-center justify-end space-x-1">
            <span className="text-sm text-purple-200">实时预览</span>
            <IconBolt color='white' size={16} />
          </div>
        </div>
      )}
    </div>
  )
}

