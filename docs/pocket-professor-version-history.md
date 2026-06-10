# Pocket Professor — Version History

A complete history of the project across all three repositories, reconstructed from
commit history and version branches. Two eras: **V1** (an AI syllabus generator, Python)
and **V2** (a deterministic multi-agent adaptive learning platform, TypeScript).

- **Started:** 2025-03-27 (first commit)
- **Audience:** service-industry workers (35+) transitioning careers
- **Current status:** pre-pilot hardening, targeting a micro-pilot with real users

---

## V1 — AI Syllabus Generator (2025)

Stack: **Python · FastAPI · Gemini**, deployed on **Railway**.
Source: `pocket_professor` (original repo, created 2025-03-27).

| Version | Date | Milestone |
|---|---|---|
| **v0.01** — Q&A prototype | Mar 2025 | First concept: LLM-prompt-driven Q&A. `main.py`, prompt engineering. (branch `v.01_q&a_(frozen-branch)`) |
| **v0.02** — Syllabus generation | Jun 2025 | FastAPI backend; first ran on **local models (Ollama + Gemma3)**, then Gemini. Produces structured syllabi. (branch `v.02_syllabus-gen`) |
| **v0.03** — MVP build | Jul 2025 | Railway deploy, Gemini API, Pydantic models. First hosted MVP. (branch `v0.03_mvp_build`) |
| **v0.04** — TechCrunch demo | Jul 2025 | Demo-ready build. (branch `v0.04_techCrunch_demo`) |
| **v0.05** — Detailed system prompts | Oct–Nov 2025 | Refined prompts, Gemini Pro; security hardening (slowapi rate limiting, CORS, env-var secrets). (branch `v.05_detailed_systemPrompts`) |

**Outcome:** a working syllabus generator that proved the idea — the version that ran on the
old personal site. Retired to make way for the V2 rewrite.

---

## V2 — Deterministic Adaptive Learning Platform (2026 – present)

A complete rewrite. Stack: **Node · TypeScript · Fastify · PostgreSQL** backend;
**React · Vite · Tailwind** frontend. Core is a deterministic multi-agent adaptation engine —
agents suggest, policies decide, events verify, the system adapts reproducibly (no LLM randomness
in the control path).

| Phase | Date | Milestone |
|---|---|---|
| **The pivot** | Feb 2026 | Behavioral design doc + Phase 1 system architecture. A 3-day POC (`pocket_professor_POC`, Node/TS/Express/Prisma) prototyped the deterministic metrics/adaptation engine. |
| **Agents + engine** | Feb–Mar 2026 | Phase 2 agent contracts — onboarding, professor, career coach — with schema validation. Phase 3 deterministic adaptation engine: 5 priority-ordered rules, fail-closed transactional persistence, audit records. |
| **Runtime** | Mar 2026 | Fastify runtime + Postgres persistence; deterministic smoke checks; patched a Fastify advisory. |
| **Pilot scaffolding** | Apr 2026 | Email-login wizard UI, agent endpoints, Railway deploy guide. Development continued in a clone, `pock_prof_playground` (created 2026-04-12). |
| **Pilot readiness** | Apr–May 2026 | Vite/Tailwind v4 frontend, onboarding flow, knowledge-base docs. Targeting a micro-pilot with real service-industry users. |

**Model layer:** fallback flow **Gemini → OpenAI → Claude**. Planned localized variant using local
models (DeepSeek, Qwen, Gemma, Dolphin via Ollama / LM Studio).

---

## Repositories

| Repo | Role | Span |
|---|---|---|
| `pocket_professor` | Original repo — full V1 + early V2 history | 2025-03-27 → 2026-04 |
| `pocket_professor_POC` | 3-day adaptation-engine spike (Node/TS/Express/Prisma) | 2026-02-23 → 25 |
| `pock_prof_playground` | Active clone of the original; current development | 2026-04-12 → present |

> Note: the résumé lists PP V1 as "2024." The earliest commit is 2025-03-27 — likely 2024 was
> ideation, first code March 2025. Confirm which framing you want public.
