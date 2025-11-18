import Link from 'next/link'

export default function DesignSettingsPage() {
  return (
    <div className="bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/design" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ink Learn</h1>
                <p className="text-xs text-gray-500">设置</p>
              </div>
            </Link>

            {/* 右侧操作 */}
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                <i className="fas fa-globe text-gray-600"></i>
                <span className="text-sm font-medium text-gray-700">中文</span>
                <i className="fas fa-chevron-down text-xs text-gray-500"></i>
              </button>

              <Link href="/design/home" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                返回主页
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">设置</h1>
            <p className="text-gray-600">配置你的 Ink Learn 体验</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* 侧边栏导航 */}
            <aside className="lg:col-span-1">
              <nav className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
                <ul className="space-y-1">
                  <li>
                    <a href="#general" className="flex items-center space-x-2 px-3 py-2 text-sm bg-purple-50 text-purple-700 rounded-lg font-medium">
                      <i className="fas fa-cog"></i>
                      <span>常规</span>
                    </a>
                  </li>
                  <li>
                    <a href="#sync" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                      <i className="fas fa-sync"></i>
                      <span>GitHub 同步</span>
                    </a>
                  </li>
                  <li>
                    <a href="#editor" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                      <i className="fas fa-code"></i>
                      <span>编辑器</span>
                    </a>
                  </li>
                  <li>
                    <a href="#appearance" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                      <i className="fas fa-palette"></i>
                      <span>外观</span>
                    </a>
                  </li>
                  <li>
                    <a href="#advanced" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
                      <i className="fas fa-sliders-h"></i>
                      <span>高级</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* 主内容区域 */}
            <main className="lg:col-span-3 space-y-6">
              
              {/* 常规设置 */}
              <section id="general" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-cog text-purple-600 mr-2"></i>常规设置
                </h2>
                
                {/* 语言设置 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    界面语言
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="zh-CN">简体中文</option>
                    <option value="en-US">English</option>
                    <option value="ja-JP">日本語</option>
                  </select>
                  <p className="mt-2 text-sm text-gray-500">
                    <i className="fas fa-info-circle"></i> 更改语言将在刷新页面后生效
                  </p>
                </div>

                {/* 自动保存 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">自动保存代码</h3>
                    <p className="text-sm text-gray-500">编辑器中的代码会自动保存到本地存储</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>

                {/* 自动运行 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">自动运行代码</h3>
                    <p className="text-sm text-gray-500">代码更改后自动运行并显示结果</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
              </section>

              {/* GitHub 同步 */}
              <section id="sync" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="fab fa-github text-purple-600 mr-2"></i>GitHub 同步
                </h2>

                {/* 同步状态 */}
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 text-xl mt-0.5"></i>
                    <div className="flex-1">
                      <h3 className="font-medium text-green-900 mb-1">文档已同步</h3>
                      <p className="text-sm text-green-700">
                        最后同步时间：2025-11-17 10:30:00
                      </p>
                      <p className="text-sm text-green-700">
                        来源：<a href="https://github.com/vadimdemedes/ink" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">vadimdemedes/ink</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 同步设置 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub 仓库地址
                  </label>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      defaultValue="https://github.com/vadimdemedes/ink" 
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      readOnly
                    />
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>

                {/* 自动同步 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">自动同步</h3>
                    <p className="text-sm text-gray-500">每天自动检查并同步最新文档</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>

                {/* 同步频率 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    同步频率
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="1">每天一次</option>
                    <option value="6">每 6 小时一次</option>
                    <option value="12">每 12 小时一次</option>
                    <option value="manual">仅手动同步</option>
                  </select>
                </div>

                {/* 手动同步按钮 */}
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center space-x-2">
                    <i className="fas fa-sync"></i>
                    <span>立即同步</span>
                  </button>
                </div>

                {/* 同步历史 */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">同步历史</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-check-circle text-green-500"></i>
                        <div>
                          <p className="text-sm font-medium text-gray-900">成功同步</p>
                          <p className="text-xs text-gray-500">2025-11-17 10:30:00</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">+12 更新</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-check-circle text-green-500"></i>
                        <div>
                          <p className="text-sm font-medium text-gray-900">成功同步</p>
                          <p className="text-xs text-gray-500">2025-11-16 10:30:00</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">+5 更新</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-check-circle text-green-500"></i>
                        <div>
                          <p className="text-sm font-medium text-gray-900">成功同步</p>
                          <p className="text-xs text-gray-500">2025-11-15 10:30:00</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">无更新</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 编辑器设置 */}
              <section id="editor" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-code text-purple-600 mr-2"></i>编辑器设置
                </h2>

                {/* 主题 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    编辑器主题
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="dark">Dark (VS Code)</option>
                    <option value="light">Light</option>
                    <option value="monokai">Monokai</option>
                    <option value="dracula">Dracula</option>
                  </select>
                </div>

                {/* 字体大小 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    字体大小
                  </label>
                  <div className="flex items-center space-x-4">
                    <input 
                      type="range" 
                      min="12" 
                      max="20" 
                      defaultValue="14" 
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-700 font-mono">14px</span>
                  </div>
                </div>

                {/* Tab 大小 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tab 大小（空格数）
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="2">2 个空格</option>
                    <option value="4">4 个空格</option>
                    <option value="8">8 个空格</option>
                  </select>
                </div>

                {/* 显示行号 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">显示行号</h3>
                    <p className="text-sm text-gray-500">在编辑器中显示代码行号</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>

                {/* 代码折叠 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">代码折叠</h3>
                    <p className="text-sm text-gray-500">允许折叠代码块</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>

                {/* 自动补全 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">自动补全</h3>
                    <p className="text-sm text-gray-500">启用智能代码补全</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
              </section>

              {/* 外观设置 */}
              <section id="appearance" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-palette text-purple-600 mr-2"></i>外观设置
                </h2>

                {/* 主题模式 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    主题模式
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-4 border-2 border-purple-500 rounded-lg text-center hover:bg-purple-50 transition">
                      <i className="fas fa-sun text-2xl text-yellow-500 mb-2"></i>
                      <p className="text-sm font-medium">浅色</p>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition">
                      <i className="fas fa-moon text-2xl text-blue-500 mb-2"></i>
                      <p className="text-sm font-medium">深色</p>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition">
                      <i className="fas fa-adjust text-2xl text-gray-500 mb-2"></i>
                      <p className="text-sm font-medium">跟随系统</p>
                    </button>
                  </div>
                </div>

                {/* 紧凑模式 */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">紧凑模式</h3>
                    <p className="text-sm text-gray-500">减少界面间距，显示更多内容</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>

                {/* 侧边栏位置 */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    侧边栏位置
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 border-2 border-purple-500 rounded-lg text-center hover:bg-purple-50 transition">
                      <p className="text-sm font-medium">左侧</p>
                    </button>
                    <button className="p-3 border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition">
                      <p className="text-sm font-medium">右侧</p>
                    </button>
                  </div>
                </div>
              </section>

              {/* 高级设置 */}
              <section id="advanced" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-sliders-h text-purple-600 mr-2"></i>高级设置
                </h2>

                {/* 缓存管理 */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">缓存管理</h3>
                  <p className="text-sm text-gray-500 mb-3">清除浏览器缓存可能会提高性能，但会清除所有本地保存的代码</p>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
                    <i className="fas fa-trash mr-2"></i>清除缓存
                  </button>
                </div>

                {/* 重置设置 */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">重置所有设置</h3>
                  <p className="text-sm text-gray-500 mb-3">将所有设置恢复为默认值</p>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                    <i className="fas fa-redo mr-2"></i>重置设置
                  </button>
                </div>

                {/* 导出/导入设置 */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">导出/导入设置</h3>
                  <p className="text-sm text-gray-500 mb-3">备份你的设置或在其他设备上恢复</p>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      <i className="fas fa-download mr-2"></i>导出设置
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      <i className="fas fa-upload mr-2"></i>导入设置
                    </button>
                  </div>
                </div>
              </section>

              {/* 保存按钮 */}
              <div className="flex items-center justify-end space-x-3 pt-6">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  取消
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition">
                  <i className="fas fa-save mr-2"></i>保存设置
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

