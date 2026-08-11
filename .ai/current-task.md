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
9. `[x]` **Commit the finished ~2026-06-24 work** — Projects 2×2 card grid + `art` slot,
   CH-03 → Oneness Suite, Trajectory GE/Accenture role merge. Committed in `7824b97`.
10. `[~]` **Page-by-page text review with Ali.** Done: Index, Field Notes, Projects,
    Trajectory + Hire (both rebuilt from the résumés in launch 2). Remaining: **About**
    — the only page never checked against a résumé. — agent + user
11. `[!]` **PP card + detail page final pass — still BLOCKED** on the v2 pilot for *behavior*.
    The five-surface consistency drift is fixed (launch 3, `129adbe`) — every PP description
    now matches the résumé. What's left needs the pilot: FIG.01 screenshot and observed v2
    behavior replacing the PRE-PILOT framing. — user (pilot), then agent
    - ⚠️ **This does NOT block launch.** The detail page was already de-bogused in session 1
      (real status, build log from the repo, no dead demo button, honest caption) and is
      accurate today, labeled PRE-PILOT throughout. The park means "don't write PP's real
      behavior from assumptions" — not "this page is false." Launching with the current
      honest PRE-PILOT framing and refining after the pilot is a legitimate option, and is
      the recommended one given `main` is currently a splash converting nobody.
12. `[~]` Security audit. Header regression **fixed** in `7824b97` — CSP, referrer,
    Permissions-Policy, robots `index,follow`, description, canonical, OG + Twitter tags
    all in `index.html`. Remaining: unpkg SRI or self-host React, full `/security-review`
    pass, drop the `frame-ancestors` directive (ignored in a `<meta>`). — agent
13. `[x]` Confirm job-apply card stack — résumé confirms Node · SQLite · Playwright ·
    MV3 Chrome extension. Card rewritten with the real figures.
14. `[x]` **PP V1 public date decided: 2024** — the 3-page résumé dates it 2024 – Present,
    so the résumé wins over the 2025-03 first commit. Site updated.
15. `[ ]` Content gaps (user): PP product screenshot (post-pilot), "Old is Gold" period images.

## 🚦 Launch gate — ✅ LAUNCHED 2026-08-10
`main` was reset to `dev` @ `7824b97` and force-pushed; pakfro.dev serves the full site.
Ali called it: he had applied to a job listing the site and needed it live in whatever state
it was in. Step 9 was committed and step 12's header regression fixed first; steps 10, 13, 14
were **knowingly shipped incomplete**.

Old splash preserved at tag `splash-archive` (`764493d`).

Every future launch is the same command and still needs Ali to say so explicitly:
`git checkout main && git reset --hard dev && git push --force origin main`

**Second launch, same day — `82403f3`:** full résumé sync (see `handoff.md`). Steps 13 and 14 are
now answered from the résumés, and Trajectory + Hire were rebuilt, so the accuracy debt from the
first launch is largely paid. Rollback tag: `prelaunch-82403f3` (`7824b97`).

**Third launch — `129adbe`:** Pocket Professor reconciled across all five surfaces against the
résumé. Rollback tag: `prelaunch-129adbe` (`82403f3`).

Still live-but-unreviewed: **`cd-about.jsx`** (step 10) — only its §03 audience line has been
checked; the rest never has.

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
