'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react/jsx-runtime"

function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const pathnameArr = pathname.split('/').slice(1)
  return (
    <div className="flex flex-col flex-1 h-lvh">
      <header className="flex items-center gap-2 p-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            {
              pathnameArr.map((item, index) => (
                <Fragment key={item}>
                  <BreadcrumbItem>
                    <Link href={`/${item}`}>
                      {item}
                    </Link>
                  </BreadcrumbItem>
                  {index !== pathnameArr.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
                </Fragment>
              ))
            }
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  )
}

export default Template