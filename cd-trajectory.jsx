// Console Dossier — Trajectory (#/trajectory). Career record from the résumé.
// Section order mirrors the résumé: §01 capabilities, §02 experience, §03 education
// & certifications, §04 personal projects LAST (personal work shouldn't lead).

const TRAJ_ROLES = [
  {
    when: '2025 — NOW', co: 'IDEA', meta: 'Systems Developer II',
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
    when: '2016', co: 'Hermann Spermatogenesis Lab · UTSA', meta: 'Lab Assistant · Work-Study',
    title: 'Lab Assistant — Hermann Spermatogenesis Lab',
    sum: 'Work-study assistant to Dr. Brian Hermann and Dr. Nadine Mutoji, supporting sample processing and day-to-day lab operations.',
    bullets: [
      ['Rebuilt the lab\'s sample filing system after the existing database grew too disorganized to search — reorganized it ', 'chronologically and by sample type', ', migrated every file into monthly network folders, documented the new convention, and notified the researchers who depended on it.'],
      ['Ran routine protocol work: PCR container labeling, frozen-tissue organization for slides and assays, and solution synthesis (', '4% paraformaldehyde, ethanol dilutions', ').'],
      ['Handled and disposed of hazardous biological and animal materials under ', 'UTSA Risk Management SOP', ', and maintained the chemical inventory for annual certification review.'],
    ],
  },
  {
    when: '2013 — 2014', co: 'Lab Animal Resources Center · UTSA', meta: 'Animal Attendant',
    title: 'Animal Attendant — Lab Animal Resources Center',
    sum: 'First paid research position: vivarium husbandry, equipment sterilization, and inter-facility logistics across two UTSA sites.',
    bullets: [
      ['Verified sanitation on a fixed monthly schedule using ', 'TSA plates, swabs, and contact sampling', ' — so contamination surfaced as data rather than as a failed experiment weeks later.'],
      ['Owned the transport chain out to the START Company at the San Antonio Medical Center, with ', 'inventory tracked and signed for at both ends', '.'],
      ['Maintained autoclave and sterilization workflows for cages, bottles, and surgical instruments under LARC SOP, ', 'PPE and N95 certified', '.'],
    ],
  },
  // Listed last on purpose: it funded the degree and the lab work above rather than
  // competing with them, so it reads as background, not as the headline job.
  {
    when: '2015 — 2020', co: 'HerbNCurry', meta: 'Owner / Operator',
    title: 'Owner / Operator — solo catering business',
    sum: 'The business that paid for the rest of this page. Built and ran solo, concurrent with the undergraduate degree, both lab positions, and the thesis above — labs and coursework by day, kitchens and events by night.',
    bullets: [
      ['Grew from startup to ', '155 events a year', ' at peak — ', '$64,800', ' in the best year (2019) — through client acquisition and operational discipline.'],
      ['Owned end-to-end operations: clients, menus, logistics, inventory, and on-site cooking. ', '80%+ repeat business', '.'],
      ['Closed in 2020 (COVID) — the catalyst for the move into software.'],
    ],
  },
];

// Personal projects — kept out of TRAJ_ROLES on purpose: they are not jobs, and
// they render in their own lighter section at the bottom of the page.
const TRAJ_PROJECTS = [
  {
    when: '2024 — NOW', title: 'Pocket Professor',
    sum: 'An adaptive learning platform for motivated autodidacts who want to change careers. V2 is a deterministic multi-agent rebuild — onboarding, professor, and career-coach agents under strict contracts, with an append-only event store so plan adaptation stays reproducible. In pre-pilot hardening.',
    stack: ['typescript · node', 'postgres', 'github actions'],
  },
  {
    when: '2026 — NOW', title: 'The Advisor',
    sum: 'A Claude Code plugin that routes architectural and hard-to-reverse decisions to a stronger model for a second opinion, while a cheap workhorse model carries the everyday load. Model-agnostic across Claude, Gemini, and GPT; standard library only; every consult logged verbatim.',
    stack: ['python · mcp', 'stdio json-rpc', 'claude code plugin'],
  },
  {
    when: '2026 — NOW', title: 'Agent Memory & Session State',
    sum: 'A memory protocol for coding agents — durable knowledge in a generated skill library, live state in a small set of session files — so multi-session work resumes without re-deriving context. Behavior claims are verified in the tool-call stream rather than taken from the model\'s reply.',
    stack: ['claude code skills', 'session-state protocol', 'stream-json verification'],
  },
  {
    when: '2026', title: 'ZuneHD Artist Metadata Updater',
    sum: 'Restores artist biographies and background images on ZuneHD hardware after Microsoft retired the Zune.net backend — resolving artists against MusicBrainz and delivering the data over the device\'s encrypted USB MTP stack.',
    stack: ['.net 8 · c#', 'native interop', 'musicbrainz'],
  },
];

