
# LEO Electrical & Plumbing — Next.js Frontend

## Quick Start
1. Install Node 18+ and pnpm or npm.
2. Copy `.env.local` and adjust `NEXT_PUBLIC_API_BASE_URL` to your Django URL.
3. Install deps and start dev:
   ```bash
   npm install
   npm run dev
   ```

## Pages
- `/` Home (hero, services, testimonials, projects, CTA)
- `/services` Services detail
- `/projects` Projects
- `/contact` Lead form with phone/WhatsApp

## Tech
- Next.js App Router + TypeScript
- TailwindCSS
- Redux Toolkit + RTK Query (API base: `NEXT_PUBLIC_API_BASE_URL`)
- SEO: sitemap, OpenGraph, LocalBusiness JSON-LD

## Deploy
- Vercel: set envs from `.env.local` (especially `NEXT_PUBLIC_API_BASE_URL`).
