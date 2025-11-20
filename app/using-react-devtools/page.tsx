'use client'

import CodePreview from "@/app/components/code-preview"

export default function UsingReactDevtoolsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">使用 React Devtools</h1>
        <p className="text-lg text-gray-600">
          Ink 开箱即支持 React Devtools。
        </p>
      </div>

      <section>
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-200">
           {/* 这里的图片路径可能需要调整，假设 public 下有 media 目录，或者使用外部链接 */}
           {/* 官方文档使用的是 media/devtools.jpg */}
           {/* 我们暂时使用文字描述或者占位符，如果 public/media/devtools.jpg 存在 */}
           <div className="bg-gray-100 p-8 text-center text-gray-500">
             React Devtools Screenshot
           </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">启用步骤</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. 安装依赖</h3>
            <p className="text-gray-700 mb-3">确保已安装可选的 <code className="bg-gray-100 px-1 rounded">react-devtools-core</code> 依赖。</p>
            <CodePreview
              code={`npm install --save-dev react-devtools-core`}
              language="bash"
              showPreview={false}
              showHeader={false}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. 运行应用</h3>
            <p className="text-gray-700 mb-3">使用 <code className="bg-gray-100 px-1 rounded">DEV=true</code> 环境变量运行你的应用：</p>
            <CodePreview
              code={`DEV=true my-cli`}
              language="bash"
              showPreview={false}
              showHeader={false}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. 启动 Devtools</h3>
            <p className="text-gray-700 mb-3">然后，启动 React Devtools 本身：</p>
            <CodePreview
              code={`npx react-devtools`}
              language="bash"
              showPreview={false}
              showHeader={false}
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-700">
            启动后，你应该能看到 CLI 的组件树。你甚至可以检查和更改组件的 props，并立即在 CLI 中看到结果，无需重启。
          </p>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">
            <strong>注意：</strong> 测试完成后，必须通过 Ctrl+C 手动退出 CLI。
          </p>
        </div>
      </section>
    </div>
  )
}
