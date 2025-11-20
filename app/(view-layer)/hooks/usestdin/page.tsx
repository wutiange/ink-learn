import PropDoc from "@/app/components/prop-doc"
import { useStdinExample, useStdinParamsData } from "./data"

export default function UseStdinPage() {
  return (
    <PropDoc 
      propTitle="useStdin" 
      fileName="use-stdin.js" 
      code={useStdinExample} 
      propsData={useStdinParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useStdin</code>
            {' '}Hook 暴露了 stdin 流。
          </p>
        </>
      }
    />
  )
}
