import PropDoc from "@/app/components/prop-doc"
import { useInputExample, useInputParamsData } from "./data"

export default function UseInputPage() {
  return (
    <PropDoc 
      propTitle="useInput" 
      fileName="use-input.js" 
      code={useInputExample} 
      propsData={useInputParamsData} 
      sectionTitle="API & 参数"
      description={
        <>
          <p>监听用户键盘输入的核心 Hook，比直接使用 <code className="px-1 py-0.5 bg-gray-100 rounded">useStdin</code> 和手动监听 <code className="px-1 py-0.5 bg-gray-100 rounded">data</code> 事件要简单得多。</p>
          <p>它会在用户每次输入时调用你传入的 <code className="px-1 py-0.5 bg-gray-100 rounded">inputHandler(input, key)</code> 回调，并通过 <code className="px-1 py-0.5 bg-gray-100 rounded">key</code> 告诉你是否按下了方向键、Enter、Tab 等常见按键。</p>
          <p className="text-base text-gray-500 mt-2">
            函数签名：<code className="px-1 py-0.5 bg-gray-100 rounded">useInput(inputHandler, options?)</code>
          </p>
        </>
      }
    />
  )
}


