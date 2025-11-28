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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useMemo, useState } from "react"
import Link from "next/link"
import menus from "../menus"
import { usePathname } from "next/navigation"
import { findMenusByPathname } from "../utils"


export function AppSidebar() {
  const pathname = usePathname()
  const path = pathname.split('/')[1] ?? ''
  const menu = useMemo(() => findMenusByPathname(`/${path}`), [path])
  const [activeObj, setActiveObj] = useState<Record<string, boolean>>({[menu?.title ?? '']: true})
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <Image src={ink} alt="Logo" width={50} className="h-auto" loading="eager" />
                <span className="text-base font-semibold">Ink learn</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menus.map((item) => (
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
                          <SidebarMenuSubButton asChild isActive={subItem.url === pathname}>
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