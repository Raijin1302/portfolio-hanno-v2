import type { Metadata } from 'next'
import { WorkCard } from '@/components/work-card'
import { SectionReveal } from '@/components/section-reveal'
import { works } from '@/data/works'

export const metadata: Metadata = {
  title: 'Works | Hanno Nguyen'
}

export default function WorksPage() {
  return (
    <div className="space-y-6 py-10">
      <SectionReveal>
        <h1 className="text-3xl font-semibold tracking-tight">Works</h1>
      </SectionReveal>
      <section className="grid gap-6 md:grid-cols-2">
        {works.map((work, index) => (
          <SectionReveal key={work.slug} delay={0.05 * (index + 1)}>
            <WorkCard work={work} />
          </SectionReveal>
        ))}
      </section>
    </div>
  )
}
