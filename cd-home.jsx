// Console Dossier — homepage. Locked to OXBLOOD, rebuilt calm: a dimly-lit
// lounge readout rather than a packed mission-control board. Airy hero sets the
// tone; the flagship sits in open space; telemetry is a 4-stat readout row;
// secondary channels breathe. Console vocabulary kept, density removed.

function Home({ theme }) {
  useReveal('home');
  return (
    <div className="cd-wrap">
      <StatusBar station="GROUND STATION" cur="index" />

      {/* Airy hero — compact identity, no giant name */}
      <section className="cd-operator">
        <div className="k" data-reveal>— Operator</div>
        <div className="id" data-reveal>ALI TAHIR</div>
        <p className="stmt" data-reveal>
          Five years shipping production software — <strong>the last two with LLMs in the loop.</strong>
        </p>
        <div className="open" data-reveal>● Open to mid-level engineering roles</div>
      </section>

      {/* Primary channel — flagship project */}
      <div className="cd-band" data-reveal>
        <span className="a">PRIMARY CHANNEL</span>
        <span className="ln"></span>
        <span className="end">status readout · pre-pilot</span>
      </div>

      <article className="cd-console" data-reveal>
        <div className="pad">
          <div className="chid">CH-01 <span className="a">·</span> FLAGSHIP <span className="a">·</span> PRE-PILOT</div>
          <h1>Pocket Professor</h1>
          <p className="sub">
            A guided learning platform for self-taught learners — the structure of college or a
            bootcamp without the cost. An onboarding counselor, an instructor's guidance, and a
            career coach that connects what you learn to real jobs. Built for people in
            high-attrition industries who want out but are short on time, money, or both.
          </p>
        </div>

        <div className="cd-cta">
          <a className="primary" href="#/pocket-professor"><span>▶  Open project file</span><span className="ar">→</span></a>
        </div>
      </article>

      {/* Secondary channels — open readout, room to breathe */}
      <div className="cd-band" data-reveal>
        <span className="a">SECONDARY CHANNELS</span>
        <span className="ln"></span>
        <span className="end">2 routed</span>
      </div>

      <article className="cd-ch" data-reveal>
        <div className="id">CH-02<span className="of">routed · ground</span></div>
        <div>
          <h3>Field Notes</h3>
          <p>
            Engineering lessons, AI, and the occasional love letter to the old software and hardware
            that made me a builder.
          </p>
          <p className="stack"><span>essays</span><span>01 published</span><span><a href="#/field-notes" style={{color:'var(--accent-ink)',textDecoration:'none'}}>open log →</a></span></p>
        </div>
        <div className="right">
          <div><span className="k">POSTS</span><span className="v"> · 01</span></div>
          <div><span className="k">LATEST</span><span className="v"> · 2026.06</span></div>
          <div className="badge">WRITING</div>
        </div>
      </article>

      <article className="cd-ch" data-reveal>
        <div className="id">CH-03<span className="of">archive · stable</span></div>
        <div>
          <h3>Earlier work</h3>
          <p>
            Enterprise authentication at scale before the AI shift — SSO services that tens of
            thousands of people depended on, and the unglamorous production plumbing that taught
            the rest.
          </p>
          <p className="stack"><span>2021 — 2024</span><span><a href="#/trajectory" style={{color:'var(--accent-ink)',textDecoration:'none'}}>service record →</a></span></p>
        </div>
        <div className="right">
          <div><span className="k">SPAN</span><span className="v"> · 3 yrs</span></div>
          <div><span className="k">ROLE</span><span className="v"> · Engineer</span></div>
          <div className="badge">ARCHIVE</div>
        </div>
      </article>

      <Foot left="— END OF FEED" ack="ACK · 07" />
    </div>
  );
}

window.Home = Home;
