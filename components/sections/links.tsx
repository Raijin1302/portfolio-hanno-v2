import Link from 'next/link'
import { socialLinks } from '@/data/site'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'

export function LinksSection() {
  return (
    <SectionReveal delay={0.15}>
      <section className="space-y-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">On the web</h2>
        <ul className="space-y-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} target="_blank" rel="noreferrer">
                <Button variant="ghost" className="justify-start">
                  {link.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionReveal>
  )
}
