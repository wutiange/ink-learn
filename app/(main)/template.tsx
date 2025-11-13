'use client'

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { findMenusByPathname } from "../utils"

function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const title = useMemo(() => findMenusByPathname(pathname)?.title ?? '', [pathname])
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {children}
      </div>
    </>
  )
}

export default Template