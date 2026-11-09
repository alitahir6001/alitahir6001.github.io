// Console Dossier — Projects (#/projects). Channel catalog: Pocket Professor, the agent
// tooling, side builds, and hardware work. Data-driven — add a channel by adding an entry
// to PROJECT_CHANNELS. art: null = placeholder; swap in a URL string to show a screenshot.
// href = internal route (▶ Open file); repo = public GitHub URL (▶ Source).

const PROJECT_CHANNELS = [
  {
    id: 'CH-01', of: '· learning platform · pre-deploy', title: 'Pocket Professor',
    body: 'An adaptive learning platform for motivated autodidacts who want to change careers — a problem informed by 15 years of my own service-industry work. V2 runs end to end locally: onboarding and a daily professor session, with every agent response schema-validated before a learner sees it. A deterministic adaptation engine with an audit trail is built but not yet wired in, and v2 is not deployed yet.',
    stack: ['node · fastify · ts', 'react · vite · tailwind', 'postgres · node:test'],
    badge: 'PRE-DEPLOY', badgeCls: 'warn',
    href: '#/pocket-professor',
    // the v2 repo is incomplete — point at the playground, which is public and runnable
    repo: 'https://github.com/alitahir6001/pock_prof_playground',
    art: null,
  },
  {
    id: 'CH-02', of: '· tool · audio', title: 'Gain of Thrones',
    body: 'Remasters music you already own, with an AI agent as the engineer and you as the ears. Demucs splits each track into drums, bass, vocals and "other"; each stem gets small, bounded EQ and level moves, the split residual goes back in, and a custom look-ahead true-peak limiter finishes it without clipping. Every render is measured before you hear it, and every comparison is a blind, level-matched A/B, so a version can\'t win by being louder. v0.1: one EP remastered so far, tested on macOS.',
    stack: ['python 3.11 · uv', 'demucs · pytorch', 'pedalboard · pyloudnorm · ffmpeg'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/gain-of-thrones',
    art: null,
  },
  {
    id: 'CH-03', of: '· tool · agent harness', title: 'The Advisor',
    body: 'A Claude Code plugin that routes architectural and hard-to-reverse decisions to a stronger model for a second opinion, while a cheap workhorse model carries the everyday load. Model-agnostic: Claude, Gemini, GPT, or a local model, over a vendor CLI, an API key, or a local endpoint. Python standard library only, no install step, and every consult is logged verbatim as JSON so the escalation is auditable.',
    stack: ['python · mcp · stdio json-rpc', 'claude code plugin', 'anthropic · gemini · openai'],
    badge: 'SHIPPED',
    repo: 'https://github.com/alitahir6001/the-advisor',
    art: null,
  },
  {
    id: 'CH-04', of: '· method · agent memory', title: 'Agent Memory & Session State',
    body: 'A working notebook for making coding agents behave, and the memory protocol that came out of it: durable knowledge in a generated skill library, live state in a small set of session files, per-turn rules in one place — so an agent resumes multi-session work without re-deriving context. Behavior claims are only accepted here after a fresh session proves them in the tool-call stream, tested against a small model on purpose. It also ships a Stop hook that nudges the agent to check the real effect of its work before it reports done.',
    stack: ['claude code skills · hooks', 'session-state protocol', 'stream-json verification'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/harness',
    art: null,
  },
  {
    id: 'CH-05', of: '· tool · team knowledge', title: 'Worklore',
    body: 'Drop meeting transcripts in, then ask across all of them: what was decided, who committed to what, why a system works the way it does. Every answer cites the exact speaker turn it came from, and meeting knowledge links to objects in a database-audit knowledge base. A coding agent is the interface: no server, no API key, no UI. A v1 proof of concept built on synthetic transcripts; the real-data trial hasn\'t run yet.',
    stack: ['python · sqlite fts5', 'python-docx · lore cli', 'claude code · codex skills'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/worklore',
    art: null,
  },
  {
    id: 'CH-06', of: '· tool · observability', title: 'Code Visualizer',
    body: 'Watch requests move through a system in real time, to understand its architecture. Fed by OpenTelemetry: a graph view where each request animates along the edges it travelled (red when it failed, slower and larger when it took longer), and a waterfall view per trace. Attaches to a Node backend with no code changes. Local only; nothing is persisted, sampled, or alerted on.',
    stack: ['typescript · react · vite', 'opentelemetry · otlp/http', 'xyflow · dagre'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/visualizer',
    art: null,
  },
  {
    id: 'CH-07', of: '· hardware · revival', title: 'ZuneHD Artist Metadata Updater',
    body: 'Built to restore artist biographies and background images on ZuneHD hardware after Microsoft retired the Zune.net backend. Resolves artists against MusicBrainz, writes MBIDs into ID3 tags, and delivers the data over the device\'s encrypted USB MTP stack (PPP/TCP/HTTP tunnelled over MTP). The tagging step works on macOS; the on-device path is not yet verified on real hardware.',
    stack: ['.net 8 · c# · p/invoke', 'macos iokit · win winusb · linux libusb', 'musicbrainz'],
    badge: 'ACTIVE',
    repo: 'https://github.com/alitahir6001/zune-artist-updater',
    art: null,
  },
  {
    id: 'CH-08', of: '· archive · tinkering', title: 'Hardware & IoT',
    body: 'Arduino nodebots, a Raspberry Pi gaming console, and Flipper Zero hardware security.',
    stack: ['arduino · johnny-five', 'raspberry pi', 'flipper zero'],
    badge: 'ARCHIVE',
    art: null,
  },
];

function Projects() {
  useReveal('projects');
  return (
    <div className="cd-wrap">
      <StatusBar station="CHANNEL DIRECTORY" cur="projects" />

      <section className="cd-intro">
        <div className="k" data-reveal>— Projects · Channel Directory</div>
        <h1 data-reveal>Everything currently<br />on the <span className="a">air.</span></h1>
        <p className="lead" data-reveal>
          A learning platform under active build, the agent tooling I use every day, and the
          side builds and hardware work that keep the curiosity and the fundamentals sharp.
        </p>
      </section>

      <div className="cd-band" data-reveal>
        <span className="a">ALL CHANNELS</span>
        <span className="ln"></span>
        <span className="end">{PROJECT_CHANNELS.length} routed</span>
      </div>

      <div className="cd-ch-grid" data-reveal>
        {PROJECT_CHANNELS.map((c) => (
          <article className="cd-ch" key={c.id}>
            <div className="cd-ch-art">
              {c.art ? <img src={c.art} alt={c.title} /> : <span>—</span>}
            </div>
            <div className="cd-ch-body">
              <div className="id">{c.id}<span className="of">{c.of}</span></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <p className="stack">{c.stack.map((s, i) => <span key={i}>{s}</span>)}</p>
              <div className="ch-foot">
                <div className={'badge ' + (c.badgeCls || '')}>{c.badge}</div>
                {c.href ? <a className="read" href={c.href}>▶ Open file →</a> : null}
                {c.repo ? <a className="read" href={c.repo} target="_blank" rel="noopener noreferrer">▶ Source →</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Foot left="— END OF DIRECTORY" ack="DIR · 05" />
    </div>
  );
}

window.Projects = Projects;
