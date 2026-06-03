// Console Dossier — Trajectory (#/trajectory). Career record from the résumé,
// tech-forward. Timeline of roles (cd-role), capability groups (cd-skills),
// credentials, and a résumé action. Medium density — a reference page.

const TRAJ_ROLES = [
  {
    when: '2025 — NOW', co: 'Independent', meta: 'Builder · solo',
    title: 'Founder / Engineer — Pocket Professor',
    sum: 'Designing and shipping an AI curriculum generator end to end — frontend, Python backend, model layer, and an eval harness that keeps the output honest.',
    bullets: [
      ['Built a Python service integrating local + hosted LLMs to generate structured, week-by-week learning plans across ', '15+ technical subjects', '.'],
      ['Schema-locked every output and scored it through a custom eval harness — ', '94% coverage', ' before anything reaches a user.'],
      ['Modular model layer (Claude, DeepSeek, Qwen) so the system survives a bad day from any single provider.'],
    ],
  },
  {
    when: '2024 — 2025', co: 'Accenture', meta: 'Security Specialist',
    title: 'Security Specialist — SSO',
    sum: 'Leading security implementations and SSO services for enterprise authentication across multiple GE business units.',
    bullets: [
      ['Maintained SSO services and authentication systems across GE Corporate, Vernova, and Aerospace.'],
      ['Implemented advanced security protocols and best practices for enterprise-scale applications.'],
    ],
  },
  {
    when: '2021 — 2024', co: 'General Electric', meta: 'SWE Specialist · SSO Team',
    title: 'Software Engineering Specialist — SSO Team',
    sum: 'End-to-end SDLC for 14 mission-critical SSO APIs serving 80,000+ employees, contractors, and B2B customers across three GE business units.',
    bullets: [
      ['Architected and delivered ', '14 SSO APIs in 11 months', ', modernizing 15+ year legacy Java systems through simultaneous IdP, database, and codebase migrations.'],
      ['Held ', '99% uptime', ' since production launch — and ran the entire enterprise SSO infrastructure ', 'solo for 10 months', ' during the GE/Accenture transition, without interruption.'],
      ['Cut API latency from ', 'seconds to milliseconds', ' with GraphQL for large directory queries.'],
      ['Implemented mTLS (OpenSSL · Terraform · Envoy) and migrated CI/CD from Jenkins to TeamCity for all three business units.'],
    ],
  },
  {
    when: '2021 — 2022', co: 'MAXX Potential', meta: 'Technology Apprentice',
    title: 'Technology Apprentice',
    sum: 'Accelerated career-development program across the VA/NC region.',
    bullets: [
      ['Completed a typically 1–3 year apprenticeship in ', '6 months', ', then placed on the GE assignment that became a full-time engineering role.'],
    ],
  },
];

const TRAJ_SKILLS = [
  { k: 'Languages & Frameworks', v: 'Python · TypeScript · JavaScript · Node.js · FastAPI · Flask · HTML/CSS' },
  { k: 'Cloud & DevOps', v: 'AWS (ECS, EC2, CloudFormation, CloudWatch, Secrets Manager, SSM, RDS, S3, IAM) · Docker · Terraform · CI/CD (TeamCity, Jenkins)' },
  { k: 'Security & APIs', v: 'mTLS · OpenSSL · certificate management · Apigee · GraphQL · REST' },
  { k: 'AI / ML', v: 'Claude · Llama 3–4 · DeepSeek R1 · Qwen2.5 · Gemma3 · Granite3 · Phi4 · Ollama · LM Studio' },
  { k: 'Delivery', v: 'Agile / Scrum (SAFe 2023) · Kanban · Rally admin · standups, sprint reviews, retros' },
  { k: 'Tooling & Testing', v: 'VS Code · PyCharm · Cursor · Git/GitHub · Postman · Chai/Mocha · unittest' },
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
          Enterprise authentication at scale, then independent AI product work. The throughline is
          <strong> systems that have to stay up</strong> — and the discipline to keep them there.
        </p>
        <div className="cd-cta" data-reveal>
          <a className="primary" href="old-site/resume.html" target="_blank" rel="noopener"><span>▶  Download résumé · PDF</span><span className="ar">→</span></a>
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
        <div className="row"><span className="k">AWS Developer</span><span className="v a">in progress</span></div>
        <div className="row"><span className="k">Full-Stack Bootcamp · Coding Dojo</span><span className="v">2021</span></div>
        <div className="row"><span className="k">B.S. Experimental Psychology · UTSA</span><span className="v">2018</span></div>
      </div>

      <Foot left="— END OF RECORD" ack="SVC · 04" />
    </div>
  );
}

window.Trajectory = Trajectory;
