import { bioTimeline } from '@/data/site'
import { SectionReveal } from '@/components/section-reveal'

export function BioSection() {
  return (
    <SectionReveal delay={0.1}>
      <section className="space-y-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Bio</h2>
        <ul className="space-y-3">
          {bioTimeline.map((item) => (
            <li key={item.year} className="grid gap-1 md:grid-cols-[170px_1fr]">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{item.year}</span>
              <span className="text-zinc-700 dark:text-zinc-300">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </SectionReveal>
  )
}
