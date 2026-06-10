// Console Dossier — Field Notes (#/field-notes). Writing index + in-app reader.
// To ADD A POST, drop an object at the TOP of FIELD_NOTES (newest first):
//   - status 'live' needs a `slug` + `body` (array of paragraph strings); it renders
//     at #/field-notes/<slug> and shows a "Read" link + PUBLISHED badge.
//   - status 'draft' just lists with "Draft in progress" + DRAFT badge (no body needed).
// The list blurb is auto-derived from the first sentences of body[0] — no `dek` needed.
// The reader is FieldNotePost; the list is FieldNotesList; FieldNotes routes between them.

const FIELD_NOTES = [
  {
    slug: 'old-is-gold',
    title: 'Old is Gold',
    status: 'live',
    topic: 'tech · nostalgia',
    date: '2026.06',
    body: [
      `Anybody remember darkroom? the text editor that, in my opinion, was ahead of its time when it comes to focused writing. No toolbars, no ruler, no buttons, no distractions. Just me and the text. I use brown noise to help me focus when i need to deep focus. Combining these two feels like i'm traveling through the void. It's nice.`,
      `Actually I use a lot of old programs and devices. I still use Winamp 2.95x, in my opinion the GOAT'd mp3 player, to play my music. I never bothered with streaming music services, even as far back as last.fm, Pandora, etc. Hell, I still use my Zune as my daily music driver. Literally, I (f)aux with it in my car for music. There's a beautiful simplicity in the classic plug-and-play. I never needed an internet connection, let alone a paid subscription to listen to music growing up so I ain't about to start now.`,
      `The latest iteration of how we consume media isn't necessarily the best version of it. For me, peak music listening experience was a rechargeable device i can load thousands of songs into and just...go. My homie back in the day had the Zen by Creative. That sucker could hold * 50,000 * songs, which is still kind of insane to me. The UI was trash though (that touch scroll column was hell to navigate).`,
      `Using my certified unc status, I can recall a time in high school when I would listen on CD players. The Sony Walkman was a status symbol. I have to admit, the fact it could still play Mudvayne's LD 50 while in my backpack was something I thought was hi-tech. Older CD players would skip if i so much as breathed on them.`,
      `Being a broke ass teen, getting batteries for it was hard and i remember I would burn through whatever ones we had in the house, irritating my parents because i would use the batteries from the TV remote if i couldn't find any. Man that takes me back. I remember I had this AIWA CD player that had a "rechargeable battery" feature that just BLEW me away. I was like "finally, no more battery scrounging!" and I asked my dad to buy me this 4-pack of Energizer rechargeable batteries which I would rotate when one pair ran out. That feeling of "endless music listening" that I take for granted now seemed like such a divine blessing back then. Crazy to think back on all this.`,
      `I remember getting into ROMs and Emulation around middle school. My cousin and I lived in Alexandria, VA - next to one of the locations of Northern VA Community College. They had an open computer lab that we would walk to in the summer, and I would use it to download ROMs onto floppy disks. A whopping 1.44 MB of disk space! I was limited to which games I could download and play because of that...until i discovered the magic of file splitters. This wizardry allowed me to download ANY game ROM I wanted to, so I started carrying around a pack of floppy disks. I think I had a pack of 6 at first, freshly bought from Circuit City in that little plastic container they came in. And now I was able to play all the NES, SNES, SEGA and Gameboy games to my heart's content. My cousin and I would switch off using the computer to play our respective games on ZSNES. I don't even remember how I heard about it.`,
      `There's so many other examples. Our Family's first computer was this HP Pavilion with a whopping 1GB of storage and 256MB of RAM. That's where I learned the magic of Shareware, and the Run command in Windows. I used DOS commands and learned about ping (which I would use to circumvent the webpage blockers on school computers. That's how I learned and memorized the structure to "http://www....." webpages.`,
      `There's a certain magic feeling that I had when I would use this technology. Its rarity and limited access made it feel special. The ubiquity of technology today makes me yearn for that feeling sometimes. Being a dev is like re-living that magic feeling as an adult. It's that "aha!" moment that I felt as a kid using those computers, and apps, and tools. It's that utter joy I felt when I figured out how to play all those old games.`,
      `..But I think for all our advancements in ease of use, access to, and general availability of computers everywhere, there's a certain romanticism that I think has been lost. Same with music. The limitation of those technologies actually fostered a deeper appreciation for the material in a way. Having to work for it made me appreciate it more.`,
      `If heaven does exist, I hope it lets me relive those feelings.`,
    ],
  },
];

// Pull a post slug out of the hash: #/field-notes/<slug>
function fieldNoteSlug() {
  const m = (location.hash || '').match(/field-notes\/([^/?#]+)/);
  return m ? m[1] : null;
}

// List blurb = first ~2 sentences of the opening paragraph + trailing ellipsis.
// (Drafts with no body can still set `dek` as a fallback one-liner.)
function excerpt(post) {
  const text = ((post.body && post.body[0]) || post.dek || '').trim();
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const s = (sentences.slice(0, 2).join('').trim() || text);
  return s.replace(/[.!?…\s]+$/, '') + '…';
}

// Reading view for a single post.
function FieldNotePost({ post }) {
  useReveal('post-' + post.slug);
  return (
    <div className="cd-wrap">
      <StatusBar station="TRANSMISSION LOG" cur="notes" />

      <div className="cd-back" data-reveal>
        <a href="#/field-notes"><span className="a">←</span> FIELD NOTES</a> &nbsp;/&nbsp; {post.title.toUpperCase()}
      </div>

      <section className="cd-intro" style={{ paddingBottom: 32 }}>
        <div className="k" data-reveal>— Transmission · {post.topic} · filed {post.date}</div>
        <h1 data-reveal>{post.title}<span className="a">.</span></h1>
      </section>

      <div className="cd-prose cd-article" data-reveal>
        {post.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <Foot left="— END OF TRANSMISSION" ack="LOG · 02" />
    </div>
  );
}

// The writing index (list of posts).
function FieldNotesList() {
  useReveal('field-notes');
  return (
    <div className="cd-wrap">
      <StatusBar station="TRANSMISSION LOG" cur="notes" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Field Notes · Transmission Log</div>
        <h1 data-reveal>Notes from the build —<br />and the <span className="a">tech that made me.</span></h1>
        <p className="lead" data-reveal>
          Engineering lessons, AI, and the occasional love letter to the old software and hardware
          that made me a builder. <strong>Kept honest, kept brief.</strong>
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
              <p>{excerpt(n)}</p>
              <div className="read">{live ? <a href={'#/field-notes/' + n.slug} style={{ color: 'inherit', textDecoration: 'none' }}>▶ Read transmission →</a> : '◷ Draft in progress'}</div>
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

// Router: a post slug in the hash → reader; otherwise the list.
function FieldNotes() {
  const slug = fieldNoteSlug();
  const post = slug ? FIELD_NOTES.find((n) => n.slug === slug && n.status === 'live') : null;
  return post ? <FieldNotePost post={post} /> : <FieldNotesList />;
}

window.FieldNotes = FieldNotes;
