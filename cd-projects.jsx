// Console Dossier — Projects (#/projects). Channel catalog: Pocket Professor, the agent
// tooling, and the hardware/client work. Data-driven — add a channel by adding an entry
// to PROJECT_CHANNELS. art: null = placeholder; swap in a URL string to show a screenshot.
// href = internal route (▶ Open file); repo = public GitHub URL (▶ Source).

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: '· learning platform · pre-pilot', title: 'Pocket Professor',
    body: 'An adaptive learning platform for motivated autodidacts who want to change careers — a problem informed by 15 years of my own service-industry work. Three agents (onboarding, professor, career coach) build a plan and adapt it to real progress, under strict contracts with an append-only event store so every adaptation is reproducible.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres · github actions'],
    badge: 'PRE-PILOT', badgeCls: 'warn',
    href: '#/pocket-professor',
    art: null,
  },
  {
    id: 'CH-02', of: '· tool · agent harness', title: 'The Advisor',
    body: 'A Claude Code plugin that routes architectural and hard-to-reverse decisions to a stronger model for a second opinion, while a cheap workhorse model carries the everyday load. Model-agnostic — Claude, Gemini, or GPT, over either a vendor CLI or an API key. Python standard library only, no install step, and every consult is logged verbatim as JSON so the escalation is auditable.',
    stack: ['python · mcp · stdio json-rpc', 'claude code plugin', 'anthropic · gemini · openai'],
    badge: 'SHIPPED',
    repo: 'https://github.com/alitahir6001/the-advisor',
    art: null,
  },
  {
    id: 'CH-03', of: '· method · agent memory', title: 'Agent Memory & Session State',
    body: 'A working notebook for making coding agents behave, and the memory protocol that came out of it: durable knowledge in a generated skill library, live state in a small set of session files, per-turn rules in one place — so an agent resumes multi-session work without re-deriving context. Behavior claims are only accepted here after a fresh session proves them in the tool-call stream, tested against a small model on purpose.',
    stack: ['claude code skills', 'session-state protocol', 'stream-json verification'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/harness',
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
          A learning platform under active build, the agent tooling I use every day, and the
          hardware and client work that keeps the curiosity and the fundamentals sharp.
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
                {c.repo ? <a className="read" href={c.repo} target="_blank" rel="noopener noreferrer">▶ Source →</a> : null}
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
