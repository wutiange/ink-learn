import PropDoc from "@/app/components/prop-doc"
import { useFocusManagerExample, useFocusManagerParamsData } from "./data"

export default function UseFocusManagerPage() {
  return (
    <PropDoc 
      propTitle="useFocusManager" 
      fileName="use-focus-manager.js" 
      code={useFocusManagerExample} 
      propsData={useFocusManagerParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useFocusManager</code>
            {' '}Hook 暴露了一些方法来手动启用/禁用焦点管理，或手动切换焦点。
          </p>
        </>
      }
    />
  )
}
