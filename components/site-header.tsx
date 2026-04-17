'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Hanno Nguyen
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50',
                pathname === link.href && 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
