// Console Dossier — Trajectory (#/trajectory). Career record from the résumé,
// tech-forward. Timeline of roles (cd-role), capability groups (cd-skills),
// credentials, and a résumé action. Medium density — a reference page.

const TRAJ_ROLES = [
  {
    when: '2025 — NOW', co: 'Personal project', meta: 'Founder · solo',
    title: 'Pocket Professor — adaptive learning platform',
    sum: 'A structured learning platform for service-industry career-switchers, built solo alongside my day job — React/Vite frontend, a Node/TypeScript (Fastify) backend, a deterministic multi-agent adaptation engine, and Postgres.',
    bullets: [
      ['Architected a ', 'deterministic multi-agent engine', ' — onboarding, professor, and career-coach agents that build a plan and adapt it to real behavior signals.'],
      ['Made every plan change ', 'transactional and fail-closed', ', with agents under strict schema contracts so malformed output never reaches a learner.'],
      ['Shipped v1 first — a Python · FastAPI · Gemini syllabus generator on Railway — then rewrote it in TypeScript around the engine; now ', 'pre-pilot', '.'],
    ],
  },
  {
    when: '2025 — NOW', co: 'IDEA · Richmond, VA', meta: 'Systems Developer II',
    title: 'Systems Developer II',
    sum: 'Generalist on a small product-engineering team building the Data Whispers BI platform — a Django/React UI, a .NET ingestion service, and a legacy SQL Server pipeline that arrived with no documentation, no automated deploys, and no defined SDLC.',
    bullets: [
      ['Built a ', 'NetSuite widget in vanilla JS', ' that cut Customer Success data-load times by ', '90%', ', scoping retrieval to recent call history instead of decades of legacy records.'],
      ['Stood up a ', 'full technical-documentation library from scratch', ' across two product systems — architecture guides, data-flow diagrams, deploy SOPs, runbooks — using AI-assisted tooling (Codex CLI, MCP).'],
      ['Migrated the team off AWS CodeCommit (', '560+ branches, no strategy', ') to GitHub with a standardized PR workflow, and ran the training.'],
      ['Now ', 'leading CI/CD from scratch', ' on GitHub Actions — build, test, secrets externalization, and deploy for both the Django/React and .NET stacks.'],
      ['Ran the Scrum board and daily standups across two teams; fixed production bugs in user-management and pre-validation.'],
    ],
  },
  {
    when: '2024 — 2025', co: 'Accenture · at GE', meta: 'Security Specialist',
    title: 'Security Specialist — SSO',
    sum: 'Continued enterprise SSO services and authentication maintenance across multiple GE business units through the GE/Accenture organizational transition.',
    bullets: [
      ['Maintained SSO services across GE Corporate, GE Vernova, and GE Aerospace during the restructuring.'],
      ['Implemented security protocols and best practices for enterprise-scale authentication.'],
    ],
  },
  {
    when: '2021 — 2024', co: 'General Electric', meta: 'SWE Specialist · SSO Team',
    title: 'Software Engineering Specialist — SSO Team',
    sum: 'End-to-end SDLC for 14 mission-critical SSO APIs serving 80,000+ employees, contractors, and B2B customers across GE Corporate, Vernova, and Aerospace.',
    bullets: [
      ['Architected and delivered ', '14 SSO APIs in 11 months', ', modernizing 15+ year legacy Java systems through simultaneous IdP, database, and codebase migrations.'],
      ['Held ', '99% uptime', ' since launch and ran the entire enterprise SSO infrastructure ', 'solo for 10 months', ' through the GE/Accenture transition, without interruption.'],
      ['Cut API latency from ', 'seconds to milliseconds', ' with GraphQL for large directory queries.'],
      ['Implemented mTLS (OpenSSL · Terraform · Envoy) and migrated CI/CD from Jenkins to TeamCity across all three business units.'],
    ],
  },
  {
    when: '2021 — 2022', co: 'MAXX Potential', meta: 'Technology Apprentice',
    title: 'Technology Apprentice',
    sum: 'Accelerated tech-apprenticeship program across the VA/NC region.',
    bullets: [
      ['Completed a typically 1–3 year apprenticeship in ', '6 months', ', then placed on the GE assignment that became a full-time engineering role.'],
    ],
  },
  {
    when: '2015 — 2020', co: 'HerbNCurry', meta: 'Owner / Operator',
    title: 'Owner / Operator — solo catering business',
    sum: 'Built and ran a specialized catering business solo while completing an undergraduate degree.',
    bullets: [
      ['Grew from startup to ', '155 events a year', ' at peak — ', '$64,800', ' in the best year (2019) — through client acquisition and operational discipline.'],
      ['Owned end-to-end operations: clients, menus, logistics, inventory, and on-site cooking. ', '80%+ repeat business', '.'],
      ['Closed in 2020 (COVID) — the catalyst for the move into software.'],
    ],
  },
];

