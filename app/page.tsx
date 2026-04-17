import { AboutSection } from '@/components/sections/about'
import { BioSection } from '@/components/sections/bio'
import { HeroSection } from '@/components/sections/hero'
import { LinksSection } from '@/components/sections/links'

export default function HomePage() {
  return (
    <div className="py-6">
      <HeroSection />
      <AboutSection />
      <BioSection />
      <section className="py-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">I ♥</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">Art, Music, UI Design, Reading, Motion, Gaming, Machine Learning</p>
      </section>
      <LinksSection />
    </div>
  )
}
