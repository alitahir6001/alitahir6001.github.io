// Console Dossier — About (#/about). Personnel file: Ali's real bio narrative set in
// the dossier vocabulary. Two framed photographs (childhood in Rock Creek Park; the
// v1 Pocket Professor backend), a pull quote, and a short "prior life" note.
// Medium density — richer than the landing, still calm.

function About() {
  useReveal('about');
  return (
    <div className="cd-wrap">
      <StatusBar station="PERSONNEL FILE" cur="about" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Personnel · Background</div>
        <h1 data-reveal>The researcher who<br />learned to <span className="a">ship.</span></h1>
        <p className="lead" data-reveal>
          I'm a software engineer who debugs systems with a behavioral researcher's instincts —
          <strong> evidence over fashion, the architecture under the behavior.</strong>
        </p>
      </section>

      {/* §01 — origin */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">origin</span>
      </div>
      <div className="cd-prose" data-reveal style={{ maxWidth: 'none' }}>
        <figure className="cd-figure right" data-reveal>
          <div className="frame" data-tag="FIG.A · 1991">
            <img src="images/tahir-siblings-at-rockcreek-park.png" alt="Ali Tahir and siblings, Rock Creek Park, c. 1991" />
          </div>
          <div className="cap"><span className="a">FIG.A</span> &nbsp; Rock Creek Park, autumn c.1991 — Washington, D.C.</div>
        </figure>
        <p style={{ maxWidth: '52ch' }}>
          My family immigrated to Washington, D.C. when I was seven. I spent my most formative years
          moving through the city's eclectic, varied neighborhoods — and that mix is what first made
          me <strong>curious about people</strong>: why they do what they do, how they think, what
          makes a system, social or otherwise, actually work.
        </p>
        <p style={{ maxWidth: '52ch' }}>
          That curiosity took me to the University of Texas at San Antonio, where I studied
          experimental psychology. Years of behavioral research and statistical analysis taught me to
          trust evidence over fashion, and to look past surface behavior to the
          <span className="a"> cognitive architecture</span> underneath.
        </p>
      </div>

      {/* §02 — the pivot */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">the pivot · human code → computer code</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          My plan was research. The 2020 pandemic rewrote it. Watching the world reorganize itself in
          real time, I started to see technology less as a tool and more as the most powerful lever
          available for applying what we know about human behavior — at scale, and fast.
          <strong> Through hard self-teaching and the high-intensity structure of a coding bootcamp,
          I traded the lab for a terminal and never looked back.</strong>
        </p>
        <p>
          The four years that followed were spent on mission-critical enterprise systems —
          maintaining authentication infrastructure that <span className="a">80,000+ people</span>
          depended on — learning how real software gets built, shipped, and kept alive under pressure.
        </p>
      </div>

      <figure className="cd-figure" data-reveal>
        <div className="frame" data-tag="FIG.B · BACKEND">
          <img src="images/pockProf_code_snapshot.png" alt="The early v1 Python backend for the first Pocket Professor syllabus generator" />
        </div>
        <div className="cap"><span className="a">FIG.B</span> &nbsp; The v1 Python backend — Pocket Professor's first syllabus generator</div>
      </figure>

      <blockquote className="cd-quote" data-reveal>
        <p>"Technology and psychology are two sides of the same coin. Both seek to create systems — one
        in silicon, one in the mind — that produce predictable, desirable outcomes."</p>
      </blockquote>

      {/* §03 — synthesis */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">synthesis · the why behind pocket professor</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          Pocket Professor is where the two halves meet. The hardest part of teaching yourself
          something isn't finding information — it's the absence of a clear path and a psychologically
          sound way to walk it. The internet is full of <strong>what</strong> to learn and nearly
          silent on <strong>how</strong> to learn it well.
        </p>
        <p>
          My research background made me skeptical of popular neuromyths like "learning styles." The
          real leverage is in evidence-based mechanics — <span className="a">active recall, spaced
          repetition, desirable difficulty.</span> Pocket Professor is built to facilitate those
          processes, not just hand you a list of topics.
        </p>
        <p>
          It's for people like me: motivated mid-career professionals standing at the edge of a
          change, paralyzed by the chaos of self-education. I'm building the structured,
          confidence-building bridge to the other side — without the absurd time and cost it usually
          demands.
        </p>
      </div>

      {/* §04 — prior life */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">prior life · before the terminal</span>
      </div>
      <article className="cd-ch" data-reveal>
        <div className="id">ARCHIVE<span className="of">2015 — 2020</span></div>
        <div>
          <h3>Chef, operator, undergraduate</h3>
          <p>
            Before the terminal I ran <strong style={{ color: 'var(--paper)', fontWeight: 500 }}>HerbNCurry</strong>,
            a solo on-site catering business — built through college to ~155 events a year at its peak.
            End-to-end ownership: clients, menus, logistics, the cooking. It taught me operations,
            reliability, and how to keep a promise to a customer. The same instincts I bring to shipping software.
          </p>
          <p className="stack"><span>B.S. Experimental Psychology · UTSA</span><span>Punjabi · Urdu · English · Spanish</span></p>
        </div>
        <div className="right">
          <div><span className="k">PEAK</span><span className="v"> · 155 ev/yr</span></div>
          <div><span className="k">ROLE</span><span className="v"> · Owner</span></div>
          <div className="badge">CLOSED 2020</div>
        </div>
      </article>

      <Foot left="— END OF FILE" ack="PSN · 01" />
    </div>
  );
}

window.About = About;
