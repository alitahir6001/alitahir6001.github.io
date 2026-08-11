// Console Dossier — Trajectory (#/trajectory). Career record from the résumé,
// tech-forward. Timeline of roles (cd-role), capability groups (cd-skills),
// credentials, and a résumé action. Medium density — a reference page.

const TRAJ_ROLES = [
  {
    when: '2024 — NOW', co: 'Personal project', meta: 'Founder · solo',
    title: 'Pocket Professor — adaptive learning platform',
    sum: 'An adaptive learning platform for service-industry workers (35+) changing careers — a domain informed by 15 years of personal industry experience. Built solo alongside my day job on TypeScript, Node.js, Postgres, and GitHub Actions.',
    bullets: [
      ['V2 is a ', 'deterministic multi-agent rebuild', ' — onboarding, professor, and career-coach agents under strict agent contracts, with schema validation and policy-gated output.'],
      ['An ', 'append-only event store', ' keeps plan adaptation reproducible, so a learner\'s plan can be replayed and explained rather than guessed at.'],
      ['Shipped v1 first — a Python · FastAPI · Gemini syllabus generator — then rewrote it in TypeScript around the engine. Now in ', 'pre-pilot hardening', '.'],
    ],
  },
  {
    when: '2025 — NOW', co: 'IDEA · Richmond, VA', meta: 'Systems Developer II',
    title: 'Systems Developer II — Data Whispers team',
    sum: 'Multi-stack team building a customer-facing BI platform: a Django/React customer UI, a .NET ingestion service, and a SQL Server analytics database. I established the documentation, deployment automation, and delivery processes it runs on, and I\'m currently the sole in-house developer on its core services.',
    bullets: [
      ['Co-built ', 'metabase-mcp', ', a custom MCP server in TypeScript exposing 8 tools for schema and stored-procedure introspection, native SQL queries, and Metabase card writes — across separate credential boundaries for the agent, the database, and HTTPS. In use by two dev teams, the PM, and colleagues outside engineering.'],
      ['Used those tools to generate a queryable, evidence-governed JSONL knowledge base mapping ', '544 stored procedures, 247 tables, and 3,670+ dependency relationships', ' — every answer ranked to a confidence level and checked against the live database. Troubleshooting went from days to minutes.'],
      ['Leading a ', 'ground-up rebuild of the .NET ingestion service', ', replacing an unstable legacy implementation with a documented 3-phase ETL pipeline — client-validated intake, rule-based sanitation to target schema, automated ingestion — with business rules reverse-engineered from a manual process only one teammate could execute.'],
      ['Delivered the company\'s ', 'first CI/CD pipelines', ' for two applications on distinct stacks (.NET 9/IIS and Django/Ubuntu on AWS), replacing manual releases with test-gated GitHub Actions deployment across 8 automated stages.'],
      ['Built a ', 'NetSuite widget in vanilla JS', ' that cut Customer Success data-load times by ', '90%', ', scoping retrieval to recent call history.'],
      ['Migrated the team off AWS CodeCommit (', '560+ branches, no strategy', ') to GitHub with standardized PR workflows and hands-on training; ran standups, JIRA, and sprint planning as team spokesperson.'],
    ],
  },
  {
    when: '2021 — 2025', co: 'General Electric → Accenture', meta: 'SWE Specialist · SSO Team',
    title: 'Software Engineering Specialist / Security Specialist — SSO Team',
    sum: 'End-to-end SDLC ownership of 14 mission-critical SSO APIs serving 80,000+ employees, contractors, and B2B customers across GE Corporate, GE Vernova, and GE Aerospace — through the GE/Accenture transition.',
    bullets: [
      ['Architected and delivered ', '14 SSO APIs in 11 months', ', modernizing 15+ year legacy Java systems through simultaneous identity-provider, database, and codebase migrations.'],
      ['Held ', '99% uptime', ' since production deployment, serving 80,000+ users across three business units during GE\'s historic corporate restructuring.'],
      ['Ran the entire enterprise SSO infrastructure ', 'solo for 10 months', ' as the sole remaining developer through the transition — no service interruption — while running daily standups, sprint reviews, and quarterly retrospectives.'],
      ['Cut API latency from ', 'seconds to milliseconds', ' with GraphQL for large dataset queries and directory operations.'],
      ['Implemented ', 'mTLS', ' (OpenSSL · Terraform · Envoy) to secure internal API traffic, and migrated CI/CD from Jenkins to TeamCity with custom build scripts and templates for all three GE business units.'],
    ],
  },
  {
    when: '2021 — 2022', co: 'MAXX Potential', meta: 'Technology Apprentice',
    title: 'Technology Apprentice',
    sum: 'Accelerated career-development program providing technical support across the VA/NC region.',
    bullets: [
      ['Placed on a paid client engagement within ', '2 months of hire', ' and converted to a full-time GE software-engineering role in ', '7 months', ' — against a typical 1–3 year apprenticeship track.'],
      ['Ran a 2-week program of instruction and Q&A, onboarding a cohort of ', '12+ prospective apprentices', ' through MAXX Career Labs.'],
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
  { k: 'AI-Assisted Development', v: 'Codex · Claude Code · Gemini CLI · Google Antigravity · MCP server integration · prompt engineering · agent architecture (persistent memory, multi-agent workflows) · agentic problem-solving patterns' },
  { k: 'LLM Models & Hosting', v: 'Hands-on across Anthropic, OpenAI, and Google models plus open-weight (Llama · Qwen · DeepSeek) · local hosting via Ollama and LM Studio · provider-agnostic dispatch with fallback' },
  { k: 'Languages & Frameworks', v: 'TypeScript · JavaScript · Node.js · Python · C#/.NET · React · HTML/CSS · Django · FastAPI · Flask · Playwright · Chrome Extensions (Manifest V3)' },
  { k: 'Cloud & DevOps', v: 'GitHub Actions · AWS (ECS, EC2, CloudFormation, CloudWatch, Secrets Manager, SSM, RDS, S3, IAM) · Docker · Terraform · Jenkins · TeamCity · Git/GitHub' },
  { k: 'Databases & APIs', v: 'SQL Server · SQLite · GraphQL · REST APIs · Apigee · EDI file processing and B-view mapping · PostgreSQL (working knowledge)' },
  { k: 'Security', v: 'mTLS · OpenSSL · Envoy · certificate management · deploy keys · SSO / IAM systems · enterprise authentication architecture' },
  { k: 'Delivery & Leadership', v: 'Agile · Scrum · Kanban · Jira · Rally · standup facilitation · sprint planning, reviews and retrospectives · end-to-end change management · stakeholder progress reporting' },
  { k: 'Documentation', v: 'Technical SOPs · user guides · database architecture docs · data-flow diagrams · deployment runbooks · knowledge transfer out of zero-documentation environments' },
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
          platforms with agent tooling, and an AI learning platform built on the side. The throughline
          is <strong> systems that have to stay up</strong> — and the discipline to keep them there.
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
        <div className="row"><span className="k">AWS Machine Learning Engineer</span><span className="v a">in progress</span></div>
        <div className="row"><span className="k">SAFe® Scrum Master</span><span className="v">2023</span></div>
        <div className="row"><span className="k">AWS Cloud Practitioner</span><span className="v">2023</span></div>
        <div className="row"><span className="k">Full-Stack Bootcamp · Coding Dojo</span><span className="v">2021</span></div>
        <div className="row"><span className="k">B.S. Experimental Psychology · UTSA</span><span className="v">2018</span></div>
      </div>

      <Foot left="— END OF RECORD" ack="SVC · 04" />
    </div>
  );
}

window.Trajectory = Trajectory;