const TRAJ_SKILLS = [
  { k: 'AI-Assisted Development', v: 'Codex · Claude Code · Gemini CLI · Google Antigravity · MCP server integration · prompt engineering · agent architecture (persistent memory, multi-agent workflows) · agentic problem-solving patterns' },
  { k: 'LLM Models & Hosting', v: 'Hands-on across Anthropic, OpenAI, and Google models plus open-weight (Llama · Qwen · DeepSeek) · local hosting via Ollama and LM Studio · provider-agnostic dispatch with fallback' },
  { k: 'Languages & Frameworks', v: 'TypeScript · JavaScript · Node.js · Python · C#/.NET · React · HTML/CSS · Django · FastAPI · Flask · Playwright · Chrome Extensions (Manifest V3)' },
  { k: 'Cloud & DevOps', v: 'GitHub Actions · AWS (ECS, EC2, CloudFormation, RDS, S3, IAM) · Docker · Terraform · Jenkins · TeamCity' },
  { k: 'Databases & APIs', v: 'SQL Server · SQLite · GraphQL · REST APIs · Apigee · EDI file processing and B-view mapping · PostgreSQL (working knowledge)' },
  { k: 'Security', v: 'mTLS · OpenSSL · Envoy · certificate management · deploy keys · SSO / IAM systems · enterprise authentication architecture' },
  { k: 'Delivery & Leadership', v: 'SAFe Agile with Jira · Kanban with Rally · Scrum · standup facilitation across two teams · sprint planning and retrospectives · end-to-end change management · cross-team reviews · stakeholder progress reporting' },
  { k: 'Documentation', v: 'Technical SOPs · user guides · database architecture docs · data-flow diagrams · deployment runbooks · knowledge transfer out of zero-documentation environments' },
];

function Trajectory() {
  useReveal('trajectory');
  const span = (parts) => parts.map((p, i) => (i % 2 ? <span className="m" key={i}>{p}</span> : p));
  return (
    <div className="cd-wrap">
      <StatusBar station="SERVICE RECORD" cur="trajectory" />

      <section className="cd-intro tight">
        <div className="k" data-reveal>— Trajectory</div>
        <h1 data-reveal>Service <span className="a">record.</span></h1>
        <p className="lead" data-reveal>
          Enterprise authentication at GE, then systems and agent tooling at IDEA.
          Personal projects are at the bottom.
        </p>
        <div className="cd-cta" data-reveal>
          <a href="https://github.com/alitahir6001" target="_blank" rel="noopener"><span>▶  GitHub</span><span className="ar">→</span></a>
          <a href="https://linkedin.com/in/ali-t-06748432" target="_blank" rel="noopener"><span>▶  LinkedIn</span><span className="ar">→</span></a>
        </div>
      </section>

      {/* §01 — capabilities first, mirroring the résumé's skills-before-experience order */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">capabilities</span>
      </div>
      <div className="cd-skills">
        {TRAJ_SKILLS.map((s, i) => (
          <div className="grp" data-reveal key={i}>
            <div className="k">{s.k}</div>
            <p>{s.v}</p>
          </div>
        ))}
      </div>

      {/* §02 — experience */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">experience · engineering, research, operations</span>
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

      {/* §03 — education first, then certifications (matches the résumé's combined section) */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">education · certifications · community</span>
      </div>
      <div className="cd-params" data-reveal>
        <div className="row"><span className="k">B.S. Experimental Psychology · University of Texas at San Antonio</span><span className="v">2018</span></div>
        <div className="row"><span className="k">Sponsored into graduate-level (5000) research</span><span className="v">2018</span></div>
        <div className="row"><span className="k">Thesis · “Cross Cultural Stressors of Adolescents and Young Adults Ages 14–24 in a Bi-Cultural Upbringing” — poster, UTSA thesis conference</span><span className="v">2018</span></div>
        <div className="row"><span className="k">Full-Stack Development Bootcamp · Coding Dojo</span><span className="v">2021</span></div>
        <div className="row"><span className="k">AWS Machine Learning Engineer</span><span className="v a">in progress</span></div>
        <div className="row"><span className="k">SAFe® Scrum Master</span><span className="v">2023</span></div>
        <div className="row"><span className="k">AWS Cloud Practitioner</span><span className="v">2023</span></div>
        <div className="row"><span className="k">Community · Meadowbridge Community Market (MAD RVA), monthly volunteer crew</span><span className="v">2025 — now</span></div>
        <div className="row"><span className="k">Community · TechCrunch All Stage, Boston</span><span className="v">2025</span></div>
      </div>

      {/* §04 — personal projects, deliberately last and visually lighter than the roles */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">personal projects · built on my own time</span>
      </div>
      {TRAJ_PROJECTS.map((p, i) => (
        <article className="cd-proj" data-reveal key={i}>
          <div className="when">{p.when}</div>
          <div>
            <h3>{p.title}</h3>
            <p>{p.sum}</p>
            <p className="stack">{p.stack.map((s, j) => <span key={j}>{s}</span>)}</p>
          </div>
        </article>
      ))}

      <Foot left="— END OF RECORD" ack="SVC · 04" />
    </div>
  );
}

window.Trajectory = Trajectory;
