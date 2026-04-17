import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { getWorkBySlug, works } from '@/data/works'

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const work = getWorkBySlug(slug)

  if (!work) return { title: 'Work Not Found' }

  return {
    title: `${work.title} | Hanno Nguyen`
  }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = getWorkBySlug(slug)

  if (!work) {
    notFound()
  }

  return (
    <article className="space-y-6 py-10">
      <div className="space-y-3">
        <Link href="/works" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          ← Back to works
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{work.title}</h1>
        <Badge variant="secondary">{work.period}</Badge>
      </div>

      <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
        {work.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <dl className="grid gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
        <div>
          <dt className="text-xs uppercase tracking-wide text-zinc-500">Website</dt>
          <dd>
            <Link href={work.website} target="_blank" rel="noreferrer" className="text-zinc-900 underline underline-offset-4 dark:text-zinc-100">
              {work.website}
            </Link>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-zinc-500">Role</dt>
          <dd>{work.role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-zinc-500">Stack</dt>
          <dd>{work.stack}</dd>
        </div>
      </dl>

      <div className="space-y-4">
        {work.images.map((src, index) => (
          <div key={src} className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Image src={src} alt={`${work.slug}-${index + 1}`} width={1600} height={900} className="h-auto w-full" priority={index === 0} />
          </div>
        ))}
      </div>
    </article>
  )
}