const TRAJ_SKILLS = [
  { k: 'AI-Assisted Development', v: 'Codex (CLI · VS Code · desktop) · Claude Code · Gemini CLI · MCP server integration · prompt engineering · multi-agent & persistent-memory agent architecture' },
  { k: 'LLM Models & Tooling', v: 'Claude (Sonnet · Opus 4.x) · Gemini 2.5–3 · GPT-o4–5 · Llama 3–4 · DeepSeek R1 · Qwen2.5 · Gemma · Dolphin · Ollama · LM Studio' },
  { k: 'Languages & Frameworks', v: 'Node.js · TypeScript · JavaScript · React · HTML/CSS · Python, FastAPI & Flask (earlier work) · C#, Django (exposure)' },
  { k: 'Cloud & DevOps', v: 'AWS (ECS, EC2, CloudFormation, CloudWatch, Secrets Manager, SSM, RDS, S3, IAM) · Docker · Terraform · GitHub Actions · TeamCity · Jenkins · Git' },
  { k: 'Data, APIs & Security', v: 'PostgreSQL · SQL Server · GraphQL · REST · Apigee · mTLS · OpenSSL · certificate management · SSO / IAM · enterprise authentication' },
  { k: 'Delivery & Leadership', v: 'Agile / Scrum · SAFe (2023) · Kanban · Jira · Rally · standup facilitation · sprint reviews & retros · technical docs & runbooks · stakeholder demos' },
];

function Trajectory() {
  useReveal('trajectory');
  const span = (parts) => parts.map((p, i) => (i % 2 ? <span className="m" key={i}>{p}</span> : p));
  return (
    <div className="cd-wrap">
      <StatusBar station="SERVICE RECORD" cur="trajectory" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Trajectory · Service Record</div>
        <h1 data-reveal>Five years from<br />bootcamp to <span className="a">production.</span></h1>
        <p className="lead" data-reveal>
          Enterprise authentication at scale, a current systems-developer role reviving undocumented
          platforms, and an AI learning platform built on the side. The throughline is
          <strong> systems that have to stay up</strong> — and the discipline to keep them there.
        </p>
        <div className="cd-cta" data-reveal>
          <a className="primary" href="docs/ali-tahir-resume.pdf" target="_blank" rel="noopener"><span>▶  Download résumé · PDF</span><span className="ar">→</span></a>
          <a href="https://github.com/alitahir6001" target="_blank" rel="noopener"><span>▶  GitHub · alitahir6001</span><span className="ar">→</span></a>
        </div>
      </section>

      {/* §01 — experience */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">experience · most recent first</span>
      </div>
      {TRAJ_ROLES.map((r, i) => (
        <article className="cd-role" data-reveal key={i}>
          <div className="when">
            {r.when}
            <span className="co">{r.co}</span>
            <span className="meta">{r.meta}</span>
          </div>
          <div>
            <h3>{r.title}</h3>
            <p className="role-sum">{r.sum}</p>
            <ul>
              {r.bullets.map((b, j) => <li key={j}>{span(b)}</li>)}
            </ul>
          </div>
        </article>
      ))}

      {/* §02 — capabilities */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">capabilities</span>
      </div>
      <div className="cd-skills">
        {TRAJ_SKILLS.map((s, i) => (
          <div className="grp" data-reveal key={i}>
            <div className="k">{s.k}</div>
            <p>{s.v}</p>
          </div>
        ))}
      </div>

      {/* §03 — credentials */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">credentials</span>
      </div>
      <div className="cd-params" data-reveal>
        <div className="row"><span className="k">AWS Cloud Practitioner</span><span className="v">2023</span></div>
        <div className="row"><span className="k">SAFe® Scrum Master</span><span className="v">2023</span></div>
        <div className="row"><span className="k">Coding Dojo · Red Belt</span><span className="v">2021</span></div>
        <div className="row"><span className="k">AWS Certified AI Practitioner</span><span className="v a">in progress</span></div>
        <div className="row"><span className="k">Full-Stack Bootcamp · Coding Dojo</span><span className="v">2021</span></div>
        <div className="row"><span className="k">B.S. Experimental Psychology · UTSA</span><span className="v">2018</span></div>
      </div>

      <Foot left="— END OF RECORD" ack="SVC · 04" />
    </div>
  );
}

window.Trajectory = Trajectory;
