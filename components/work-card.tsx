'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Work } from '@/data/works'

export function WorkCard({ work }: { work: Work }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link href={`/works/${work.slug}`}>
        <Card className="h-full overflow-hidden">
          <div className="h-40 w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
          <CardHeader>
            <div className="mb-2">
              <Badge variant="secondary">{work.period}</Badge>
            </div>
            <CardTitle>{work.title}</CardTitle>
            <CardDescription>{work.shortDescription}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">{work.stack}</CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
