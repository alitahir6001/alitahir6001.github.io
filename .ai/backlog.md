# Backlog — recent sessions (newest first)

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