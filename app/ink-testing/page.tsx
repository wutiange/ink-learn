'use client'

import CodePreview from "@/app/components/code-preview"
import Link from "next/link"

export default function TestingPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">测试 (Testing)</h1>
        <p className="text-lg text-gray-600">
          Ink 组件可以使用 <a href="https://github.com/vadimdemedes/ink-testing-library" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ink-testing-library</a> 轻松进行测试。
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">基本用法</h2>
        <p className="text-gray-700 mb-6">
          下面是一个简单的示例，检查组件是如何渲染的：
        </p>

        <CodePreview
          code={`import React from 'react';
import {Text} from 'ink';
import {render} from 'ink-testing-library';

const Test = () => <Text>Hello World</Text>;
const {lastFrame} = render(<Test />);

lastFrame() === 'Hello World'; //=> true`}
          showPreview={false}
          showHeader={false}
        />
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            查看 <a href="https://github.com/vadimdemedes/ink-testing-library" target="_blank" rel="noopener noreferrer" className="font-medium underline">ink-testing-library</a> 获取更多示例和完整文档。
          </p>
        </div>
      </section>
    </div>
  )
}
