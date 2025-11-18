import Link from 'next/link'

export default function DesignOverview() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <span className="text-white font-bold text-4xl">I</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Ink Learn 设计原型</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            这是 Ink Learn 文档网站的设计原型集合。点击下方卡片查看各个页面的设计。
          </p>
        </div>

        {/* 设计卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          
          {/* 首页设计 */}
          <Link href="/design/home" className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                <i className="fas fa-home text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">首页设计</h3>
                <p className="text-gray-600 mb-4">
                  产品介绍、特性展示、快速开始引导
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>查看设计</span>
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* 文档页面设计 */}
          <Link href="/design/doc" className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                <i className="fas fa-book-open text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">文档页面设计</h3>
                <p className="text-gray-600 mb-4">
                  三栏布局：导航 + 文档 + 实时编辑器
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>查看设计</span>
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* 设置页面设计 */}
          <Link href="/design/settings" className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                <i className="fas fa-cog text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">设置页面设计</h3>
                <p className="text-gray-600 mb-4">
                  配置、GitHub 同步、编辑器设置
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>查看设计</span>
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 设计特点 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">设计特点</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-code text-purple-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">实时代码编辑</h3>
                <p className="text-sm text-gray-600">内置代码编辑器，支持语法高亮和实时预览</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-sync text-green-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">GitHub 同步</h3>
                <p className="text-sm text-gray-600">自动同步官方文档，保持内容最新</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">响应式设计</h3>
                <p className="text-sm text-gray-600">完美适配桌面、平板和移动设备</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-language text-pink-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">多语言支持</h3>
                <p className="text-sm text-gray-600">预留语言切换功能，支持国际化</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-terminal text-yellow-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">终端模拟</h3>
                <p className="text-sm text-gray-600">真实展示 CLI 应用的运行效果</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-palette text-indigo-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">现代化 UI</h3>
                <p className="text-sm text-gray-600">使用 Tailwind CSS，渐变色和流畅动画</p>
              </div>
            </div>
          </div>
        </div>

        {/* 技术栈 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">技术栈</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <i className="fab fa-html5 text-4xl text-orange-500 mb-2"></i>
              <p className="font-medium text-gray-900">HTML5</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <i className="fab fa-css3-alt text-4xl text-blue-500 mb-2"></i>
              <p className="font-medium text-gray-900">Tailwind CSS</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <i className="fab fa-js text-4xl text-yellow-400 mb-2"></i>
              <p className="font-medium text-gray-900">JavaScript</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-icons text-4xl text-purple-500 mb-2"></i>
              <p className="font-medium text-gray-900">Font Awesome</p>
            </div>
          </div>
        </div>

        {/* 实现建议 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">实现建议</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                短期目标
              </h3>
              <ul className="ml-11 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>实现代码编辑器（Monaco Editor 或 CodeMirror）</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>终端模拟器（xterm.js）</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>路由系统和单页应用</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>国际化功能（中英文切换）</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                中期目标
              </h3>
              <ul className="ml-11 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-clock text-blue-500 mr-2 mt-1"></i>
                  <span>GitHub API 集成，自动同步文档</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-blue-500 mr-2 mt-1"></i>
                  <span>WebContainer 运行 Ink 代码</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-blue-500 mr-2 mt-1"></i>
                  <span>用户系统和代码片段保存</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-blue-500 mr-2 mt-1"></i>
                  <span>全文搜索功能</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                长期目标
              </h3>
              <ul className="ml-11 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-star text-pink-500 mr-2 mt-1"></i>
                  <span>社区功能：分享和讨论</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-pink-500 mr-2 mt-1"></i>
                  <span>版本管理和历史文档</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-pink-500 mr-2 mt-1"></i>
                  <span>AI 代码助手</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-pink-500 mr-2 mt-1"></i>
                  <span>移动应用开发</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">
            <i className="fas fa-info-circle mr-2"></i>
            这些是设计原型，展示了网站的视觉效果和布局
          </p>
          <p className="text-sm">
            查看 <code className="px-2 py-1 bg-gray-100 rounded">README.md</code> 了解更多详情
          </p>
        </div>

      </div>
    </div>
  )
}

