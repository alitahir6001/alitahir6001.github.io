// Console Dossier — Projects (#/projects). Channel catalog: the Pocket Professor
// flagship plus the personal projects on the résumé (job-apply, agent harness, ZuneHD)
// and client/archive work. Data-driven — add a channel by adding an entry to PROJECT_CHANNELS.
// art: null = placeholder; swap in a URL string to show a screenshot.

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: '· flagship · pre-pilot', title: 'Pocket Professor',
    body: 'An adaptive learning platform for service-industry workers (35+) changing careers — a domain informed by 15 years of personal industry experience. Three agents (onboarding, professor, career coach) build a plan and adapt it to real progress, under strict contracts with an append-only event store so every adaptation is reproducible.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres · github actions'],
    badge: 'PRE-PILOT', badgeCls: 'warn',
    href: '#/pocket-professor',
    art: null,
  },
  {
    id: 'CH-02', of: '· tool · job hunt', title: 'job-apply',
    body: 'Scrapes 13 job boards (550–600 postings a run), scores every posting against a base résumé with batched LLM calls, and generates a tailored résumé and cover letter per job in 20–30 seconds. A Manifest V3 Chrome extension fills Greenhouse and Lever forms in my own browser — deterministic answers for factual screening questions, mandatory human review before submit.',
    stack: ['node · sqlite · playwright', 'chrome extension · mv3', 'anthropic · openai · gemini'],
    badge: 'ACTIVE',
    art: null,
  },
  {
    id: 'CH-03', of: '· tool · agent harness', title: 'AI Agent Harness Extensions',
    body: 'Two extensions to my own coding-agent setup. The Advisor is a model-agnostic MCP server that routes architectural and hard-to-reverse decisions to a second opinion on a different model — cheap models carry the everyday load. Alongside it, a persistent project-memory system that lets agents resume multi-session work without re-deriving context.',
    stack: ['python · mcp · stdio json-rpc', 'stdlib only · no install step', 'anthropic · gemini'],
    badge: 'ACTIVE',
    art: null,
  },
  {
    id: 'CH-04', of: '· hardware · revival', title: 'ZuneHD Artist Metadata Updater',
    body: 'Restores artist biographies and background images on ZuneHD hardware after Microsoft retired the Zune.net backend. Resolves artists against MusicBrainz, writes MBIDs into ID3 tags, and delivers the data over the device\'s encrypted USB MTP stack — PPP/TCP/HTTP tunnelled over MTP.',
    stack: ['.net 8 · c# · p/invoke', 'macos iokit · win winusb · linux libusb', 'musicbrainz'],
    badge: 'SHIPPED',
    art: null,
  },
  {
    id: 'CH-05', of: '· tool · client work', title: 'Oneness Suite',
    body: 'Custom local-only dashboard for a solo therapist\'s practice. Three tools: intake screening, reschedule outreach, and social content drafting. HIPAA-informed — no cloud, no third-party data exposure.',
    stack: ['node 22 · ts · express', 'google sheets · calendar · nodemailer', 'multi-provider ai'],
    badge: 'SHIPPED',
    art: null,
  },
  {
    id: 'CH-06', of: '· archive · tinkering', title: 'Hardware & IoT',
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
          One flagship under active build, plus the agent tooling, automation, and hardware work
          that keeps the curiosity and the fundamentals sharp.
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
