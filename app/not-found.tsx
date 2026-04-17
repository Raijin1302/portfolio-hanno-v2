import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Not found</h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">Sorry, the page you requested does not exist or has moved.</p>
      <Link href="/">
        <Button>Return to home</Button>
      </Link>
    </div>
  )
}
