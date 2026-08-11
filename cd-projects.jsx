// Console Dossier — Projects (#/projects). Channel catalog: the Pocket Professor
// flagship plus side projects (job-apply, intake-assistant, hardware/IoT). Data-driven
// — add a channel by adding an entry to PROJECT_CHANNELS.
// art: null = placeholder; swap in a URL string to show a screenshot.

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: '· flagship · pre-pilot', title: 'Pocket Professor',
    body: 'A structured learning tool for career-changers. Adapts to how you think.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres'],
    badge: 'PRE-PILOT', badgeCls: 'warn',
    href: '#/pocket-professor',
    art: null,
  },
  {
    id: 'CH-02', of: '· tool · job hunt', title: 'job-apply',
    body: 'Scrapes job boards, ranks postings against my résumé with an LLM, tailors résumé + cover letter, and auto-fills application forms. Stops before submit.',
    stack: ['node · js · sqlite', 'playwright', 'llm api'],
    badge: 'ACTIVE',
    art: null,
  },
  {
    id: 'CH-03', of: '· tool · client work', title: 'Oneness Suite',
    body: 'Custom local-only dashboard for a solo therapist\'s practice. Three tools: intake screening, reschedule outreach, and social content drafting. HIPAA-informed — no cloud, no third-party data exposure.',
    stack: ['node 22 · ts · express', 'google sheets · calendar · nodemailer', 'multi-provider ai'],
    badge: 'SHIPPED',
    art: null,
  },
  {
    id: 'CH-04', of: '· archive · tinkering', title: 'Hardware & IoT',
    body: 'Arduino nodebots, a Raspberry Pi gaming console, and Flipper Zero hardware security.',
    stack: ['arduino · johnny-five', 'raspberry pi', 'flipper zero'],
    badge: 'ARCHIVE',
    art: null,
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

      <div className="cd-ch-grid" data-reveal>
        {PROJECT_CHANNELS.map((c) => (
          <article className="cd-ch" key={c.id}>
            <div className="cd-ch-art">
              {c.art ? <img src={c.art} alt={c.title} /> : <span>—</span>}
            </div>
            <div className="cd-ch-body">
              <div className="id">{c.id}<span className="of">{c.of}</span></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <p className="stack">{c.stack.map((s, i) => <span key={i}>{s}</span>)}</p>
              <div className="ch-foot">
                <div className={'badge ' + (c.badgeCls || '')}>{c.badge}</div>
                {c.href ? <a className="read" href={c.href}>▶ Open file →</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Foot left="— END OF DIRECTORY" ack="DIR · 05" />
    </div>
  );
}

window.Projects = Projects;
