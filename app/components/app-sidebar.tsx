'use client'

import { ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import ink from "@/public/ink.png"
import { 
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import Link from "next/link"

// Menu items.
const items = [
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
    url: "/testing",
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

export function AppSidebar() {
  const [activeObj, setActiveObj] = useState<Record<string, boolean>>({})
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image src={ink} alt="Logo" width={50} height={50} />
                <span className="text-base font-semibold">Ink learn</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                open={activeObj[item.title] || false}
                onOpenChange={(open) => setActiveObj({ ...activeObj, [item.title]: open })}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.items && item.items.length > 0 && (
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items && item.items.length > 0 && <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}