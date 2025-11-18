'use client'

import Link from 'next/link'

export default function DesignDocPage() {
  return (
    <div className="bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between h-16 px-4">
          {/* 左侧：Logo + 面包屑 */}
          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <i className="fas fa-bars text-gray-600"></i>
            </button>
            
            <Link href="/design/home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="font-bold text-gray-900 hidden sm:block">Ink Learn</span>
            </Link>

            <div className="hidden md:flex items-center text-sm text-gray-500">
              <i className="fas fa-chevron-right mx-2 text-xs"></i>
              <span>Components</span>
              <i className="fas fa-chevron-right mx-2 text-xs"></i>
              <span className="text-purple-600 font-medium">Box</span>
            </div>
          </div>

          {/* 中间：搜索 */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="搜索文档... (⌘K)" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          {/* 右侧：操作按钮 */}
          <div className="flex items-center space-x-2">
            {/* 运行代码按钮 */}
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition flex items-center space-x-2">
              <i className="fas fa-play"></i>
              <span className="hidden sm:inline">运行</span>
            </button>

            {/* 重置代码 */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition" title="重置代码">
              <i className="fas fa-undo text-gray-600"></i>
            </button>

            {/* 复制代码 */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition" title="复制代码">
              <i className="fas fa-copy text-gray-600"></i>
            </button>

            {/* 语言切换 */}
            <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
              <i className="fas fa-globe text-gray-600"></i>
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">中文</span>
            </button>

            {/* GitHub 同步状态 */}
            <button className="flex items-center space-x-2 px-3 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition" title="点击同步">
              <i className="fas fa-check-circle text-green-500"></i>
              <span className="text-sm text-green-700 hidden lg:inline">已同步</span>
            </button>

            {/* 设置 */}
            <Link href="/design/settings" className="p-2 hover:bg-gray-100 rounded-lg transition" title="设置">
              <i className="fas fa-cog text-gray-600"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* 主内容区域 */}
      <div className="flex pt-16">
        
        {/* 左侧边栏：导航 */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 bg-white fixed left-0 h-full overflow-y-auto" style={{top: '64px'}}>
          <div className="p-4">
            
            {/* 导航菜单 */}
            <nav className="space-y-1">
              
              {/* Components 分组 */}
              <div className="mb-4">
                <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span>Components</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="space-y-1 ml-2">
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-font text-gray-400"></i>
                    <span>Text</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm bg-purple-50 text-purple-700 rounded-lg font-medium">
                    <i className="fas fa-square text-purple-600"></i>
                    <span>Box</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-minus text-gray-400"></i>
                    <span>Newline</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-arrows-alt-h text-gray-400"></i>
                    <span>Spacer</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-layer-group text-gray-400"></i>
                    <span>Static</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-magic text-gray-400"></i>
                    <span>Transform</span>
                  </Link>
                </div>
              </div>

              {/* Hooks 分组 */}
              <div className="mb-4">
                <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span>Hooks</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="space-y-1 ml-2">
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-keyboard text-gray-400"></i>
                    <span>useInput</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-window-maximize text-gray-400"></i>
                    <span>useApp</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-terminal text-gray-400"></i>
                    <span>useStdin</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-terminal text-gray-400"></i>
                    <span>useStdout</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-exclamation-triangle text-gray-400"></i>
                    <span>useStderr</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-bullseye text-gray-400"></i>
                    <span>useFocus</span>
                  </Link>
                  <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <i className="fas fa-crosshairs text-gray-400"></i>
                    <span>useFocusManager</span>
                  </Link>
                </div>
              </div>

              {/* 其他分组 */}
              <div>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-book text-gray-400"></i>
                  <span>API</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-flask text-gray-400"></i>
                  <span>Testing</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-tools text-gray-400"></i>
                  <span>React DevTools</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-universal-access text-gray-400"></i>
                  <span>Screen Reader</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-puzzle-piece text-gray-400"></i>
                  <span>Useful Components</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-code-branch text-gray-400"></i>
                  <span>Useful Hooks</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <i className="fas fa-palette text-gray-400"></i>
                  <span>Examples</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        {/* 主要内容区域：三栏布局 */}
        <main className="flex-1 lg:ml-64">
          <div className="grid grid-cols-1 xl:grid-cols-2" style={{height: 'calc(100vh - 64px)'}}>
            
            {/* 左栏：文档内容 */}
            <div className="border-r border-gray-200 bg-white overflow-y-auto">
              <div className="p-8">
                
                {/* 标题 */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">Box</h1>
                  <p className="text-xl text-gray-600">
                    <code className="px-2 py-1 bg-purple-50 text-purple-700 rounded">&lt;Box&gt;</code> 
                    {' '}是构建布局的基础组件，类似于浏览器中的{' '}
                    <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded">&lt;div style=&quot;display: flex&quot;&gt;</code>
                  </p>
                </div>

                {/* 快速示例 */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">快速示例</h2>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                      <span>在编辑器中打开</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                      <span className="text-sm text-gray-400">example.jsx</span>
                      <button className="text-xs text-gray-400 hover:text-gray-200">
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                    <pre className="p-4 text-sm font-mono overflow-x-auto"><code><span className="text-purple-400">import</span> <span className="text-blue-300">{`{render, Box, Text}`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">&apos;ink&apos;</span>;

<span className="text-purple-400">const</span> <span className="text-blue-300">Example</span> <span className="text-pink-400">=</span> <span className="text-yellow-300">()</span> <span className="text-pink-400">=&gt;</span> <span className="text-yellow-300">(</span>
  <span className="text-pink-300">&lt;Box</span> <span className="text-blue-300">margin</span><span className="text-white">=</span><span className="text-yellow-300">{`{2}`}</span><span className="text-pink-300">&gt;</span>
    <span className="text-pink-300">&lt;Text&gt;</span><span className="text-white">This is a box with margin</span><span className="text-pink-300">&lt;/Text&gt;</span>
  <span className="text-pink-300">&lt;/Box&gt;</span>
<span className="text-yellow-300">)</span>;

<span className="text-blue-300">render</span><span className="text-yellow-300">(</span><span className="text-pink-300">&lt;Example /&gt;</span><span className="text-yellow-300">)</span>;</code></pre>
                  </div>
                </div>

                {/* Props 文档 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>
                  
                  {/* width */}
                  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <code className="text-lg font-semibold text-purple-700">width</code>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">string</span>
                          </div>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-3">
                        设置元素的宽度（以空格为单位）。也可以设置为百分比，会基于父元素的宽度计算。
                      </p>
                      <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                        <span>查看示例</span>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* height */}
                  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <code className="text-lg font-semibold text-purple-700">height</code>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">string</span>
                          </div>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-3">
                        设置元素的高度（以行为单位）。也可以设置为百分比，会基于父元素的高度计算。
                      </p>
                      <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                        <span>查看示例</span>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* padding */}
                  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <code className="text-lg font-semibold text-purple-700">padding</code>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">number</span>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-3">
                        设置元素的内边距。
                      </p>
                      <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                        <span>查看示例</span>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* 更多 Props 提示 */}
                  <div className="text-center py-4">
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      显示更多属性 <i className="fas fa-chevron-down ml-1"></i>
                    </button>
                  </div>
                </div>

                {/* 相关链接 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">相关资源</h2>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-external-link-alt text-gray-400"></i>
                        <span className="font-medium text-gray-900">Yoga Layout 文档</span>
                      </div>
                      <i className="fas fa-arrow-right text-gray-400"></i>
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
                      <div className="flex items-center space-x-3">
                        <i className="fab fa-github text-gray-400"></i>
                        <span className="font-medium text-gray-900">GitHub 源码</span>
                      </div>
                      <i className="fas fa-arrow-right text-gray-400"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* 右栏：代码编辑器 + 实时预览 */}
            <div className="flex flex-col bg-gray-900">
              
              {/* 标签栏 */}
              <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
                    <i className="fas fa-code mr-2"></i>编辑器
                  </button>
                  <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">
                    <i className="fas fa-terminal mr-2"></i>预览
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white text-sm" title="全屏">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
              </div>

              {/* 代码编辑器 */}
              <div className="flex-1 overflow-hidden">
                <div className="h-1/2 border-b border-gray-700">
                  <div className="h-full overflow-auto">
                    <div className="p-4 font-mono text-sm">
                      <div className="flex">
                        <div className="text-gray-500 select-none pr-4 text-right" style={{minWidth: '3rem'}}>
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                          <div>5</div>
                          <div>6</div>
                          <div>7</div>
                          <div>8</div>
                          <div>9</div>
                          <div>10</div>
                        </div>
                        <div className="flex-1">
                          <div><span className="text-purple-400">import</span> <span className="text-blue-300">{`{render, Box, Text}`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">&apos;ink&apos;</span>;</div>
                          <div>&nbsp;</div>
                          <div><span className="text-purple-400">const</span> <span className="text-blue-300">Example</span> <span className="text-pink-400">=</span> <span className="text-yellow-300">()</span> <span className="text-pink-400">=&gt;</span> <span className="text-yellow-300">(</span></div>
                          <div className="pl-4"><span className="text-pink-300">&lt;Box</span> <span className="text-blue-300">width</span><span className="text-white">=</span><span className="text-yellow-300">{`{10}`}</span> <span className="text-blue-300">borderColor</span><span className="text-white">=</span><span className="text-green-300">&quot;blue&quot;</span> <span className="text-blue-300">borderStyle</span><span className="text-white">=</span><span className="text-green-300">&quot;round&quot;</span><span className="text-pink-300">&gt;</span></div>
                          <div className="pl-8"><span className="text-pink-300">&lt;Text&gt;</span><span className="text-white">X</span><span className="text-pink-300">&lt;/Text&gt;</span></div>
                          <div className="pl-4"><span className="text-pink-300">&lt;/Box&gt;</span></div>
                          <div><span className="text-yellow-300">)</span>;</div>
                          <div>&nbsp;</div>
                          <div><span className="text-blue-300">render</span><span className="text-yellow-300">(</span><span className="text-pink-300">&lt;Example /&gt;</span><span className="text-yellow-300">)</span>;</div>
                          <div>&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 实时预览 */}
                <div className="h-1/2 bg-black">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-400 ml-4">Terminal Output</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-500 text-white text-xs rounded flex items-center space-x-1">
                        <i className="fas fa-circle text-xs animate-pulse"></i>
                        <span>运行中</span>
                      </span>
                      <button className="text-gray-400 hover:text-white text-sm" title="清空">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 font-mono text-sm text-green-400">
                    <pre>{`╭────────────╮
│            │
│     X      │
│            │
╰────────────╯`}</pre>
                    <div className="mt-4 text-gray-500">
                      <i className="fas fa-check-circle text-green-500"></i> 执行成功 (0.42s)
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部操作栏 */}
              <div className="bg-gray-800 border-t border-gray-700 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span><i className="fas fa-check-circle text-green-500"></i> 语法正确</span>
                    <span>Ln 4, Col 12</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition">
                      <i className="fas fa-save mr-1"></i>保存
                    </button>
                    <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition">
                      <i className="fas fa-play mr-1"></i>运行 (Cmd+Enter)
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

