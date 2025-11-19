import PropDoc from "@/app/components/prop-doc"
import { textExample, textPropsData } from "./data"

export default function TextPage() {
  return (
    <PropDoc 
      propTitle="Text" 
      fileName="text.js" 
      code={textExample} 
      propsData={textPropsData} 
      description={
        <>
          <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Text&gt;</code>
          {' '}用于渲染终端中的文本，并支持颜色、粗体、斜体、下划线、删除线、反色等丰富的样式效果。
          所有文本必须包裹在 <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;Text&gt;</code> 组件中。
        </>
      }
    />
  )
}


