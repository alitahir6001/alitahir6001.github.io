// Console Dossier — Hit me up (#/hire). Contact page. Deliberately minimal: what I'm
// looking for and how to reach me. No compensation talk, no capability list — the
// capabilities live on Trajectory and the evidence lives on About.
// This is the ONLY page that states availability.

function Hire() {
  useReveal('hire');
  return (
    <div className="cd-wrap no-foot">
      <StatusBar station="OPEN CHANNEL" cur="hire" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Contact · Open channel</div>
        <h1 data-reveal>Hit me <span className="a">up.</span></h1>
        <p className="lead" data-reveal>
          I'm open to <strong>AI engineering</strong> roles — agent tooling, MCP integrations, and the
          backend systems underneath them. What I'm actually chasing is the part of that work sitting
          at the <span className="a">intersection of AI and human behavior</span>: how people come to
          trust these systems, learn from them, and change what they do because of them.
        </p>
        <p className="lead sub" data-reveal>
          That's not a career pivot, it's the same thread. I studied psychology and ran my own research
          before I wrote production software, and the two have never been separate for me — Pocket
          Professor is a learning-behavior problem wearing a backend. If your team is building
          something people have to understand, adopt, or be changed by, that's the work I want. Based
          in Richmond, Virginia.
        </p>
      </section>

      <div className="cd-band" data-reveal>
        <span className="a">§ 01</span><span className="ln"></span><span className="end">how to reach me</span>
      </div>
      <div className="cd-contact" data-reveal>
        <a href="mailto:ali@pakfro.dev"><span className="k">Email</span><span className="v">ali@pakfro.dev</span><span className="go">→</span></a>
        <a href="https://github.com/alitahir6001" target="_blank" rel="noopener noreferrer"><span className="k">GitHub</span><span className="v">github.com/alitahir6001</span><span className="go">→</span></a>
        <a href="https://linkedin.com/in/ali-t-06748432" target="_blank" rel="noopener noreferrer"><span className="k">LinkedIn</span><span className="v">linkedin.com/in/ali-t-06748432</span><span className="go">→</span></a>
        <div className="row"><span className="k">Status</span><span className="v">Open</span><span className="go" style={{ color: 'var(--accent-ink)' }}>●</span></div>
      </div>
    </div>
  );
}

window.Hire = Hire;
