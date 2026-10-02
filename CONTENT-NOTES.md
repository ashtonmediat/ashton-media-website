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
| Insights posts marked `partial: true` | `src/content/posts.ts` | Rewritten from recovered excerpts; restore originals from the Internet Archive copy if preferred |

## Not on the site yet (by design)
- Prices or price bands (decision 14 in the brief)
- Client logos (permission flags needed) — names only
- Photographs — none were recoverable before the old site went offline; the layout has no empty image slots, so nothing looks missing. Add photography to site pages when it arrives.
- Swahili pages (native writer)
- Site finder and site pages (need the site database)
- Campaign results figures (none confirmed)
