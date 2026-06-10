// Console Dossier — Projects (#/projects). Full channel catalog: the Pocket
// Professor flagship plus the side builds (home lab, hardware/IoT) and the
// enterprise archive. Reuses the cd-ch readout. Data-driven — add a
// channel by adding an entry to PROJECT_CHANNELS.

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: 'flagship · pre-pilot', title: 'Pocket Professor',
    body: 'A structured learning platform for career-switchers leaving high-attrition work. A deterministic multi-agent engine — onboarding, professor, and career coach — builds a plan and adapts it to your real behavior, with fail-closed, auditable decisions.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres'],
    right: [['STATUS', ' · PRE-PILOT'], ['SINCE', ' · 2025']], badge: 'PRE-PILOT', badgeCls: 'warn',
    href: '#/pocket-professor',
  },
  {
    id: 'CH-02', of: 'archive · tinkering', title: 'Hardware & IoT',
    body: 'Where the curiosity goes when it leaves the screen: Arduino nodebots with Johnny-Five, Raspberry Pi retro-gaming builds, and hardware-security research on the Flipper Zero.',
    stack: ['arduino · johnny-five', 'raspberry pi', 'flipper zero'],
    right: [['SPAN', ' · 2022 —'], ['TYPE', ' · personal']], badge: 'ARCHIVE',
  },
  {
    id: 'CH-03', of: 'archive · enterprise', title: 'Enterprise SSO platform · GE',
    body: '14 mission-critical SSO APIs serving 80,000+ people across three GE business units. Legacy Java modernization, mTLS, GraphQL latency wins, and a CI/CD migration — run solo for ten months during the corporate transition.',
    stack: ['node · ts', 'graphql · mtls', 'aws · terraform'],
    right: [['RUN', ' · 2021—24'], ['UPTIME', ' · 99%']], badge: 'ARCHIVE',
  },
];

function Projects() {
  useReveal('projects');
  return (
    <div className="cd-wrap">
      <StatusBar station="CHANNEL DIRECTORY" cur="projects" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Projects · Channel Directory</div>
        <h1 data-reveal>Everything currently<br />on the <span className="a">air.</span></h1>
        <p className="lead" data-reveal>
          One flagship under active build, a few side channels keeping the fundamentals sharp, and the
          enterprise work that taught the rest. <strong>Open a channel for the full file.</strong>
        </p>
      </section>

      <div className="cd-band" data-reveal>
        <span className="a">ALL CHANNELS</span>
        <span className="ln"></span>
        <span className="end">{PROJECT_CHANNELS.length} routed</span>
      </div>

      {PROJECT_CHANNELS.map((c) => (
        <article className="cd-ch" data-reveal key={c.id}>
          <div className="id">{c.id}<span className="of">{c.of}</span></div>
          <div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <p className="stack">{c.stack.map((s, i) => <span key={i}>{s}</span>)}</p>
            {c.href ? <a className="read" style={{ color: 'var(--accent-ink)', textDecoration: 'none', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' }} href={c.href}>▶ Open project file →</a> : null}
          </div>
          <div className="right">
            {c.right.map((r, i) => <div key={i}><span className="k">{r[0]}</span><span className="v">{r[1]}</span></div>)}
            <div className={'badge ' + (c.badgeCls || '')}>{c.badge}</div>
          </div>
        </article>
      ))}

      <Foot left="— END OF DIRECTORY" ack="DIR · 05" />
    </div>
  );
}

window.Projects = Projects;
