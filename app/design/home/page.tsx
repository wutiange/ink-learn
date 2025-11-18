import Link from 'next/link'
import CodePreview from '@/app/components/code-preview'

export default function DesignHomePage() {
  const exampleCode = `import React from 'react';
import {render, Text, Box} from 'ink';

const App = () => (
  <Box flexDirection="column">
    <Text color="green">Hello Ink! 👋</Text>
  </Box>
);

render(<App />);`
  return (
    <div className="bg-gray-50">

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <i className="fas fa-terminal mr-2"></i>React for CLI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            使用 React 构建
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              命令行应用
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Ink 提供了与浏览器中相同的基于组件的 UI 构建体验，但用于命令行应用。
            <strong>实时编辑代码并查看效果</strong>，让学习更加高效。
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="#" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition transform hover:scale-105">
              <i className="fas fa-rocket mr-2"></i>快速开始
            </Link>
            <Link href="#" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-purple-600 hover:text-purple-600 transition">
              <i className="fas fa-play mr-2"></i>查看示例
            </Link>
          </div>

          {/* 代码示例 */}
          <CodePreview 
            code={exampleCode}
            filename="example.jsx"
            showPreview={true}
          />
        </div>
      </section>

      {/* 快速开始 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">快速开始</h2>
            <p className="text-xl text-gray-600">使用 create-ink-app 快速创建基于 Ink 的 CLI 应用</p>
          </div>

          <div className="space-y-8">
            {/* 使用 create-ink-app */}
            <div className="p-8 rounded-xl border-1 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">使用 create-ink-app（推荐）</h3>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 mb-3">创建 JavaScript 项目：</p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                      npx create-ink-app my-ink-cli
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-3">或创建 TypeScript 项目：</p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                      npx create-ink-app --typescript my-ink-cli
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 手动 JavaScript 设置 */}
            <div className="p-8 rounded-xl border-1 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">手动 JavaScript 设置</h3>
                  
                  <p className="text-gray-700 mb-4">
                    Ink 需要与浏览器中常规 React 应用相同的 Babel 配置。
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 mb-2 font-medium">安装 Babel preset：</p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                        npm install --save-dev @babel/preset-react
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 mb-2 font-medium">配置 babel.config.json：</p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                        <div className="text-yellow-300">{'{'}</div>
                        <div className="pl-4">
                          <span className="text-blue-300">&quot;presets&quot;</span>
                          <span className="text-white">: [</span>
                          <span className="text-green-300">&quot;@babel/preset-react&quot;</span>
                          <span className="text-white">]</span>
                        </div>
                        <div className="text-yellow-300">{'}'}</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 mb-2 font-medium">创建 source.js 文件：</p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                        <div className="text-purple-400">
                          <span>import</span>
                          <span className="text-white"> React </span>
                          <span>from</span>
                          <span className="text-green-300"> &apos;react&apos;</span>
                          <span className="text-white">;</span>
                        </div>
                        <div className="text-purple-400">
                          <span>import</span>
                          <span className="text-white"> {`{render, Text}`} </span>
                          <span>from</span>
                          <span className="text-green-300"> &apos;ink&apos;</span>
                          <span className="text-white">;</span>
                        </div>
                        <div className="mt-2"></div>
                        <div className="text-purple-400">
                          <span>const</span>
                          <span className="text-blue-300"> Demo </span>
                          <span className="text-white">= () =&gt; </span>
                          <span className="text-pink-300">&lt;Text&gt;</span>
                          <span className="text-white">Hello World</span>
                          <span className="text-pink-300">&lt;/Text&gt;</span>
                          <span className="text-white">;</span>
                        </div>
                        <div className="mt-2"></div>
                        <div>
                          <span className="text-blue-300">render</span>
                          <span className="text-white">(</span>
                          <span className="text-pink-300">&lt;Demo /&gt;</span>
                          <span className="text-white">);</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 mb-2 font-medium">使用 Babel 转译文件：</p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                        npx babel source.js -o cli.js
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 mb-2 font-medium">运行：</p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                        node cli
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <i className="fas fa-info-circle mr-2"></i>
                      如果不想在开发期间转译文件，可以使用 <code className="px-2 py-1 bg-blue-100 rounded">import-jsx</code> 或 <code className="px-2 py-1 bg-blue-100 rounded">@esbuild-kit/esm-loader</code> 来动态导入和转译 JSX 文件。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexbox 布局说明 */}
            <div className="p-8 rounded-xl border-1 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">关于布局</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ink 使用 <strong>Yoga</strong>（一个 Flexbox 布局引擎）来构建 CLI 用户界面，使用类似 CSS 的属性。
                    重要的是要记住<strong>每个元素都是一个 Flexbox 容器</strong>。可以把它想象成浏览器中的每个 <code className="px-2 py-1 bg-white rounded">&lt;div&gt;</code> 都有 <code className="px-2 py-1 bg-white rounded">display: flex</code>。
                    请参阅 <code className="px-2 py-1 bg-white rounded">&lt;Box&gt;</code> 组件文档了解如何在 Ink 中使用 Flexbox 布局。
                  </p>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-900">
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      注意：所有文本都必须包装在 <code className="px-2 py-1 bg-yellow-100 rounded">&lt;Text&gt;</code> 组件中。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 在线尝试 */}
            <div className="text-center pt-8">
              <Link href="/design/doc" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition transform hover:scale-105 text-lg">
                <i className="fas fa-rocket mr-2"></i>进入交互式文档
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

