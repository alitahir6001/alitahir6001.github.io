// Console Dossier — Field Notes (#/field-notes). Writing index. Index-only:
// list posts, mark drafts in progress. To ADD A POST, drop a new object at the
// TOP of FIELD_NOTES — newest first. status 'live' shows a "Read" link + LIVE
// badge; 'draft' shows "Draft in progress" + DRAFT badge. (No reading view yet.)

const FIELD_NOTES = [
  {
    title: 'How I scoped Pocket Professor for real users, not demo hype',
    dek: 'What I intentionally cut from the initial idea, and why scope discipline mattered more than adding "smart" features.',
    status: 'draft',
    topic: 'product',
    date: '2026.05',
    href: '#',
  },
  {
    title: 'Prompt quality vs product quality: where people get confused',
    dek: 'Why output usefulness usually depends more on UX framing and task boundaries than on raw model capability.',
    status: 'draft',
    topic: 'ai · evals',
    date: '2026.04',
    href: '#',
  },
];

function FieldNotes() {
  useReveal('field-notes');
  return (
    <div className="cd-wrap">
      <StatusBar station="TRANSMISSION LOG" cur="notes" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Field Notes · Transmission Log</div>
        <h1 data-reveal>Short, practical notes<br />from the <span className="a">build.</span></h1>
        <p className="lead" data-reveal>
          Engineering notes on prompts, evals, schema-locked outputs, and the small decisions that
          keep AI features from regressing in production. <strong>Kept honest, kept brief.</strong>
        </p>
      </section>

      <div className="cd-band" data-reveal>
        <span className="a">TRANSMISSIONS</span>
        <span className="ln"></span>
        <span className="end">{FIELD_NOTES.filter((n) => n.status === 'draft').length} drafting · {FIELD_NOTES.filter((n) => n.status === 'live').length} published</span>
      </div>

      {FIELD_NOTES.map((n, i) => {
        const live = n.status === 'live';
        const ix = String(FIELD_NOTES.length - i).padStart(2, '0');
        return (
          <article className={'cd-post' + (live ? ' live' : '')} data-reveal key={i}>
            <div className="ix">NOTE <span className="a">·</span> {ix}</div>
            <div>
              <h3>{n.title}</h3>
              <p>{n.dek}</p>
              <div className="read">{live ? <a href={n.href} style={{ color: 'inherit', textDecoration: 'none' }}>▶ Read transmission →</a> : '◷ Draft in progress'}</div>
            </div>
            <div className="right">
              <div><span className="k">TOPIC</span> · {n.topic}</div>
              <div><span className="k">FILED</span> · {n.date}</div>
              <div className={'badge ' + (live ? '' : 'draft')}>{live ? 'PUBLISHED' : 'DRAFT'}</div>
            </div>
          </article>
        );
      })}

      <Foot left="— END OF LOG" ack="LOG · 02" />
    </div>
  );
}

window.FieldNotes = FieldNotes;
