# Backlog — recent sessions (newest first)

## Last session: 2026-08-10 (session 3, part 2)
**Résumé sync + second launch (`82403f3`).** Ali supplied two résumés (a 2-page recruiter version
and a 3-page all-projects version) and asked for three things: drop the "open to mid-level roles"
line from the front page, add the résumé's projects to the Projects page, and make the 2-pager the
downloadable artifact while rebuilding Trajectory from the 3-pager. All done. Availability now
lives **only** on the Hire page — the status-bar pill is gated to it and reads `OPEN · AI
ENGINEERING`, and Hire was reframed from mid-level SWE to AI engineering at Ali's direction, with
an honest "applied AI, not research" section. Projects grew to 6 channels (added AI Agent Harness
Extensions and the ZuneHD Metadata Updater). Cross-checking the site against both résumés surfaced
five factual drifts, all fixed: MAXX 6→7 months, AWS Certified AI Practitioner→AWS Machine Learning
Engineer, PP 2025→2024, home "Earlier work" 2021-2024/3yrs→2021-2025/4yrs, and a duplicate Coding
Dojo credential row. That also closed both long-open user questions (job-apply stack; PP V1 date).
**Gotcha worth keeping:** this machine has no `pdftotext`/`pypdf`/poppler, and PDFKit returns text
character-reversed *and* line-order-reversed — decode before trusting it.

## Last session: 2026-08-10 (session 3, part 1)
**Launched the site.** Ali applied to a job listing pakfro.dev and needed it live immediately, so
we took the shortest honest path: committed the finished ~06-24 work (Projects 2×2 grid, Oneness
Suite, Trajectory merge) after `check-build-fresh.sh` passed, then fixed the launch-blocking header
regression — ported `main`'s CSP/referrer/Permissions-Policy into `dev`, widened CSP for the unpkg
React UMD and cd-theme's injected `<style>`, set `robots` to index,follow, and added description /
canonical / OG / Twitter tags. Verified the new CSP locally (no console errors, theme and fonts
intact) before pushing. Tagged the old splash `splash-archive` (`764493d`), reset `main` to `dev`
@ `7824b97`, force-pushed, and confirmed live. Shipped knowingly incomplete: Trajectory / About /
Hire were never reviewed with Ali, and the job-apply stack claim and PP V1 date are still
unconfirmed — those are the top follow-ups.

## Last session: 2026-07-07 (session 2)
Built a project skill library at `.claude/skills/` — 5 skills (change-control, content
reference, architecture contract, runbook, research frontier) plus two read-only diagnostic
scripts whose pass *and* fail paths were both tested. No site content was touched. Verified
along the way that the committed `build/*.js` is byte-identical to a fresh esbuild run, which
confirms the finished-but-uncommitted ~06-24 work (Projects 2×2 card grid, CH-03 → Oneness
Suite, Trajectory GE/Accenture merge) is safe to commit as-is. **Key finding:** `dev`'s
`index.html` carries only `charset` + `viewport`, while the `main` splash has CSP, referrer,
permissions, robots, and a description — so launching `dev` today would *regress* security
headers and ship with no description/OG tags. Added to the security audit as its first task.

## Last session: 2026-06-10 (session 1)
Kicked off the pakfro.dev redesign content overhaul: set up esbuild build tooling + the
`main`(splash) / `dev`(WIP) branch split, then purged all placeholder/fabricated content
site-wide. Corrected Pocket Professor's real stack and documented its full version history,
rebuilt Trajectory from the real résumé (added the IDEA day-job; PP framed as a personal
project), wired the résumé PDF, fixed chrome (live clock, footer links, gated Tweaks panel),
removed holdover files, and built the in-app Field Notes reader with "Old is Gold" live.
Page-by-page review with Ali covered Index, Field Notes, and Projects; the **PP card + detail
page are PARKED** until Ali runs the v2 pilot. Next: review Trajectory/About/Hire, finish the
job-apply/intake-assistant cards, and the security audit.

- Feature idea: add my own "linktree" style page that i can put on my socials, maybe with a simple links.json file as the source. It can also have analyitics like Vercel Analytics, Plausible, Gogle analytitcs, etc. to track click-through rates. JSON setup ex:
{"id":1, "title": "LinkedIn", "url": "https...", "icon": "globe"}
{"id":2, "title": "Blog", "url": "https...", "icon": "pen"}