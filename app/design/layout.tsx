import { ReactNode } from 'react'
import Script from 'next/script'

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      {children}
    </>
  )
}

