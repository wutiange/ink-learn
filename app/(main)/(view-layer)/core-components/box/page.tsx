'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "@/app/components/terminal"
import { useCallback, useEffect } from "react"
import useEventSource from "@/app/hooks/coder";
import { boxExample } from "./data";

export default function BoxPage() {
  const fileName = "box.js";
  const { isRunning, setContent, setTerm, setCode, code, send } = useEventSource(fileName, boxExample)

  useEffect(() => {
    if (!boxExample) return;
    send(boxExample);
  }, [send])

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  }, [setCode]);

  return (
    <div className="flex flex-row gap-4 flex-1">
      <div className="overflow-y-auto flex-1">
        {/* 标题 */}
        <div className="mb-8">
          <p className="text-xl text-gray-600">
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Box&gt;</code> 
            {' '}是构建布局的基础组件，类似于浏览器中的{' '}
            <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;div style=&quot;display: flex&quot;&gt;</code>
          </p>
        </div>

        {/* Props 文档 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>
          
          {/* width */}
          <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <code className="text-lg font-semibold text-purple-700">width</code>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">string</span>
                  </div>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                设置元素的宽度（以空格为单位）。也可以设置为百分比，会基于父元素的宽度计算。
              </p>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                <span>查看示例</span>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* height */}
          <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <code className="text-lg font-semibold text-purple-700">height</code>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">string</span>
                  </div>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                设置元素的高度（以行为单位）。也可以设置为百分比，会基于父元素的高度计算。
              </p>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                <span>查看示例</span>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* padding */}
          <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <code className="text-lg font-semibold text-purple-700">padding</code>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                设置元素的内边距。
              </p>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                <span>查看示例</span>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* 更多 Props 提示 */}
          <div className="text-center py-4">
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              显示更多属性 <i className="fas fa-chevron-down ml-1"></i>
            </button>
          </div>
        </div>

        {/* 相关链接 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">相关资源</h2>
          <div className="space-y-2">
            <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
              <div className="flex items-center space-x-3">
                <i className="fas fa-external-link-alt text-gray-400"></i>
                <span className="font-medium text-gray-900">Yoga Layout 文档</span>
              </div>
              <i className="fas fa-arrow-right text-gray-400"></i>
            </a>
            <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
              <div className="flex items-center space-x-3">
                <i className="fab fa-github text-gray-400"></i>
                <span className="font-medium text-gray-900">GitHub 源码</span>
              </div>
              <i className="fas fa-arrow-right text-gray-400"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 右栏：代码编辑器 + 实时预览 */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex-1 rounded-lg overflow-hidden">
          <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              {/* 红色到紫色 */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-500"></div>
              {/* 青色到绿色 */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-green-500"></div>
              {/* 黄色到橙色 */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
            </div>
            <span className="text-sm text-gray-400 ml-4">{fileName}</span>
          </div>
          <Editor 
            defaultLanguage="javascript" 
            value={code ?? ''} 
            defaultValue={boxExample}
            theme="vs-dark" 
            onChange={handleEditorChange}
            options={{
              fontFamily: "'Geist Mono', 'Courier New', monospace",
              fontSize: 14,
              tabSize: 2,
              minimap: { enabled: false },
            }}
          />
        </div>

        {/* 实时预览 */}
        <div className="flex-1 bg-black flex flex-col rounded-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800">
              <div className="flex space-x-2">
                {/* 红色到紫色 */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-500"></div>
                {/* 青色到绿色 */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-green-500"></div>
                {/* 黄色到橙色 */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              </div>
              <span className="text-sm text-gray-400 ml-4">{fileName}</span>
            </div>
            <div className="flex items-center space-x-2">
              {isRunning && (
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded flex items-center space-x-1">
                  <i className="fas fa-circle text-xs animate-pulse"></i>
                  <span>运行中</span>
                </span>
              )}
              <button 
                className="text-gray-400 hover:text-white text-sm" 
                title="清空"
                onClick={() => setContent(null)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <Terminal 
              className="h-full w-full" 
              onTermRef={setTerm} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

