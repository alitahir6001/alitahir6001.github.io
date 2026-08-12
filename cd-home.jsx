// Console Dossier — homepage. A directory, not a pitch: a short greeting, then
// one routed channel per page. The flagship project lives on Projects now, not
// here — the index's job is to send people to the right page fast.

// Field Notes is filtered out when SHOW_FIELD_NOTES is false; channel numbers
// come from position, so the list renumbers itself.
const HOME_CHANNELS = [
  {
    href: '#/projects', label: 'Projects', of: 'builds · routed',
    blurb: "Here's some stuff I've made — a flagship in pre-pilot, the tools I use daily, and a few hardware detours.",
    badge: 'BUILDS',
  },
  {
    href: '#/field-notes', label: 'Field Notes', of: 'writing · routed', gated: !SHOW_FIELD_NOTES,
    blurb: 'Engineering lessons, AI, and the occasional love letter to the old software and hardware that made me a builder.',
    badge: 'WRITING',
  },
  {
    href: '#/trajectory', label: 'Trajectory', of: 'record · stable',
    blurb: 'What I can do and where I did it — enterprise SSO at scale, then the shift to building with LLMs.',
    badge: 'RECORD',
  },
  {
    href: '#/about', label: 'About', of: 'personal · stable',
    blurb: 'How a psychology researcher ended up shipping production software, and what carried over.',
    badge: 'PERSONAL',
  },
  {
    href: '#/hire', label: 'AOI / Hire', of: 'contact · open',
    blurb: "What I'm looking for, the work I want to do next, and how to reach me.",
    badge: 'CONTACT',
  },
].filter((c) => !c.gated);

function Home({ theme }) {
  useReveal('home');
  return (
    <div className="cd-wrap">
      <StatusBar station="GROUND STATION" cur="index" />

      <section className="cd-operator">
        <div className="k" data-reveal>— Operator</div>
        <h1 className="id" data-reveal>Hi, I'm Ali</h1>
        <p className="stmt" data-reveal>
          I'm a research nerd who likes to <strong>make stuff.</strong>
        </p>
        <p className="stmt sub" data-reveal>
          Five years shipping production software — the last two with LLMs in the loop.
        </p>
      </section>

      <div className="cd-band" data-reveal>
        <span className="a">CHANNELS</span>
        <span className="ln"></span>
        <span className="end">{String(HOME_CHANNELS.length).padStart(2, '0')} routed</span>
      </div>

      {HOME_CHANNELS.map((c, i) => (
        <article className="cd-chan" data-reveal key={c.href}>
          <div className="id">CH-{String(i + 1).padStart(2, '0')}<span className="of">{c.of}</span></div>
          <div>
            <h3><a href={c.href}>{c.label}</a></h3>
            <p>{c.blurb}</p>
            <p className="stack"><span><a href={c.href} style={{color:'var(--accent-ink)',textDecoration:'none'}}>open →</a></span></p>
          </div>
          <div className="right">
            <div className="badge">{c.badge}</div>
          </div>
        </article>
      ))}

      <Foot left="— END OF FEED" ack="ACK · 07" />
    </div>
  );
}

window.Home = Home;
