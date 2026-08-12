// Console Dossier — About (#/about). Personnel file: Ali's real bio narrative set in
// the dossier vocabulary. Two framed photographs (childhood in Rock Creek Park; the
// v1 Pocket Professor backend), a pull quote, the research record, and the kitchen years.
// Medium density — richer than the landing, still calm.

// §04. The page claims a researcher's instincts throughout; this section is the evidence
// for it. Sourced from the 2019 résumé — every duty here is one Ali actually performed.
const RESEARCH_RECORD = [
  {
    id: 'STUDY', of: 'own design · 2017 — 2018',
    title: '“Cross Cultural Stressors of Adolescents and Young Adults Ages 14–24 in a Bi-Cultural Upbringing”',
    body: 'My own thesis, sponsored into graduate-level (5000) research as an undergraduate, aimed at a question I grew up inside: what does it cost to be raised in two cultures at once? A 2×3 factorial design — two age bands (14–19, 20–24) against three stressor types, financial, educational, and social — surveyed 138 respondents, roughly three quarters in San Antonio and the rest in the D.C. metro. Self-report was triangulated against Bexar County and forty years of US Census demographics, plus a meta-analysis of existing work on cultural stressors and dominance-hierarchy paradigms. The dominant pressure turned out to be social — conforming on language, behavioral norms, etiquette — with financial pressure close behind, tracking the immigrant communities most respondents came from. Presented as a poster at UTSA\'s thesis conference in 2018.',
    stack: ['2×3 factorial', 'n = 138 · two metros', 'survey · census · meta-analysis'],
    badge: 'THESIS',
  },
  {
    id: 'LAB', of: 'work-study · 2016',
    title: 'Hermann Spermatogenesis Lab · UTSA',
    body: 'Lab assistant to Dr. Brian Hermann and Dr. Nadine Mutoji. Most of it was protocol execution — synthesizing fixatives and ethanol dilutions, labeling PCR containers, organizing frozen tissue for slides and assays, running the autoclave, moving biohazard and animal waste under Risk Management SOP. The piece I would still defend is the filing system: the lab\'s sample database had grown to where nobody could find anything in it, so I restructured it chronologically and by sample type, migrated every file into monthly network folders, wrote the convention down, and told the people who depended on it. Provenance is the whole game in a wet lab — a tube you cannot trace is a tube you cannot use.',
    stack: ['pcr · tissue prep', '4% pfa · ethanol dilutions', 'data migration · sop'],
    badge: 'WORK-STUDY',
  },
  {
    id: 'LARC', of: 'animal attendant · 2013 — 2014',
    title: 'Lab Animal Resources Center · UTSA',
    body: 'The first research job that paid. Husbandry and equipment sterilization across two facilities, plus the transport chain out to the START Company at the medical center — inventory tracked and signed for at both ends. Sanitation was verified rather than assumed: TSA plates and swabs sampled on a fixed monthly schedule, so contamination surfaced as data instead of as a ruined experiment months later. A controlled environment turns out to be something you maintain on a schedule, not something you declare once.',
    stack: ['husbandry · autoclave', 'chain of custody', 'environmental sampling'],
    badge: '2013 — 2014',
  },
];

function About() {
  useReveal('about');
  return (
    <div className="cd-wrap">
      <StatusBar station="PERSONNEL FILE" cur="about" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Personnel · Background</div>
        <h1 data-reveal>The researcher who<br />learned to <span className="a">ship.</span></h1>
        <p className="lead" data-reveal>
          I'm a software engineer with an experimental psychology degree, and I still work the way
          the lab taught me — <strong>state the claim, design the check, trust the evidence over
          the story.</strong> The subjects are systems now.
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
          It's for people like me: motivated autodidacts who want to change careers, standing at
          the edge of it and paralyzed by the chaos of self-education. I'm building the structured,
          confidence-building bridge to the other side — without the absurd time and cost it usually
          demands.
        </p>
      </div>

      {/* §04 — the research record: evidence for the claims made above */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 04</span><span className="ln"></span><span className="end">research record · 2013 — 2018</span>
      </div>
      {RESEARCH_RECORD.map((r) => (
        <article className="cd-chan" data-reveal key={r.id}>
          <div className="id">{r.id}<span className="of">{r.of}</span></div>
          <div>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <p className="stack">{r.stack.map((s, i) => <span key={i}>{s}</span>)}</p>
          </div>
          <div className="right">
            <div className="badge">{r.badge}</div>
          </div>
        </article>
      ))}

      {/* §05 — prior life. Was .cd-ch (a flex-column grid card), which stacked the right
          rail full-width under the body. .cd-chan is the row component this markup wants. */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 05</span><span className="ln"></span><span className="end">prior life · before the terminal</span>
      </div>
      <article className="cd-chan" data-reveal>
        <div className="id">ARCHIVE<span className="of">2015 — 2020</span></div>
        <div>
          <h3>Chef, operator, undergraduate</h3>
          <p>
            All of the above ran alongside <strong style={{ color: 'var(--paper)', fontWeight: 500 }}>HerbNCurry</strong>,
            a solo on-site catering business I built through college to ~155 events a year at its peak.
            End-to-end ownership: clients, menus, logistics, the cooking. Labs by day, kitchens by night.
            It taught me operations, reliability, and how to keep a promise to a customer — the same
            instincts I bring to shipping software.
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
