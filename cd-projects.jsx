// Console Dossier — Projects (#/projects). Channel catalog: the Pocket Professor
// flagship plus side projects (job-apply, intake-assistant, hardware/IoT). Reuses
// the cd-ch readout. Data-driven — add a channel by adding an entry to PROJECT_CHANNELS.

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: 'flagship · pre-pilot', title: 'Pocket Professor',
    body: 'A structured learning tool for motivated autodidacts who want to leave their current industry. Adapts to how you learn best to help you reach your learning goals.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres'],
    right: [['STATUS', ' · PRE-PILOT'], ['SINCE', ' · 2025']], badge: 'PRE-PILOT', badgeCls: 'warn',
    href: '#/pocket-professor',
  },
  {
    id: 'CH-02', of: 'tool · job hunt', title: 'job-apply',
    body: 'A local-only job-hunt automation pipeline. It scrapes remote boards, ranks every posting against my résumé in a single batched LLM call, tailors a résumé and cover letter per job, then fills the application in a real browser window for me to review and submit. I stay in the loop on everything that goes out.',
    stack: ['node · javascript', 'browser automation', 'llm ranking pipeline'],
    right: [['STATUS', ' · ACTIVE'], ['TYPE', ' · personal tool']], badge: 'ACTIVE',
  },
  {
    id: 'CH-03', of: 'tool · automation', title: 'intake-assistant',
    body: 'A small automation for client intake: when someone submits a Google Form, it runs eligibility checks (state, insurance, in-person), has an LLM summarize their message and draft follow-up questions, and pings me on Telegram. Built for a real intake workflow.',
    stack: ['typescript · node', 'google sheets api', 'telegram · llm'],
    right: [['STATUS', ' · SHIPPED'], ['TYPE', ' · client tool']], badge: 'SHIPPED',
  },
  {
    id: 'CH-04', of: 'archive · tinkering', title: 'Hardware & IoT',
    body: 'Where the curiosity goes when it leaves the screen: Arduino nodebots with Johnny-Five, a Raspberry Pi turned into a classic-gaming console, and hardware-security research on the Flipper Zero.',
    stack: ['arduino · johnny-five', 'raspberry pi', 'flipper zero'],
    right: [['SPAN', ' · 2022 —'], ['TYPE', ' · personal']], badge: 'ARCHIVE',
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
          One flagship under active build, plus a few side projects — automation tools and hardware
          tinkering — that keep the curiosity and the fundamentals sharp.
          <strong> Open the flagship for its full file.</strong>
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
