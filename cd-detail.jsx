// Console Dossier — project detail page (CH-01 · Pocket Professor).
// The "open project file" destination. Reads as an expanded mission file:
// full telemetry, how-it-works steps, build log, spec params, a product shot
// placeholder. Inherits whichever red the homepage switcher selected.

function DetailTelemetry() {
  const cells = [
    { k: 'Mission Status', v: '● LIVE', a: true, sub: 'since 2025.11' },
    { k: 'Uptime · 90d', v: '99.8 %', a: true, sub: '2 min planned dt' },
    { k: 'Eval Coverage', v: '94 %', a: true, sub: 'schema-locked' },
    { k: 'Plans Built', v: '2,310', sub: 'all-time' },
    { k: 'Median Gen', v: '11.4 s', sub: 'p95 · 19 s' },
  ];
  return (
    <div className="cd-tele rev" data-reveal>
      {cells.map((c, i) => (
        <div className="cell" key={i}>
          <div className="k">{c.k}</div>
          <div className={'v' + (c.a ? ' a' : '')}>{c.v}</div>
          <div className="sub">{c.sub}</div>
        </div>
      ))}
    </div>
  );
}

function Detail({ theme }) {
  useReveal('detail-' + theme.id);
  return (
    <div className="cd-wrap">
      <StatusBar station="PROJECT FILE" cur="projects" />

      <div className="cd-back" data-reveal>
        <a href="#/"><span className="a">←</span> INDEX</a> &nbsp;/&nbsp; CH-01 · POCKET PROFESSOR
      </div>

      {/* Header — airy */}
      <section className="cd-operator" style={{ paddingBottom: 40 }}>
        <div className="k" data-reveal>— Channel CH-01 · Flagship · Operational</div>
        <div className="id" data-reveal>POCKET PROFESSOR<span className="a">.</span></div>
        <p className="stmt" data-reveal>
          An AI curriculum generator for career-transition learners. Tell it what you want to
          learn, where you're starting, and how much time you have — it returns a
          <strong> structured, week-by-week plan</strong> you can actually follow.
        </p>
      </section>

      <article className="cd-console" data-reveal>
        <div className="pad">
          <div className="chid">TELEMETRY <span className="a">·</span> 90-DAY WINDOW <span className="a">·</span> NOMINAL</div>
        </div>
        <DetailTelemetry />
        <div className="cd-cta">
          <a className="primary" href="old-site/demo.html" target="_blank" rel="noopener"><span>▶  Launch live demo</span><span className="ar">→</span></a>
          <a href="https://github.com/alitahir6001" target="_blank" rel="noopener"><span>▶  Source on GitHub</span><span className="ar">→</span></a>
        </div>
      </article>

      {/* Product shot */}
      <div className="cd-shot" data-reveal>
        <div className="cap"><span className="a">FIG.01</span> &nbsp; product shot — generator output, exported syllabus PDF</div>
      </div>

      {/* Overview prose */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">overview</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          Most learning plans online are either a wall of links or a course someone's selling.
          Pocket Professor sits in between: it <strong>reasons about prerequisites</strong>,
          sequences topics so each week builds on the last, and attaches a small project to every
          week so the learning compounds into something real.
        </p>
        <p>
          The hard part isn't generating text — it's keeping the output <span className="a">trustworthy</span>.
          Every plan is schema-locked and run through an eval harness before it reaches the user,
          so a bad model day can't ship a broken curriculum.
        </p>
      </div>

      {/* How it works */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">sequence of operations</span>
      </div>
      <div className="cd-steps">
        <div className="step" data-reveal>
          <div className="n">01</div>
          <div>
            <h4>Intake</h4>
            <p>Subject, current skill level, target outcome, and weekly hours. Four fields, no account required.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">02</div>
          <div>
            <h4>Plan synthesis</h4>
            <p>The model drafts a prerequisite graph, then sequences it into weeks against the available time budget.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">03</div>
          <div>
            <h4>Eval &amp; lock</h4>
            <p>Output is validated against a JSON schema and scored by an eval harness — coverage, ordering, resource quality.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">04</div>
          <div>
            <h4>Deliver</h4>
            <p>The learner gets an interactive plan plus a clean, printable PDF syllabus to keep.</p>
          </div>
        </div>
      </div>

      {/* Spec params */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">specifications</span>
      </div>
      <div className="cd-params" data-reveal>
        <div className="row"><span className="k">Frontend</span><span className="v">React · TypeScript · Vite</span></div>
        <div className="row"><span className="k">Backend</span><span className="v">Python · FastAPI</span></div>
        <div className="row"><span className="k">Model layer</span><span className="v a">OpenAI · schema-locked</span></div>
        <div className="row"><span className="k">Store</span><span className="v">Postgres</span></div>
        <div className="row"><span className="k">Host</span><span className="v">Railway</span></div>
        <div className="row"><span className="k">Eval harness</span><span className="v a">custom · 94% coverage</span></div>
        <div className="row"><span className="k">Crew</span><span className="v">Solo build</span></div>
        <div className="row"><span className="k">Run</span><span className="v">2025.11 — now</span></div>
      </div>

      {/* Build log */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">build log · recent</span>
      </div>
      <div className="cd-log">
        <div className="entry" data-reveal>
          <div className="date">2026.05.21<span className="rev">REV·07</span></div>
          <p><strong>Exported PDF redesign.</strong> Typeset syllabus output, week dividers, printable margins.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2026.04.30<span className="rev">REV·06</span></div>
          <p><strong>Eval coverage to 94%.</strong> Added ordering checks and resource-link validation to the harness.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2026.03.12<span className="rev">REV·05</span></div>
          <p><strong>Prerequisite graph.</strong> Replaced flat topic lists with a dependency-aware sequencer.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2025.11.02<span className="rev">REV·01</span></div>
          <p><strong>First deploy.</strong> Intake → plan → PDF, end to end, on Railway.</p>
        </div>
      </div>

      <Foot left="— END OF FILE" ack="CH-01" />
    </div>
  );
}

window.Detail = Detail;
