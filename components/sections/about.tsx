import { SectionReveal } from '@/components/section-reveal'

export function AboutSection() {
  return (
    <SectionReveal delay={0.05}>
      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Work</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          Hanno aka Hoan is a Freelance Classified Analyst and a Front-end Developer based in Ho Chi Minh City with an
          ambition for building digital products he wants. Now he&apos;s seeking a Front-end Developer position in a
          company that requires him to utilize his skills, abilities and experience in the IT field to ensure the
          company&apos;s success.
        </p>
      </section>
    </SectionReveal>
  )
}
