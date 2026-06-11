# Current Task

## What
Overhaul the personal site (pakfro.dev) after its design redesign: replace all
placeholder/AI-fabricated content with real content, page by page; build the remaining
features (in-app blog reader); remove holdover files; and do a security audit before
re-launching. Full detailed roadmap lives in `TODO.md` at repo root.

## Why
The redesign shipped with AI-generated placeholder and **fabricated** content (fake
metrics, wrong tech stack, a current-role that was actually a personal project). The site
is a public-facing **hiring portfolio**, so accuracy and credibility are non-negotiable.
The live site is currently a holding splash while this work happens on `dev`.

## Order of operations
1. ✅ Build tooling (esbuild) + branch split (main=splash live, dev=WIP). — agent
2. ✅ Page-by-page de-bogus pass (all pages). — agent
3. ✅ Pocket Professor: real stack + complete version history (`docs/`). — agent
4. ✅ Trajectory rebuilt from résumé (added IDEA job; PP = personal project). — agent
5. ✅ Résumé PDF wired in; chrome fixes (live clock, footer, gated Tweaks panel). — agent
6. ✅ Holdover cleanup (removed stale html/js/img + INTEGRATION.md; sitemap → root). — agent
7. ✅ Blog: in-app reader built; "Old is Gold" live; wider reading column. — agent
8. ⏳ **Page-by-page text review with Ali.** Done: Index, Field Notes, Projects (mostly).
   Remaining unblocked: Trajectory, About, Hire. — agent + user
9. ⛔ **PP card + detail page final pass — BLOCKED** until Ali runs the PP v2 pilot and can
   describe today's real behavior honestly. Resume after. — user (pilot), then agent
10. ☐ Finish refining job-apply / intake-assistant project cards with Ali. — agent + user
11. ☐ Security audit (`/security-review`, CSP on React index, unpkg CDN review). — agent
12. ☐ Content gaps (user): PP product screenshot (post-pilot), "Old is Gold" period images.
13. ☐ Launch: `git checkout main && git reset --hard dev && git push --force origin main`.

## Out of scope / blocked (for now)
- **PP card + detail content** — parked pending Ali running the v2 pilot (don't write PP
  behavior from assumptions).
- Pocket Professor backend/app itself (separate repos; not this repo).
- A live PP demo on the site (deferred until v2 launches).
- Full a11y + mobile audit (launch-readiness, later).
- The non-tech personal Substack (explicitly excluded from the blog).
- `pakfro-ext` and `caveman` repos — not featured as project cards for now.
