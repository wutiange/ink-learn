import PropDoc from "@/app/components/prop-doc"
import { useStderrExample, useStderrParamsData } from "./data"

export default function UseStderrPage() {
  return (
    <PropDoc 
      propTitle="useStderr" 
      fileName="use-stderr.js" 
      code={useStderrExample} 
      propsData={useStderrParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useStderr</code>
            {' '}Hook 暴露了 stderr 流。
          </p>
        </>
      }
    />
  )
}
