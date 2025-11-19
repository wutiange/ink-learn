import PropDoc from "@/app/components/prop-doc"
import { boxExample, boxPropsData } from "./data"

export default function BoxPage() {
  return (
    <PropDoc 
      propTitle="Box" 
      fileName="box.js" 
      code={boxExample} 
      propsData={boxPropsData} 
      description={
        <>
          Box 组件是构建布局的基础组件，类似于浏览器中的 <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;div style=&quot;display: flex&quot;&gt;</code>
        </>
      }
    />
  )
}