
import { 
  Icon,
  IconApi, 
  IconAppWindow, 
  IconBook, 
  IconBrandReactNative, 
  IconColorSwatch, 
  IconComponents, 
  IconFileTypeTsx, 
  IconFocus, 
  IconFocus2, 
  IconHospitalCircle, 
  IconKeyboard, 
  IconProps, 
  IconSeparator,
  IconSpace, 
  IconSquare, 
  IconStackForward, 
  IconTerminal, 
  IconTerminal2, 
  IconTestPipe, 
  IconTransform, 
  IconTypography
} from "@tabler/icons-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type Menu = {
  title: string
  url: string
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  items?: Menu[]
}

const menus: Menu[] = [
  {
    title: "Components",
    url: "/core-components",
    icon: IconFileTypeTsx,
    items: [
      {
        title: "Text",
        url: "/core-components/text",
        icon: IconTypography,
      },
      {
        title: "Box",
        url: "/core-components/box",
        icon: IconSquare,
      },
      {
        title: "Newline",
        url: "/core-components/newline",
        icon: IconSeparator,
      },
      {
        title: "Spacer",
        url: "/core-components/spacer",
        icon: IconSpace,
      },
      {
        title: "Static",
        url: "/core-components/static",
        icon: IconStackForward,
      },
      {
        title: "Transform",
        url: "/core-components/transform",
        icon: IconTransform,
      },
    ],
  },
  {
    title: "Hooks",
    url: "/hooks",
    icon: IconHospitalCircle,
    items: [
      {
        title: "useInput",
        url: "/hooks/useinput",
        icon: IconKeyboard,
      },
      {
        title: "useApp",
        url: "/hooks/useapp",
        icon: IconAppWindow,
      },
      {
        title: "useStdin",
        url: "/hooks/usestdin",
        icon: IconTerminal2,
      },
      {
        title: "useStdout",
        url: "/hooks/usestdout",
        icon: IconTerminal,
      },
      {
        title: "useStderr",
        url: "/hooks/usestderr",
        icon: IconTerminal,
      },
      {
        title: "useFocus",
        url: "/hooks/usefocus",
        icon: IconFocus,
      },
      {
        title: "useFocusManager",
        url: "/hooks/usefocusmanager",
        icon: IconFocus2,
      },
    ]
  },
  {
    title: "API",
    url: "/api",
    icon: IconApi,
  },
  {
    title: "Testing",
    url: "/ink-testing",
    icon: IconTestPipe,
  },
  {
    title: "Using React Devtools",
    url: "/using-react-devtools",
    icon: IconBrandReactNative,
  },
  {
    title: "Screen Reader Support",
    url: "/screen-reader-support",
    icon: IconBook,
  },
  {
    title: "Useful Components",
    url: "/useful-components",
    icon: IconComponents,
  },
  {
    title: "Useful Hooks",
    url: "/useful-hooks",
    icon: IconHospitalCircle,
  },
  {
    title: "Examples",
    url: "/examples",
    icon: IconColorSwatch,
  },
]

export default menus;