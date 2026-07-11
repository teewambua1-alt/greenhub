'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { AIAssistantWidget } from './AIAssistantWidget'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
      <AIAssistantWidget />
    </div>
  )
}
