// Console Dossier — About (#/about). Personnel file: Ali's real bio narrative set in
// the dossier vocabulary. Two framed photographs (childhood in Rock Creek Park; the
// v1 Pocket Professor backend), a pull quote, and a pointer to the full record.
// The research record lives on Trajectory; §04 names it here so the "researcher" claim
// is evidenced on this page (rules.md: back a claim on the page that makes it).

function About() {
  useReveal('about');
  return (
    <div className="cd-wrap">
      <StatusBar station="PERSONNEL FILE" cur="about" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Personnel · Background</div>
        <h1 data-reveal>The researcher who<br />learned to <span className="a">ship.</span></h1>
        <p className="lead" data-reveal>
          I'm a software engineer with an experimental psychology degree. The lab taught me to
          <strong> state the claim, design the check, and trust the evidence over the story.</strong> I
          still work that way, and the question I keep coming back to is the one AI makes urgent:{' '}
          <span className="a">how people come to trust, learn from, and be changed by the systems
          they use.</span>
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
          repetition, desirable difficulty.</span> Those are the mechanics I'm designing Pocket
          Professor toward, instead of handing you a list of topics. Today it handles pacing, one
          session a day; recall checks and spaced review are what it's designed to add.
        </p>
        <p>
          It's for people like me: motivated autodidacts who want to change careers, standing at
          the edge of it and paralyzed by the chaos of self-education. I'm building the structured,
          confidence-building bridge to the other side — without the absurd time and cost it usually
          demands.
        </p>
      </div>

      {/* §04 — the record behind the claims above; full detail lives on Trajectory */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">the record</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          The research behind all this: an undergraduate thesis on cross-cultural stressors (a 2×3
          factorial design, n = 138, presented at UTSA in 2018), work-study in the Hermann
          Spermatogenesis Lab (2016), and animal-facility work at UTSA's Lab Animal Resources Center
          (2013–2014). From 2015 to 2020 I also ran <strong>HerbNCurry</strong>, a solo catering
          business. I speak English and Urdu/Hindi natively, understand Punjabi, and speak
          conversational Spanish.
        </p>
        <div className="cd-cta one">
          <a href="#/trajectory"><span>▶  Trajectory</span><span className="ar">→</span></a>
        </div>
      </div>

      <Foot left="— END OF FILE" ack="PSN · 01" />
    </div>
  );
}

window.About = About;
