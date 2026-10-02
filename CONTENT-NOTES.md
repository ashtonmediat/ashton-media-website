# Content notes — what is verified and what Abbas must confirm

Every fact on the site traces to a live page, a company post, or the project brief
(`ashton-website-project-context-2026-10-02.md`). The lines below were written to be
plausible and safe but are **not yet confirmed by the company**. Confirm or change them
before or shortly after launch. Each points at the file to edit.

| Claim on the site | Where | Status |
|---|---|---|
| "50+ digital screens" | `src/content/site.ts` (`proof`, `screens`), format pages | Company's own figure from July 2024; update to today's count |
| Cities: Dar es Salaam, Zanzibar, Dodoma, Mwanza, Namanga | `src/content/site.ts` (`cities`) | From operations data; Arusha/Mbeya omitted until confirmed |
| Flagship sites list | `src/content/site.ts` (`flagshipSites`) | From operations data and blog; confirm names and formats |
| "Tanzania's most awarded out-of-home media owner" | hub page | Four awards 2018–2025 are verified; "most awarded" relative to competitors is unverified |
| Static booking includes print, installation, posting photo | rates page, static page | Assumed from market practice |
| Digital booking includes proof of play; creative changes during campaign | rates page, digital page | Assumed |
| "Longer bookings earn lower monthly rates" | cost guide | Assumed |
| Quotes in USD for international advertisers | cost guide FAQ, international page FAQ | To confirm (brief §19 item 7) |
| Hotline is on WhatsApp (wa.me/255758880088) | everywhere | To confirm (brief §2) |
| Office hours "East Africa Time" with overnight briefs answered next morning | plan page, international page | Hours themselves not published; confirm and add |
| Reply time "usually within a few hours on business days" | forms, CTA band | A promise — confirm the team can keep it |
| 2024 Consumer Choice Awards category wording | `src/content/site.ts` (`awards`) | Exact 2024 wording to confirm |
| Company founded 2005 | about, schema | ZoomTanzania/TechBehemoths say 2005; Tanzapages shows 2012 registration — reconcile |
| Blog posts marked `partial: true` | `src/content/posts.ts` | Completed from recovered excerpts in the company's voice; restore the originals from the Internet Archive copy if preferred |
| Mobile LED screens page — what the truck does, where it can go, sound | `src/content/formats.ts` (mobile-screens-tanzania) | Written from the photograph of the truck only; confirm the service details |
| SGR page — terminals in Dar es Salaam, Morogoro, Dodoma; "exclusive advertising spaces" | `src/content/formats.ts` (sgr-advertising-tanzania) | Text taken from the company's transit deck (Abbas, 2 Oct); photos are the two WhatsApp images — send the originals for sharper heroes |
| Airports list — JNIA T3, Kilimanjaro, Arusha, Mwanza, Dodoma | airport page, international page, SGR page | From Abbas and the transit deck, 2 Oct |
| Client list — Coca-Cola, Pepsi, Vodacom, Samsung, Apple, TECNO, KFC, Bolt, Yas | `src/content/site.ts` (`clients`) | Names given by Abbas, 2 Oct; no logos until permission is confirmed |
| Logo | `public/brand/ashton-logo*.png` | Cut from the design mockup at 489×117 px; replace with the vector logo (same file names, PNG or SVG) |
| Photo captions / alt text | `src/app/page.tsx`, format pages | Describe what the photographs show; correct any site names |

## Not on the site yet (by design)
- Prices or price bands (decision 14 in the brief)
- Client logos (permission flags needed) — names only
- Photographs — from Downloads/Website (Selected Images and Design/Images), resized for the web in `public/images/`. No photograph yet for the 3D screen page.
- Swahili pages (native writer)
- Site finder and site pages (need the site database)
- Campaign results figures (none confirmed)
