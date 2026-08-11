// Console Dossier — AOI / Hire (#/hire). Area of Interest. Deliberately minimal
// and honest: AI engineering roles, what I bring, where I'm still leveling up, and
// how to reach me. No compensation talk.
// This is the ONLY page that states availability — the status-bar pill is gated to it.

function Hire() {
  useReveal('hire');
  return (
    <div className="cd-wrap">
      <StatusBar station="AREA OF INTEREST" cur="hire" />

      <section className="cd-intro">
        <div className="k" data-reveal>— AOI · Open Channel</div>
        <h1 data-reveal>Open to <span className="a">AI engineering</span><br />roles.</h1>
        <p className="lead" data-reveal>
          Agent tooling, MCP integrations, and the backend systems underneath them. I do my best work on
          <strong> systems that have to stay up</strong> and teams that actually ship. Remote, or
          around the Washington, D.C. area.
        </p>
      </section>

      {/* what I bring */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">what I bring</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          Five years shipping production software — enterprise authentication at scale, then applied
          AI work that reached real adoption: an MCP server my team, the PM, and sales all use, and a
          queryable knowledge base that cut troubleshooting on an undocumented database from days to
          minutes. I build <span className="a">agent tooling that survives contact with a real team</span>,
          not demos. I'm comfortable owning a service end to end, keeping it alive under pressure, and
          I lead standups and reviews when a team needs it.
        </p>
      </div>

      {/* honest about level */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 02</span><span className="ln"></span><span className="end">where I'm leveling up</span>
      </div>
      <div className="cd-prose" data-reveal>
        <p>
          My AI work is <strong>applied</strong>, not research — agent architecture, MCP servers, model
          routing, retrieval and persistent memory. I don't train models, and I'd rather say so than
          oversell. I'm deepening the ML side deliberately (AWS Machine Learning Engineer, in progress),
          and there's system-design depth I'm still building toward staff-grade. Put me on a strong team
          with hard problems and I'll close the gap fast. That's the whole pitch.
        </p>
      </div>

      {/* contact */}
      <div className="cd-band" data-reveal>
        <span className="a">§ 03</span><span className="ln"></span><span className="end">open a channel</span>
      </div>
      <div className="cd-contact" data-reveal>
        <a href="mailto:ali@pakfro.dev"><span className="k">Email</span><span className="v">ali@pakfro.dev</span><span className="go">→</span></a>
        <a href="https://github.com/alitahir6001" target="_blank" rel="noopener"><span className="k">GitHub</span><span className="v">github.com/alitahir6001</span><span className="go">→</span></a>
        <a href="https://linkedin.com/in/ali-t-06748432" target="_blank" rel="noopener"><span className="k">LinkedIn</span><span className="v">linkedin.com/in/ali-t</span><span className="go">→</span></a>
        <a href="docs/ali-tahir-resume.pdf" target="_blank" rel="noopener"><span className="k">Résumé</span><span className="v">PDF · download</span><span className="go">→</span></a>
        <div className="row"><span className="k">Status</span><span className="v">Open · responding within ~48h</span><span className="go" style={{ color: 'var(--accent-ink)' }}>●</span></div>
      </div>

      <Foot left="— END OF CHANNEL" ack="AOI · 06" />
    </div>
  );
}

window.Hire = Hire;
