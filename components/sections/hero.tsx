import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/section-reveal'

export function HeroSection() {
  return (
    <SectionReveal>
      <section className="grid gap-8 py-12 md:grid-cols-[1fr_220px] md:items-center">
        <div className="space-y-5">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Hello, I&apos;m a front-end developer based in Vietnam.</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">Hanno Nguyen</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">Digital Learner (Developer / Designer / Analyst)</p>
          <Link href="/works">
            <Button>
              My portfolio <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="mx-auto size-44 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
          <div className="flex h-full w-full items-center justify-center text-xs tracking-[0.2em] text-zinc-500">PROFILE</div>
        </div>
      </section>
    </SectionReveal>
  )
}
