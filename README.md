# Hanno Portfolio V2 (Modern Rebuild)

A clean rebuild of the original `hanno-homepage` using:

- Next.js 16.0.1
- React 19.1.0
- Tailwind CSS 4.1.12
- shadcn/ui pattern (via `components.json` and generated-style primitives)
- Motion 12.37.0
- Vercel Analytics 2.0.1

## Source analysis (from original repository)

Preserved structure and content:

- Home page with hero intro, work summary, bio timeline, interests, and web links.
- Works index with two game website entries: Hiệp Khách Giang Hồ and Ngạo Thiên.
- Individual work detail pages with period, website, role, stack, and visuals.
- Custom 404 page.

Key structural improvements:

- Migrated to Next.js App Router architecture.
- Content separated into typed data modules (`data/site.ts`, `data/works.ts`).
- Reusable sections and UI primitives for maintainability.
- Subtle motion effects for production-safe reveal and hover polish.
- Vercel analytics integrated at root layout.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

This project is ready to deploy on Vercel with no extra configuration.
