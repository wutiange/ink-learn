import PropDoc from "@/app/components/prop-doc"
import { newlineExample, newlinePropsData } from "./data"

export default function NewlinePage() {
  return (
    <PropDoc 
      propTitle="Newline" 
      fileName="newline.js" 
      code={newlineExample} 
      propsData={newlinePropsData} 
      description={
        <>
          <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Newline&gt;</code>
          {' '}用于在文本中插入一行或多行换行符，必须在{' '}
          <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;Text&gt;</code>
          {' '}组件内部使用。
        </>
      }
    />
  )
}


