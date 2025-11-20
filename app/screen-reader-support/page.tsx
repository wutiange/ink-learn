'use client'

import CodePreview from "@/app/components/code-preview"

export default function ScreenReaderSupportPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">屏幕阅读器支持 (Screen Reader Support)</h1>
        <p className="text-lg text-gray-600">
          Ink 对屏幕阅读器提供了基本支持。
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">启用支持</h2>
        <p className="text-gray-700 mb-4">
          要启用它，可以通过 <code className="bg-gray-100 px-1 rounded">render</code> 函数传递 <code className="bg-gray-100 px-1 rounded">isScreenReaderEnabled</code> 选项，或者设置 <code className="bg-gray-100 px-1 rounded">INK_SCREEN_READER</code> 环境变量为 <code className="bg-gray-100 px-1 rounded">true</code>。
        </p>

        <CodePreview
          code={`render(<MyApp />, {isScreenReaderEnabled: true});`}
          showPreview={false}
          showHeader={false}
        />

        <p className="text-gray-700 mt-4">
          Ink 实现了 <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ARIA 规范</a> 的一小部分功能。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">示例</h2>
        <p className="text-gray-700 mb-4">
          当屏幕阅读器支持启用时，Ink 会尽力生成对屏幕阅读器友好的输出。
        </p>

        <CodePreview
          code={`<Box aria-role="checkbox" aria-state={{checked: true}}>
  <Text>Accept terms and conditions</Text>
</Box>`}
          showPreview={false}
          showHeader={false}
        />

        <p className="text-gray-700 mt-4 mb-2">Ink 将为屏幕阅读器生成以下输出：</p>
        <div className="bg-black text-white p-4 rounded font-mono text-sm mb-6">
          (checked) checkbox: Accept terms and conditions
        </div>

        <p className="text-gray-700 mb-4">
          你也可以使用 <code className="bg-gray-100 px-1 rounded">aria-label</code> 为屏幕阅读器提供自定义标签。
        </p>

        <CodePreview
          code={`<Box>
  <Box width="50%" height={1} backgroundColor="green" />
  <Text aria-label="Progress: 50%">50%</Text>
</Box>`}
          showPreview={false}
          showHeader={false}
        />

        <p className="text-gray-700 mt-4">
          在上面的示例中，屏幕阅读器将读取 "Progress: 50%" 而不是 "50%"。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">支持的属性</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">aria-label</h3>
            <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-100 px-1 rounded">string</code></p>
            <p className="text-gray-700">屏幕阅读器的元素标签。</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">aria-hidden</h3>
            <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-100 px-1 rounded">boolean</code> | Default: <code className="bg-gray-100 px-1 rounded">false</code></p>
            <p className="text-gray-700">对屏幕阅读器隐藏元素。</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">aria-role</h3>
            <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-100 px-1 rounded">string</code></p>
            <p className="text-gray-700 mb-2">元素的角色。</p>
            <p className="text-gray-700 mb-2">支持的值：</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['button', 'checkbox', 'radio', 'radiogroup', 'list', 'listitem', 'menu', 'menuitem', 'progressbar', 'tab', 'tablist', 'timer', 'toolbar', 'table'].map(role => (
                <code key={role} className="bg-gray-100 px-2 py-1 rounded text-center">{role}</code>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">aria-state</h3>
            <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-100 px-1 rounded">object</code></p>
            <p className="text-gray-700 mb-2">元素的状态。</p>
            <p className="text-gray-700 mb-2">支持的值：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">checked</code> (boolean)</li>
              <li><code className="bg-gray-100 px-1 rounded">disabled</code> (boolean)</li>
              <li><code className="bg-gray-100 px-1 rounded">expanded</code> (boolean)</li>
              <li><code className="bg-gray-100 px-1 rounded">selected</code> (boolean)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
