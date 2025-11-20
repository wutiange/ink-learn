import PropDoc from "@/app/components/prop-doc"
import { useAppExample, useAppParamsData } from "./data"

export default function UseAppPage() {
  return (
    <PropDoc 
      propTitle="useApp" 
      fileName="use-app.js" 
      code={useAppExample} 
      propsData={useAppParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useApp</code>
            {' '}是一个 React Hook，它暴露了一个方法来手动退出应用（卸载）。
          </p>
        </>
      }
    />
  )
}
