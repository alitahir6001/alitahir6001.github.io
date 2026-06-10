# .ai/ — How to maintain these files

This directory carries state between sessions so a new agent/chat can pick up cold
without re-deriving context. **Read all four files at session start, in this order:**
`RULES.md` → `current-task.md` → `handoff.md` → `backlog.md`.

## Files

- **`RULES.md`** — How to maintain these files. Read once per session. Don't edit unless
  the rules themselves change.
- **`current-task.md`** — What we're actively working on, why, and what's out of scope.
  Reflects the CURRENT task only, not history. Update only on task transitions
  (finished one, starting another, pivoted).
- **`handoff.md`** — Live state snapshot. What's true RIGHT NOW: what shipped, files
  changed, results, open threads, next step. Update CONTINUOUSLY as work happens.
  Rewrite in place — don't append like a log. Cap ~150 lines.
- **`backlog.md`** — Rolling window of recent sessions, newest first. Update ONLY at
  session end with a 2-3 sentence entry. Roll older entries out when 4+ stack up.

## Populating from empty (first-time setup)

- **`current-task.md`** — four sections: *What* (the current task), *Why* (why it
  matters), *Order of operations* (numbered steps, who owns each — user vs agent),
  *Out of scope* (what we're explicitly NOT doing).
- **`handoff.md`** — five sections: *Last Updated* (date + session marker),
  *Current State* (1 paragraph), *Changed Files* (this session's edits),
  *Open Threads* (unresolved questions/risks), *Next Recommended Step*.
- **`backlog.md`** — leave empty until first session wrap, then prepend
  `## Last session: <YYYY-MM-DD> (session N)` + 2-3 sentence summary.

## Core mindset

- `handoff.md` is **state**, not a diary. Rewrite sections; don't append.
- `current-task.md` is the **active** task. Past tasks belong in `backlog.md` once finished.
- `backlog.md` is the **archive**. Compress; roll old entries out.
- Permanent gotchas / non-obvious behaviors belong in the project's `CLAUDE.md`, not here.
  These files are for state that changes session-to-session.
