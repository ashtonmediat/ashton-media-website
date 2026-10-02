# ashtonmedia.net

The website of Ashton Media Tanzania. Next.js (App Router) on Vercel. Content lives in
`src/content/*.ts` — change a fact there and it changes everywhere.

## Run locally
```
npm install
cp .env.example .env.local   # fill in as needed
npm run dev
```

## Where things are
- `src/content/site.ts` — company facts, proof numbers, cities, flagship sites, awards, timeline
- `src/content/formats.ts` — the four format pages (digital, static, airport, malls & 3D) with FAQs
- `src/content/work.ts` — case studies (`/work/…`)
- `src/content/posts.ts` — Insights articles (`/insights/…`), Markdown bodies
- `src/content/redirects.ts` — every old Weebly URL → new URL (applied in `next.config.ts`; `vercel.json` is generated from it)
- `src/app/api/enquiry/route.ts` — form delivery by email (Resend)
- `CONTENT-NOTES.md` — claims that still need the company's confirmation

## Deploy
Push to `main`; Vercel builds and deploys. Environment variables are listed in `.env.example`.
Regenerate `vercel.json` after editing redirects: `node scripts/make-vercel-json.mjs`.

## Checks before launch
`npm run build` must be clean. Then on the preview URL: every redirect in `src/content/redirects.ts`,
the two forms (with `RESEND_API_KEY` set), tel and WhatsApp links on a phone, and the schema at
https://validator.schema.org.
