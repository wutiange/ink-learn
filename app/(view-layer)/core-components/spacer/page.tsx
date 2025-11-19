import PropDoc from "@/app/components/prop-doc"
import { spacerExample, spacerPropsData } from "./data"

export default function SpacerPage() {
  return (
    <PropDoc 
      propTitle="Spacer" 
      fileName="spacer.js" 
      code={spacerExample} 
      propsData={spacerPropsData} 
      description={
        <>
          <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Spacer&gt;</code>
          {' '}是一个可伸缩的占位空间，用于在主轴方向上填充所有剩余空间，常用于在左右或上下元素之间自动拉开距离。
        </>
      }
    />
  )
}


