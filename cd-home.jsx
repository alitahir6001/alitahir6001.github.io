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
        <div className="id" data-reveal>ALI TAHIR <span className="a">·</span> [ DESCRIPTOR — TBD ]</div>
        <p className="stmt" data-reveal>
          Five years shipping production software — <strong>the last two with LLMs in the loop.</strong>
          Currently building <span className="a">Pocket Professor</span>, an AI curriculum generator
          built for autodidacts like me who want to learn anything.
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
        <span className="end">2 of 4 routed</span>
      </div>

      <article className="cd-ch" data-reveal>
        <div className="id">CH-02<span className="of">routed · ground</span></div>
        <div>
          <h3>Field Notes</h3>
          <p>
            Long-form writing on prompts, evals, schema-locked outputs, and the small engineering
            decisions that keep AI features from regressing in production.
          </p>
          <p className="stack"><span>essays</span><span>02 drafting</span><span><a href="#/field-notes" style={{color:'var(--accent-ink)',textDecoration:'none'}}>open log →</a></span></p>
        </div>
        <div className="right">
          <div><span className="k">FIRST</span><span className="v"> · 2024.04</span></div>
          <div><span className="k">LAST</span><span className="v"> · 2026.05</span></div>
          <div className="badge">WRITING</div>
        </div>
      </article>

      <article className="cd-ch" data-reveal>
        <div className="id">CH-03<span className="of">staged · pre-launch</span></div>
        <div>
          <h3>[ Classified — acquisition pending ]</h3>
          <p>
            Evaluation harness for non-deterministic systems. Test rigs, regression diffs, cost
            accounting. More telemetry once it clears review.
          </p>
          <p className="stack"><span>in progress</span><span>v0.1 draft</span></p>
        </div>
        <div className="right">
          <div><span className="k">FIRST</span><span className="v"> · Q3 2026</span></div>
          <div><span className="k">CREW</span><span className="v"> · 01</span></div>
          <div className="badge warn">PRE-LAUNCH</div>
        </div>
      </article>

      <article className="cd-ch" data-reveal>
        <div className="id">CH-04<span className="of">archive · stable</span></div>
        <div>
          <h3>Earlier work</h3>
          <p>
            Production services and internal tools from five years before the AI shift — enterprise
            SSO, data pipelines, the unglamorous plumbing that taught the rest.
          </p>
          <p className="stack"><span>2019 — 2024</span><span><a href="#/trajectory" style={{color:'var(--accent-ink)',textDecoration:'none'}}>service record →</a></span></p>
        </div>
        <div className="right">
          <div><span className="k">SPAN</span><span className="v"> · 5 yrs</span></div>
          <div><span className="k">ROLE</span><span className="v"> · IC → senior</span></div>
          <div className="badge">ARCHIVE</div>
        </div>
      </article>

      <Foot left="— END OF FEED" ack="ACK · 07" />
    </div>
  );
}

window.Home = Home;
