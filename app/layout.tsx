import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Hanno Nguyen | Portfolio',
  description: 'Modern rebuild of Hanno Nguyen portfolio website.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl px-4">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
