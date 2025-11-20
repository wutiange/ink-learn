export const hooks = [
  {
    title: 'useInput',
    description: "用于处理用户输入。比直接使用 useStdin 和监听 data 事件更方便。每当用户输入时，useInput 的回调都会被调用。",
    path: '/hooks/useinput',
  },
  {
    title: 'useApp',
    description: '暴露一个 exit 方法，用于手动退出（卸载）应用。',
    path: '/hooks/useapp',
  },
  {
    title: 'useStdin',
    description: '暴露 stdin 流。',
    path: '/hooks/usestdin',
  },
  {
    title: 'useStdout',
    description: '暴露 stdout 流（Ink 渲染输出的地方）。',
    path: '/hooks/usestdout',
  },
  {
    title: 'useStderr',
    description: '暴露 stderr 流。',
    path: '/hooks/usestderr',
  },
  {
    title: 'useFocus',
    description: '使组件变得“可聚焦”。当用户按 Tab 时，Ink 会切换焦点到此组件。返回 isFocused 状态。',
    path: '/hooks/usefocus',
  },
  {
    title: 'useFocusManager',
    description: '暴露用于启用/禁用焦点管理或手动切换焦点的方法。',
    path: '/hooks/usefocusmanager',
  },
]
