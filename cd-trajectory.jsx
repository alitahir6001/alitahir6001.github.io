// Console Dossier — Trajectory (#/trajectory). Career record from the résumé.
// §01 capabilities, §02 research, §03 experience, §04 education, §05 a pointer to
// the Projects page. Research sits above the employment record on purpose — it is
// where the trajectory starts, and it was previously one small row near the bottom.
// The thesis has no link by design: the paper is in UTSA's archives, not in hand.

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
          Psychology research first, then enterprise authentication at GE, then systems
          and agent tooling at IDEA.
        </p>
        <div className="cd-cta" data-reveal>
          <a href="https://github.com/alitahir6001" target="_blank" rel="noopener noreferrer"><span>▶  GitHub</span><span className="ar">→</span></a>
          <a href="https://linkedin.com/in/ali-t-06748432" target="_blank" rel="noopener noreferrer"><span>▶  LinkedIn</span><span className="ar">→</span></a>
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

      {/* §02 — research. Above the employment record on purpose: it is the start of the
          trajectory, and it spent the last revision as one small row down in §03. No link —
          the paper lives in UTSA's archives, so the work is described rather than promised. */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">research · undergraduate thesis</span>
      </div>
      <article className="cd-proj" data-reveal>
        <div className="when">2017 — 2018</div>
        <div>
          <h3>“Cross Cultural Stressors of Adolescents and Young Adults Ages 14–24 in a Bi-Cultural Upbringing”</h3>
          <p>
            My own study, sponsored into graduate-level (5000) research as an undergraduate. A 2×3
            factorial design — two age bands against three stressor types, financial, educational,
            and social — surveyed 138 respondents across San Antonio and the D.C. metro, with
            self-report triangulated against Bexar County and forty years of US Census demographics
            plus a meta-analysis of existing work on cultural stressors. The dominant pressure was
            social — conforming on language, behavioral norms, etiquette — with financial pressure
            close behind. Presented as a poster at UTSA's thesis conference in 2018.
          </p>
          <p className="stack"><span>2×3 factorial</span><span>n = 138 · two metros</span><span>survey · census · meta-analysis</span></p>
        </div>
      </article>

      {/* §03 — experience */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">experience · engineering, research, operations</span>
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

      {/* §04 — education first, then certifications (matches the résumé's combined section).
          The thesis and its sponsorship moved up to §02; don't restate them here. */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">education · certifications · community</span>
      </div>
      <div className="cd-params" data-reveal>
        <div className="row"><span className="k">B.S. Experimental Psychology · University of Texas at San Antonio</span><span className="v">2018</span></div>
        <div className="row"><span className="k">Full-Stack Development Bootcamp · Coding Dojo</span><span className="v">2021</span></div>
        <div className="row"><span className="k">AWS Machine Learning Engineer</span><span className="v a">in progress</span></div>
        <div className="row"><span className="k">SAFe® Scrum Master</span><span className="v">2023</span></div>
        <div className="row"><span className="k">AWS Cloud Practitioner</span><span className="v">2023</span></div>
        <div className="row"><span className="k">Community · Meadowbridge Community Market (MAD RVA), monthly volunteer crew</span><span className="v">2025 — now</span></div>
        <div className="row"><span className="k">Community · TechCrunch All Stage, Boston</span><span className="v">2025</span></div>
      </div>

      {/* §05 — personal projects live on the Projects page. This section used to restate all
          four of its cards verbatim; it is a pointer now, not a second copy. */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 05</span><span className="ln"></span><span className="end">personal projects · built on my own time</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          The personal work has its own page — Pocket Professor, the agent tooling I use daily,
          a ZuneHD revival, and a couple of hardware detours, each with a link to its source.
        </p>
        <div className="cd-cta one">
          <a href="#/projects"><span>▶  Projects</span><span className="ar">→</span></a>
        </div>
      </div>

      <Foot left="— END OF RECORD" ack="SVC · 05" />
    </div>
  );
}

window.Trajectory = Trajectory;
