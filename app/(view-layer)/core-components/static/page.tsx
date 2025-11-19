import PropDoc from "@/app/components/prop-doc"
import { staticExample, staticPropsData } from "./data"

export default function StaticPage() {
  return (
    <PropDoc 
      propTitle="Static" 
      fileName="static.js" 
      code={staticExample} 
      propsData={staticPropsData} 
      description={
        <>
          <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Static&gt;</code>
          {' '}会将内容永久渲染在其它输出之上，适合用来显示「已完成的任务列表」「日志」等不会再变化的内容。
        </>
      }
    />
  )
}


