# Current Task

## What
Overhaul the personal site (pakfro.dev) after its design redesign: replace all
placeholder/AI-fabricated content with real content, page by page; build the remaining
features; remove holdover files; and do a security audit before re-launching. Full
detailed roadmap lives in `TODO.md` at repo root.

## Why
The redesign shipped with AI-generated placeholder and **fabricated** content (fake
metrics, wrong tech stack, a current-role that was actually a personal project). The site
is a public-facing **hiring portfolio**, so accuracy and credibility are non-negotiable.
The live site is currently a holding splash while this work happens on `dev`.

## Order of operations
Marks: `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked

1. `[x]` Build tooling (esbuild) + branch split (main=splash live, dev=WIP). — agent
2. `[x]` Page-by-page de-bogus pass (all pages). — agent
3. `[x]` Pocket Professor: real stack + complete version history (`docs/`). — agent
4. `[x]` Trajectory rebuilt from résumé (added IDEA job; PP = personal project). — agent
5. `[x]` Résumé PDF wired in; chrome fixes (live clock, footer, gated Tweaks panel). — agent
6. `[x]` Holdover cleanup (removed stale html/js/img + INTEGRATION.md; sitemap → root). — agent
7. `[x]` Blog: in-app reader built; "Old is Gold" live; wider reading column. — agent
8. `[x]` Project skill library at `.claude/skills/` (5 skills + 2 verified diagnostic
   scripts) so cold sessions can carry the site forward. — agent
9. `[~]` **Commit the finished ~2026-06-24 work** — Projects 2×2 card grid + `art` slot,
   CH-03 → Oneness Suite, Trajectory GE/Accenture role merge. Build output verified in
   sync; just needs committing. — agent
10. `[~]` **Page-by-page text review with Ali.** Done: Index, Field Notes, Projects.
    Remaining unblocked: **Trajectory, About, Hire**. — agent + user
11. `[!]` **PP card + detail page final pass — BLOCKED** until Ali runs the PP v2 pilot and
    can describe today's real behavior honestly. Resume after. — user (pilot), then agent
    - ⚠️ **This does NOT block launch.** The detail page was already de-bogused in session 1
      (real status, build log from the repo, no dead demo button, honest caption) and is
      accurate today, labeled PRE-PILOT throughout. The park means "don't write PP's real
      behavior from assumptions" — not "this page is false." Launching with the current
      honest PRE-PILOT framing and refining after the pilot is a legitimate option, and is
      the recommended one given `main` is currently a splash converting nobody.
12. `[ ]` Security audit. First concrete task: `dev`'s `index.html` has only `charset` +
    `viewport`, while `main`'s splash carries CSP/referrer/permissions/robots/description —
    **launching as-is regresses security headers.** Then: description + OG tags, unpkg SRI
    or self-host, full `/security-review` pass. — agent
13. `[ ]` Confirm job-apply card stack (now says Playwright · sqlite). — user
14. `[ ]` **Decide PP V1 public date** — résumé says 2024, first commit is 2025-03. — user
15. `[ ]` Content gaps (user): PP product screenshot (post-pilot), "Old is Gold" period images.

## 🚦 Launch gate
Launch = `git checkout main && git reset --hard dev && git push --force origin main`
**(Ali must explicitly say "launch" — never run this otherwise.)**

Must ALL be true first — these are the only true blockers:
- `[~]` Step 9 committed.
- `[~]` Step 10 done: Trajectory / About / Hire reviewed with Ali.
- `[ ]` Step 12's **header regression fixed** (meta/CSP block ported from `main` + description
  and OG tags). The rest of the security audit can follow post-launch.
- `[ ]` Steps 13 + 14 answered — both are one-minute user decisions, both are factual claims
  on a hiring site.

Explicitly NOT gating launch: step 11 (see the note above), unpkg SRI, `/security-review`
full pass, stale `README.md`/`SECURITY.md` (repo docs, invisible to visitors), PP screenshot,
"Old is Gold" images, a11y + mobile audit.

## Out of scope / blocked (for now)
- **PP card + detail content** — parked pending Ali running the v2 pilot (don't write PP
  behavior from assumptions).
- Pocket Professor backend/app itself (separate repos; not this repo).
- A live PP demo on the site (deferred until v2 launches).
- Full a11y + mobile audit (launch-readiness, later).
- The non-tech personal Substack (explicitly excluded from the blog).
- `pakfro-ext` and `caveman` repos — not featured as project cards for now.
- Everything in `pakfro-site-research-frontier` (linktree/analytics, SEO prerendering,
  markdown rendering, Vite migration) — candidate ideas only, not this task.
