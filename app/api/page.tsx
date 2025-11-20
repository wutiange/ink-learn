'use client'

import CodePreview from "@/app/components/code-preview"

export default function ApiPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API</h1>
        <p className="text-lg text-gray-600">
          Ink 的核心 API 文档。
        </p>
      </div>

      {/* render */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">render(tree, options?)</h2>
        <p className="text-gray-700 mb-4">
          挂载组件并渲染输出。返回一个 <a href="#instance" className="text-blue-600 hover:underline">Instance</a> 对象。
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">参数</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900">tree</h4>
              <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-200 px-1 rounded">ReactElement</code></p>
              <p className="text-gray-700">要渲染的 React 组件树。</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900">options</h4>
              <p className="text-sm text-gray-500 mb-1">Type: <code className="bg-gray-200 px-1 rounded">object</code></p>
              
              <div className="pl-4 mt-2 space-y-4 border-l-2 border-gray-200">
                <div>
                  <h5 className="font-medium text-gray-800">stdout</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">stream.Writable</code> | Default: <code className="bg-gray-100 px-1 rounded">process.stdout</code></p>
                  <p className="text-sm text-gray-700">应用渲染输出的目标流。</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800">stdin</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">stream.Readable</code> | Default: <code className="bg-gray-100 px-1 rounded">process.stdin</code></p>
                  <p className="text-sm text-gray-700">应用监听输入的来源流。</p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800">stderr</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">stream.Writable</code> | Default: <code className="bg-gray-100 px-1 rounded">process.stderr</code></p>
                  <p className="text-sm text-gray-700">错误输出流。</p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800">exitOnCtrlC</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">boolean</code> | Default: <code className="bg-gray-100 px-1 rounded">true</code></p>
                  <p className="text-sm text-gray-700">
                    配置是否监听 Ctrl+C 键盘输入并退出应用。
                    如果 <code className="bg-gray-100 px-1 rounded">process.stdin</code> 处于 raw mode（因为默认情况下 Ctrl+C 会被忽略），这个配置是必须的。
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800">patchConsole</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">boolean</code> | Default: <code className="bg-gray-100 px-1 rounded">true</code></p>
                  <p className="text-sm text-gray-700">
                    Patch console 方法以确保 console 输出不会与 Ink 的输出混合。
                    当调用 <code className="bg-gray-100 px-1 rounded">console.*</code> 方法时，Ink 会拦截输出，清除主输出，渲染 console 内容，然后重新渲染主输出。
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800">debug</h5>
                  <p className="text-xs text-gray-500">Type: <code className="bg-gray-100 px-1 rounded">boolean</code> | Default: <code className="bg-gray-100 px-1 rounded">false</code></p>
                  <p className="text-sm text-gray-700">如果为 true，每次更新都会作为单独的输出渲染，而不会替换之前的输出。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instance */}
      <section id="instance">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Instance</h2>
        <p className="text-gray-700 mb-4">
          <code className="bg-gray-100 px-1 rounded">render()</code> 返回的对象。
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">rerender(tree)</h3>
            <p className="text-gray-700 mb-3">用新的节点替换之前的根节点，或更新当前根节点的 props。</p>
            <CodePreview
              code={`// Update props of the root node
const {rerender} = render(<Counter count={1} />);
rerender(<Counter count={2} />);

// Replace root node
const {rerender} = render(<OldCounter />);
rerender(<NewCounter />);`}
              showPreview={false}
              showHeader={false}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">unmount()</h3>
            <p className="text-gray-700 mb-3">手动卸载整个 Ink 应用。</p>
            <CodePreview
              code={`const {unmount} = render(<MyApp />);
unmount();`}
              showPreview={false}
              showHeader={false}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">waitUntilExit()</h3>
            <p className="text-gray-700 mb-3">返回一个 Promise，当应用卸载时 resolve。</p>
            <CodePreview
              code={`const {unmount, waitUntilExit} = render(<MyApp />);

setTimeout(unmount, 1000);

await waitUntilExit(); // resolves after unmount() is called`}
              showPreview={false}
              showHeader={false}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">clear()</h3>
            <p className="text-gray-700 mb-3">清除输出。</p>
            <CodePreview
              code={`const {clear} = render(<MyApp />);
clear();`}
              showPreview={false}
              showHeader={false}
            />
          </div>
        </div>
      </section>

      {/* measureElement */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">measureElement(ref)</h2>
        <p className="text-gray-700 mb-4">
          测量特定 <code className="bg-gray-100 px-1 rounded">&lt;Box&gt;</code> 元素的尺寸。
          返回包含 <code className="bg-gray-100 px-1 rounded">width</code> 和 <code className="bg-gray-100 px-1 rounded">height</code> 属性的对象。
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700 text-sm">
            <strong>注意：</strong> <code className="font-bold">measureElement()</code> 只有在初始渲染后布局计算完成后才返回正确结果。在此之前，宽高均为 0。建议在 <code className="font-bold">useEffect</code> 中调用。
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">ref</h3>
        <p className="text-gray-700 mb-3">Type: <code className="bg-gray-100 px-1 rounded">MutableRef</code></p>
        <p className="text-gray-700 mb-6">
          使用 <code className="bg-gray-100 px-1 rounded">ref</code> 属性捕获的 <code className="bg-gray-100 px-1 rounded">&lt;Box&gt;</code> 元素引用。
        </p>

        <CodePreview
          code={`import {render, measureElement, Box, Text} from 'ink';

const Example = () => {
  const ref = useRef();

  useEffect(() => {
    const {width, height} = measureElement(ref.current);
    // width = 100, height = 1
  }, []);

  return (
    <Box width={100}>
      <Box ref={ref}>
        <Text>This box will stretch to 100 width</Text>
      </Box>
    </Box>
  );
};

render(<Example />);`}
          showPreview={false}
          showHeader={false}
        />
      </section>
    </div>
  )
}
