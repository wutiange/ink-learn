'use client'

import { Editor } from "@monaco-editor/react"
import Terminal from "@/app/components/terminal"
import { useCallback, useEffect, useMemo } from "react"
import useEventSource from "@/app/hooks/coder";
import { boxExample, boxPropsData, exampleCodeMap } from "./data";
import { IconCode } from "@tabler/icons-react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export default function BoxPage() {
  const fileName = "box.js";
  const { isRunning, setTerm, setCode, code, send } = useEventSource(fileName, boxExample)

  useEffect(() => {
    if (!boxExample) return;
    send(boxExample);
  }, [send])

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  }, [setCode]);

  // 按分类组织属性
  const groupedProps = useMemo(() => {
    const groups: Record<string, typeof boxPropsData> = {}
    boxPropsData.forEach(prop => {
      if (!groups[prop.category]) {
        groups[prop.category] = []
      }
      groups[prop.category].push(prop)
    })
    return groups
  }, [])

  // 查看示例
  const viewExample = useCallback((exampleKey: string) => {
    const exampleCode = exampleCodeMap[exampleKey]
    if (exampleCode) {
      setCode(exampleCode)
    }
  }, [setCode])

  return (
    <div className="flex flex-row h-0 flex-1 overflow-hidden px-8">
      <div className="w-1/2 overflow-hidden flex flex-col">
        {/* 标题 */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Box</h1>
          <p className="text-xl text-gray-600 mt-4 leading-relaxed">
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Box&gt;</code> 
            {' '}是构建布局的基础组件，类似于浏览器中的{' '}
            <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;div style=&quot;display: flex&quot;&gt;</code>
          </p>
        </div>

        {/* Props 文档 - 按分类显示 */}
        <div className="overflow-y-auto pr-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>
          
          {Object.entries(groupedProps).map(([category, props]) => (
            <div key={category} className="mb-6">
              <div className="flex items-center mb-3">
                <span className="w-1 h-6 bg-purple-500 mr-2 rounded"></span>
                <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
              </div>
              
              <Accordion type="single" className="space-y-2">
                {props.map(prop => {
                  const hasExample = !!prop.example
                  
                  return (
                    <AccordionItem 
                      key={prop.name}
                      value={prop.name}
                      className="border! rounded-lg px-4 hover:border-purple-300 transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2 flex-wrap">
                          <code className="text-base font-semibold text-purple-700">{prop.name}</code>
                          <div className="flex gap-1.5">
                            {prop.types.map(type => (
                              <Badge key={type} variant="outline">
                                {type}
                              </Badge>
                            ))}
                          </div>
                          {prop.default && (
                            <Badge variant="secondary">
                              默认: {prop.default}
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent>
                        <div className="pt-2">
                          <p className="text-gray-700 mb-3">{prop.description}</p>
                          
                          {prop.allowedValues && prop.allowedValues.length > 0 && (
                            <div className="mb-3">
                              <span className="text-sm font-medium text-gray-600 mb-2 block">允许的值：</span>
                              <div className="flex flex-wrap gap-2">
                                {prop.allowedValues.map(value => (
                                  <Badge key={value} variant="outline" className="font-mono">
                                    {value}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {hasExample && (
                            <>
                              <Separator className="my-3" />
                              <Button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  viewExample(prop.example!)
                                }}
                                variant="outline"
                                size="sm"
                                className="text-purple-600 hover:text-purple-900"
                              >
                                <IconCode size={16} />
                                <span>查看示例</span>
                              </Button>
                            </>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      {/* 右栏：代码编辑器 + 实时预览 */}
      <div className="flex flex-col w-1/2 gap-2 mb-4 min-w-md">
        <div className="h-1/2 rounded-lg overflow-hidden flex flex-col">
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
          <div className="flex-1 overflow-hidden">
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
        </div>

        {/* 实时预览 */}
        <div className="h-1/2 bg-black flex flex-col rounded-lg overflow-hidden">
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
            <div className="flex items-center space-x-2 px-4">
              {isRunning && (
                <Badge variant="secondary" className="gap-1.5 bg-green-600 text-white">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  <span>运行中</span>
                </Badge>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
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

