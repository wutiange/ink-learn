import { Suspense } from "react";
import Preview from "./components/main/preview";


export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center bg-gray-950">
        <div className="text-gray-400">加载中...</div>
      </div>
    }>
      <Preview />
    </Suspense>
  )
}

