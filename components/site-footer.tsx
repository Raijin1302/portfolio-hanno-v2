export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-5xl px-4 text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Hanno Nguyen. Built with Next.js and deployed on Vercel.
      </div>
    </footer>
  )
}
