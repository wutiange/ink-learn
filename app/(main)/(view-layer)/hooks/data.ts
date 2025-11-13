
export const hooks = [
  {
    title: 'useInput',
    description: "This hook is used for handling user input. It's a more convenient alternative to using useStdin and listening for data events. The callback you pass to useInput is called for each character when the user enters any input. However, if the user pastes text and it's more than one character, the callback will be called only once, and the whole string will be passed as input. You can find a full example of using useInput at examples/use-input.",
    path: '/hooks/useinput',
  },
  {
    title: 'useApp',
    description: 'useApp is a React hook that exposes a method to manually exit the app (unmount).',
    path: '/hooks/useapp',
  },
  {
    title: 'useStdin',
    description: 'useStdin is a React hook that exposes the stdin stream.',
    path: '/hooks/usestdin',
  },
  {
    title: 'useStdout',
    description: 'useStdout is a React hook that exposes the stdout stream where Ink renders your app.',
    path: '/hooks/usestdout',
  },
  {
    title: 'useStderr',
    description: 'useStderr is a React hook that exposes the stderr stream.',
    path: '/hooks/usestderr',
  },
  {
    title: 'useFocus',
    description: 'A component that uses the useFocus hook becomes "focusable" to Ink, so when the user presses Tab, Ink will switch focus to this component. If there are multiple components that execute the useFocus hook, focus will be given to them in the order in which these components are rendered. This hook returns an object with an isFocused boolean property, which determines whether this component is focused.',
    path: '/hooks/usefocus',
  },
  {
    title: 'useFocusManager',
    description: 'This hook exposes methods to enable or disable focus management for all components or manually switch focus to next or previous components.',
    path: '/hooks/usefocusmanager',
  },
]