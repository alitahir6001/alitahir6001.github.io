// Console Dossier — project detail page (CH-01 · Pocket Professor).
// The "open project file" destination. Reads as an expanded mission file:
// full telemetry, how-it-works steps, build log, spec params, a product shot
// placeholder. Inherits whichever red the homepage switcher selected.

function DetailTelemetry() {
  const cells = [
    { k: 'Mission Status', v: '● PRE-PILOT', a: true, sub: 'v1 retired for rebuild' },
    { k: 'Stage', v: 'v2 · IN DESIGN', a: true, sub: 'curriculum engine' },
    { k: 'Frontend', v: 'REACT · VITE', sub: 'tailwind' },
    { k: 'Backend', v: 'FASTIFY · TS', sub: 'node' },
    { k: 'Store', v: 'POSTGRES', sub: 'on railway (v1)' },
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
        <div className="k" data-reveal>— Channel CH-01 · Flagship · Pre-pilot</div>
        <div className="id" data-reveal>POCKET PROFESSOR<span className="a">.</span></div>
        <p className="stmt" data-reveal>
          A structured learning platform for career-switchers — built for people leaving
          high-attrition work. Three agents — <strong>onboarding, professor, and career
          coach</strong> — shape your plan and adapt it as your real progress and setbacks change.
        </p>
      </section>

      <article className="cd-console" data-reveal>
        <div className="pad">
          <div className="chid">STATUS <span className="a">·</span> CURRENT <span className="a">·</span> PRE-PILOT</div>
        </div>
        <DetailTelemetry />
        <div className="cd-cta">
          <a href="https://github.com/alitahir6001" target="_blank" rel="noopener"><span>▶  GitHub · alitahir6001</span><span className="ar">→</span></a>
        </div>
      </article>

      {/* Product shot */}
      <div className="cd-shot" data-reveal>
        <div className="cap"><span className="a">FIG.01</span> &nbsp; UI preview — captured at pilot</div>
      </div>

      {/* Overview prose */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">overview</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          Most learning plans are a static wall of links. Pocket Professor is built to
          <strong> adapt</strong>: an onboarding agent profiles where you're starting, a professor
          agent sequences the work toward your goal, and a career coach agent steps in when you
          stall or want to pivot toward a different career.
        </p>
        <p>
          The core is a <span className="a">deterministic adaptation engine</span> — given the same
          inputs it always reaches the same decision, and every adjustment is written to an audit
          record. Structural changes to a plan are transactional and <strong>fail closed</strong>:
          if a change can't be applied safely, it isn't applied at all. The agents run against
          strict schema contracts, so malformed output is rejected rather than shown to a learner.
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
            <h4>Onboard</h4>
            <p>The onboarding agent profiles where you're starting, your goal, and your real constraints — time, schedule, and the life you're learning around.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">02</div>
          <div>
            <h4>Plan</h4>
            <p>The professor agent sequences a structured plan toward that goal, paced to the hours you actually have.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">03</div>
          <div>
            <h4>Adapt</h4>
            <p>As you go, the engine reads behavior signals — missed sessions, late-night cramming, topic resistance, a run of completions — and applies the first matching rule: reduce workload, shift the schedule, raise difficulty, or escalate to the career coach.</p>
          </div>
        </div>
        <div className="step" data-reveal>
          <div className="n">04</div>
          <div>
            <h4>Audit</h4>
            <p>Every adjustment is deterministic and written to an audit record, so the plan evolves safely and you can always see why it changed.</p>
          </div>
        </div>
      </div>

      {/* Spec params */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">specifications</span>
      </div>
      <div className="cd-params" data-reveal>
        <div className="row"><span className="k">Frontend</span><span className="v">React · Vite · Tailwind</span></div>
        <div className="row"><span className="k">Backend</span><span className="v">Node · Fastify · TypeScript</span></div>
        <div className="row"><span className="k">Model layer</span><span className="v a">Gemini → OpenAI → Claude</span></div>
        <div className="row"><span className="k">Store</span><span className="v">PostgreSQL</span></div>
        <div className="row"><span className="k">Host</span><span className="v">Railway <span className="a">· v1 offline</span></span></div>
        <div className="row"><span className="k">Crew</span><span className="v">Solo build</span></div>
        <div className="row"><span className="k">Stage</span><span className="v a">Pre-pilot · v2 in design</span></div>
      </div>

      {/* Build log */}
      <div className="cd-band cd-spec-title" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">build log · v1 → v2</span>
      </div>
      <div className="cd-log">
        <div className="entry" data-reveal>
          <div className="date">2026.05<span className="rev">v2 · pilot</span></div>
          <p><strong>Pilot readiness.</strong> Onboarding flow plus a Vite/Tailwind frontend, aimed at real non-technical users from service-industry work.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2026.03<span className="rev">v2 · phase 3</span></div>
          <p><strong>Adaptation engine.</strong> Fastify runtime + Postgres persistence, deterministic smoke checks, fail-closed audit writes; patched a Fastify advisory along the way.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2026.02<span className="rev">v2 · the pivot</span></div>
          <p><strong>Re-architected from scratch.</strong> Behavioral design + system architecture for a deterministic multi-agent engine — onboarding, professor, and career-coach agents under strict schema contracts.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2025.07<span className="rev">v0.3–0.4</span></div>
          <p><strong>MVP + demo.</strong> The syllabus generator went hosted — Python · FastAPI · Gemini on Railway — through an MVP and a TechCrunch-ready demo build.</p>
        </div>
        <div className="entry" data-reveal>
          <div className="date">2025.03<span className="rev">v0.1</span></div>
          <p><strong>First prototype.</strong> The original idea: an LLM-driven Q&amp;A that drafted a learning syllabus from a few inputs.</p>
        </div>
      </div>

      <Foot left="— END OF FILE" ack="CH-01" />
    </div>
  );
}

window.Detail = Detail;
