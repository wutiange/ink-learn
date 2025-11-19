import PropDoc from "@/app/components/prop-doc"
import { transformExample, transformPropsData } from "./data"

export default function TransformPage() {
  return (
    <PropDoc 
      propTitle="Transform" 
      fileName="transform.js" 
      code={transformExample} 
      propsData={transformPropsData} 
      description={
        <>
          <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Transform&gt;</code>
          {' '}用于在输出到终端之前，对子组件渲染结果的字符串表示进行自定义转换，比如实现渐变文字、可点击链接或复杂文本效果。
        </>
      }
    />
  )
}


