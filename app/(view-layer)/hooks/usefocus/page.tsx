import PropDoc from "@/app/components/prop-doc"
import { useFocusExample, useFocusParamsData } from "./data"

export default function UseFocusPage() {
  return (
    <PropDoc 
      propTitle="useFocus" 
      fileName="use-focus.js" 
      code={useFocusExample} 
      propsData={useFocusParamsData} 
      sectionTitle="API"
      description={
        <>
          <p>
            使用 <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">useFocus</code> Hook 的组件将变得"可聚焦"。
            当用户按下 <kbd className="px-1 bg-gray-200 rounded text-sm">Tab</kbd> 键时，Ink 会将焦点切换到该组件。
          </p>
          <p className="mt-2">
            如果多个组件使用了 useFocus，焦点将按照渲染顺序在它们之间切换。
          </p>
        </>
      }
    />
  )
}
