import PropDoc from "@/app/components/prop-doc"
import { useStdoutExample, useStdoutParamsData } from "./data"

export default function UseStdoutPage() {
  return (
    <PropDoc 
      propTitle="useStdout" 
      fileName="use-stdout.js" 
      code={useStdoutExample} 
      propsData={useStdoutParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useStdout</code>
            {' '}Hook 暴露了 stdout 流（Ink 渲染应用的地方）。
          </p>
        </>
      }
    />
  )
}
