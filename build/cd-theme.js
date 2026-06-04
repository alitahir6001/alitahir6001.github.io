const OXBLOOD={id:"oxblood",vars:{"--bg":"#08080a","--bg-2":"#0d0d10","--paper":"#d8d4cb","--paper-2":"#9a958a","--paper-3":"#5b574f","--paper-4":"#2c2a26","--rule":"#1a1a1e","--rule-2":"#232227","--accent":"#a32733","--accent-deep":"#5b1820","--accent-ink":"#c34050"}};function useReveal(a){React.useEffect(()=>{let r=0;const e=()=>{const c=window.innerHeight||800;document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(o=>{o.getBoundingClientRect().top<c*.92&&o.classList.add("is-in")})},t=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(e)};e();const p=setTimeout(e,60),i=setTimeout(e,320);return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t),clearTimeout(p),clearTimeout(i),cancelAnimationFrame(r)}},[a])}function GlobalStyle(){return React.createElement("style",null,`
      :root { color-scheme: dark; }
      html { scroll-behavior: smooth; }
      body { margin: 0; }
      .cd {
        position: relative;
        font-family: 'JetBrains Mono','IBM Plex Mono',ui-monospace,Menlo,monospace;
        background: var(--bg); color: var(--paper);
        min-height: 100vh; font-size: 13px; line-height: 1.62; letter-spacing: .005em;

        /* vertical rhythm \u2014 overridden per data-space */
        --sp-hero-t: 168px; --sp-hero-b: 128px;
        --sp-section: 132px;   /* between major sections */
        --sp-band: 34px;       /* below a section band, before its content */
        --sp-ch: 60px;         /* secondary-channel block padding */
        --tele-mt: 56px;
      }
      .cd[data-space="relaxed"] {
        --sp-hero-t: 112px; --sp-hero-b: 84px;
        --sp-section: 88px; --sp-band: 26px; --sp-ch: 42px; --tele-mt: 40px;
      }
      .cd[data-space="open"] {
        --sp-hero-t: 140px; --sp-hero-b: 104px;
        --sp-section: 108px; --sp-band: 30px; --sp-ch: 50px; --tele-mt: 48px;
      }
      .cd *, .cd *::before, .cd *::after { box-sizing: border-box; }

      /* dim-lounge ambient light \u2014 a single warm oxblood pool, fixed, behind all */
      .cd::before {
        content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
        background:
          radial-gradient(115% 70% at 50% -8%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 56%),
          radial-gradient(90% 60% at 88% 4%, color-mix(in srgb, var(--accent-deep) 50%, transparent), transparent 60%);
        opacity: var(--glow, .55);
      }
      .cd-wrap { position: relative; z-index: 1; width: 100%; max-width: 1000px; margin: 0 auto; padding: 0 56px; }

      /* reveal */
      [data-reveal] { opacity: 0; transform: translateY(18px); transition: opacity .9s cubic-bezier(.2,.6,.2,1), transform .9s cubic-bezier(.2,.6,.2,1); }
      [data-reveal].is-in { opacity: 1; transform: none; }
      @media (prefers-reduced-motion: reduce) {
        [data-reveal], .cd-tele.rev .cell { opacity: 1 !important; transform: none !important; transition: none !important; }
      }

      /* status bar \u2014 quieter, more leading */
      .cd-status { padding: 40px 0 18px; display: grid; grid-template-columns: auto 1fr auto auto auto; gap: 28px; align-items: center; font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; color: var(--paper-3); }
      .cd-status .station { color: var(--paper); font-size: 12.5px; letter-spacing: .2em; }
      .cd-status .station .a { color: var(--accent-ink); }
      .cd-status .pill { padding: 5px 12px; background: var(--accent-deep); color: var(--accent-ink); border: 1px solid var(--accent); letter-spacing: .16em; font-size: 10px; white-space: nowrap; }
      .cd-status .stamp { white-space: nowrap; }
      .cd-status .stamp .v { color: var(--paper); margin-left: 6px; }

      .cd-rule { height: 0; border-top: 1px solid var(--rule-2); margin: 0; }
      .cd[data-frame="stamp"] .cd-rule.thick { border-top: 4px double var(--paper-3); }

      .cd-nav { padding: 16px 0; display: flex; gap: 0; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--paper-3); border-bottom: 1px solid var(--rule-2); flex-wrap: wrap; row-gap: 8px; }
      .cd-nav .lbl { padding-right: 16px; border-right: 1px solid var(--rule-2); margin-right: 16px; }
      .cd-nav a { color: var(--paper-2); text-decoration: none; padding: 0 14px; }
      .cd-nav a.cur { color: var(--accent-ink); }
      .cd-nav a:hover { color: var(--paper); }

      /* operator block \u2014 the airy hero, now the tone for the whole page */
      .cd-operator { padding: var(--sp-hero-t) 0 var(--sp-hero-b); max-width: 72ch; }
      .cd-operator .k { color: var(--paper-3); font-size: 10.5px; letter-spacing: .26em; text-transform: uppercase; margin-bottom: 30px; }
      .cd-operator .id { font-size: 26px; font-weight: 500; letter-spacing: .04em; color: var(--paper); text-transform: uppercase; margin: 0 0 34px; line-height: 1.5; }
      .cd-operator .id .a { color: var(--accent-ink); }
      .cd-operator .stmt { font-size: 22px; line-height: 1.85; color: var(--paper-2); max-width: 50ch; margin: 0 0 34px; font-weight: 400; }
      .cd-operator .stmt strong { color: var(--paper); font-weight: 500; }
      .cd-operator .stmt .a { color: var(--accent-ink); }
      .cd-operator .open { color: var(--accent-ink); font-size: 11.5px; letter-spacing: .18em; text-transform: uppercase; }

      /* section band */
      .cd-band { margin-top: var(--sp-section); display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; padding: 0 0 4px; color: var(--paper); }
      .cd-band .a { color: var(--accent-ink); }
      .cd-band .ln { height: 1px; background: var(--rule-2); }
      .cd-band .end { color: var(--paper-3); }

      /* flagship console \u2014 let it sit in open space, no boxed framing */
      .cd-console { position: relative; margin-top: var(--sp-band); }
      .cd-console .pad { padding: 0; }
      .cd-console .chid { color: var(--paper-3); font-size: 10.5px; letter-spacing: .24em; text-transform: uppercase; margin-bottom: 22px; }
      .cd-console .chid .a { color: var(--accent-ink); }
      .cd-console h1 { margin: 0 0 20px; font-weight: 500; font-size: 46px; letter-spacing: -.015em; color: var(--paper); line-height: 1.08; }
      .cd-console .sub { margin: 0; color: var(--paper-2); font-size: 16px; max-width: 56ch; line-height: 1.8; }

      /* telemetry \u2014 open readout row, hairline separators, no boxed grid */
      .cd-tele { display: flex; flex-wrap: wrap; margin-top: var(--tele-mt); row-gap: 28px; }
      .cd-tele .cell { flex: 1 1 0; min-width: 150px; padding: 2px 36px; }
      .cd-tele .cell:first-child { padding-left: 0; }
      .cd-tele .cell + .cell { border-left: 1px solid var(--rule-2); }
      .cd-tele .cell .k { color: var(--paper-3); font-size: 9.5px; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 12px; }
      .cd-tele .cell .v { color: var(--paper); font-size: 24px; letter-spacing: -.01em; line-height: 1.1; }
      .cd-tele .cell .v.a { color: var(--accent-ink); }
      .cd-tele .cell .sub { color: var(--paper-3); font-size: 10.5px; letter-spacing: .08em; margin-top: 10px; }
      .cd-tele.rev .cell { opacity: 0; transform: translateY(12px); transition: opacity .6s ease, transform .6s ease; }
      .cd-tele.rev.is-in .cell { opacity: 1; transform: none; }
      .cd-tele.rev.is-in .cell:nth-child(1){transition-delay:.00s}
      .cd-tele.rev.is-in .cell:nth-child(2){transition-delay:.07s}
      .cd-tele.rev.is-in .cell:nth-child(3){transition-delay:.14s}
      .cd-tele.rev.is-in .cell:nth-child(4){transition-delay:.21s}
      .cd-tele.rev.is-in .cell:nth-child(5){transition-delay:.28s}
      .cd-tele.rev.is-in .cell:nth-child(6){transition-delay:.35s}

      /* CTA buttons \u2014 calmer, roomier */
      .cd-cta { display: flex; gap: 16px; margin-top: 52px; max-width: 720px; }
      .cd-cta a { flex: 1; padding: 18px 22px; text-decoration: none; font-size: 11.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--paper); border: 1px solid var(--rule-2); display: flex; justify-content: space-between; align-items: center; background: color-mix(in srgb, var(--bg-2) 70%, transparent); transition: border-color .2s, color .2s, background .2s; }
      .cd-cta a.primary { background: var(--accent-deep); border-color: var(--accent); }
      .cd-cta a:hover { border-color: var(--accent-ink); background: color-mix(in srgb, var(--accent-deep) 40%, var(--bg-2)); }
      .cd-cta a .ar { color: var(--accent-ink); }
      .cd-cta a.primary .ar { color: var(--paper); }

      /* secondary channels \u2014 open 3-column readout, generous, hairline divides */
      .cd-ch { padding: var(--sp-ch) 0; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 150px 1fr 190px; gap: 40px; align-items: start; }
      .cd-ch:first-of-type { border-top: 1px solid var(--rule); }
      .cd-ch .id { color: var(--accent-ink); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; }
      .cd-ch .id .of { display: block; color: var(--paper-3); font-size: 10px; margin-top: 9px; letter-spacing: .1em; }
      .cd-ch h3 { margin: 0 0 14px; color: var(--paper); font-weight: 500; font-size: 22px; letter-spacing: .005em; }
      .cd-ch p { margin: 0 0 14px; color: var(--paper-2); font-size: 13.5px; max-width: 56ch; line-height: 1.75; }
      .cd-ch .stack { color: var(--paper-3); font-size: 11px; }
      .cd-ch .stack span + span::before { content: ' \xB7 '; margin: 0 2px; }
      .cd-ch .right { text-align: right; font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--paper-2); line-height: 2.2; }
      .cd-ch .right .k { color: var(--paper-3); }
      .cd-ch .right .v { color: var(--paper); }
      .cd-ch .right .badge { display: inline-block; padding: 4px 12px; border: 1px solid var(--rule-2); margin-top: 14px; color: var(--paper-2); }
      .cd-ch .right .badge.live { background: var(--accent); border-color: var(--accent); color: var(--paper); }
      .cd-ch .right .badge.warn { color: var(--accent-ink); border-color: var(--accent-ink); }

      /* foot */
      .cd-foot { margin-top: var(--sp-section); padding: 26px 0 96px; border-top: 1px solid var(--rule-2); display: grid; grid-template-columns: auto 1fr auto; gap: 24px; align-items: baseline; color: var(--paper-3); font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; }
      .cd[data-frame="stamp"] .cd-foot { border-top: 4px double var(--paper-3); }
      .cd-foot .left { color: var(--accent-ink); }
      .cd-foot .links { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
      .cd-foot .links a { color: var(--paper-2); text-decoration: none; }
      .cd-foot .links a:hover { color: var(--accent-ink); }
      .cd-foot .right { color: var(--paper); }

      /* ---- detail-page extras ---- */
      .cd-back { padding-top: 44px; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
      .cd-back a { color: var(--paper-2); text-decoration: none; }
      .cd-back a:hover { color: var(--accent-ink); }
      .cd-back .a { color: var(--accent-ink); }

      .cd-shot { margin-top: var(--sp-band); aspect-ratio: 16 / 8.2; border: 1px solid var(--rule-2); background-color: var(--bg-2); background-image: repeating-linear-gradient(45deg, transparent 0 11px, rgba(255,255,255,.018) 11px 22px); display: flex; align-items: flex-end; padding: 18px; }
      .cd-shot .cap { color: var(--paper-3); font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; }
      .cd-shot .cap .a { color: var(--accent-ink); }

      .cd-prose { max-width: 60ch; margin-top: var(--sp-band); }
      .cd-prose p { color: var(--paper-2); font-size: 16px; line-height: 1.9; margin: 0 0 24px; }
      .cd-prose p strong { color: var(--paper); font-weight: 500; }
      .cd-prose .a { color: var(--accent-ink); }

      /* steps \u2014 open rows, hairline divides, no filled grid */
      .cd-steps { margin-top: var(--sp-band); }
      .cd-steps .step { padding: 30px 0; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 60px 1fr; gap: 28px; align-items: baseline; }
      .cd-steps .step:first-child { border-top: 1px solid var(--rule); }
      .cd-steps .step .n { color: var(--accent-ink); font-size: 24px; font-weight: 500; line-height: 1; }
      .cd-steps .step h4 { margin: 0 0 10px; color: var(--paper); font-weight: 500; font-size: 17px; }
      .cd-steps .step p { margin: 0; color: var(--paper-2); font-size: 13.5px; line-height: 1.75; max-width: 60ch; }

      /* params \u2014 open two-column list, hairline rows */
      .cd-params { margin-top: var(--sp-band); display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 56px; }
      .cd-params .row { padding: 18px 0; border-bottom: 1px solid var(--rule); display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
      .cd-params .row .k { color: var(--paper-3); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .cd-params .row .v { color: var(--paper); font-size: 13px; text-align: right; }
      .cd-params .row .v.a { color: var(--accent-ink); }

      .cd-log { margin-top: var(--sp-band); }
      .cd-log .entry { display: grid; grid-template-columns: 170px 1fr; gap: 32px; padding: 26px 0; border-bottom: 1px solid var(--rule); }
      .cd-log .entry:first-child { border-top: 1px solid var(--rule); }
      .cd-log .entry .date { color: var(--accent-ink); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .cd-log .entry .date .rev { display: block; color: var(--paper-3); margin-top: 7px; }
      .cd-log .entry p { margin: 0; color: var(--paper-2); font-size: 14px; line-height: 1.75; max-width: 60ch; }
      .cd-log .entry p strong { color: var(--paper); font-weight: 500; }

      /* ---- page intro (shared header for inner pages) ---- */
      .cd-intro { padding: var(--sp-hero-t) 0 var(--sp-hero-b); max-width: 74ch; }
      .cd-intro .k { color: var(--paper-3); font-size: 10.5px; letter-spacing: .26em; text-transform: uppercase; margin-bottom: 26px; }
      .cd-intro h1 { margin: 0 0 28px; font-weight: 500; font-size: 44px; letter-spacing: -.015em; color: var(--paper); line-height: 1.1; }
      .cd-intro h1 .a { color: var(--accent-ink); }
      .cd-intro .lead { margin: 0; font-size: 19px; line-height: 1.85; color: var(--paper-2); max-width: 52ch; }
      .cd-intro .lead strong { color: var(--paper); font-weight: 500; }
      .cd-intro .lead .a { color: var(--accent-ink); }

      /* ---- framed figure (real photography in the dossier) ---- */
      .cd-figure { margin: var(--sp-band) 0 0; }
      .cd-figure .frame { border: 1px solid var(--paper-4); padding: 10px; background: var(--bg-2); position: relative; }
      .cd-figure .frame::before { content: attr(data-tag); position: absolute; top: -1px; right: 14px; transform: translateY(-50%); background: var(--bg); color: var(--paper-3); font-size: 9.5px; letter-spacing: .2em; padding: 2px 9px; }
      .cd-figure img { display: block; width: 100%; height: auto; filter: saturate(.86) contrast(1.02) brightness(.92); }
      .cd-figure .cap { margin-top: 12px; color: var(--paper-3); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; }
      .cd-figure .cap .a { color: var(--accent-ink); }
      .cd-figure.right { float: right; width: 42%; margin-left: 40px; }

      /* ---- pull quote ---- */
      .cd-quote { margin: 44px 0; padding: 0 0 0 28px; border-left: 2px solid var(--accent); max-width: 56ch; }
      .cd-quote p { margin: 0; color: var(--paper); font-size: 19px; line-height: 1.7; font-style: italic; letter-spacing: .005em; }

      /* ---- career timeline (trajectory) ---- */
      .cd-role { padding: var(--sp-ch) 0; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 180px 1fr; gap: 40px; align-items: start; }
      .cd-role:first-of-type { border-top: 1px solid var(--rule); }
      .cd-role .when { color: var(--accent-ink); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .cd-role .when .co { display: block; color: var(--paper); font-size: 13px; margin-top: 10px; letter-spacing: .04em; text-transform: none; }
      .cd-role .when .meta { display: block; color: var(--paper-3); font-size: 10px; margin-top: 8px; letter-spacing: .12em; }
      .cd-role h3 { margin: 0 0 10px; color: var(--paper); font-weight: 500; font-size: 18px; }
      .cd-role .role-sum { margin: 0 0 16px; color: var(--paper-2); font-size: 13.5px; line-height: 1.7; max-width: 62ch; }
      .cd-role ul { margin: 0; padding: 0; list-style: none; }
      .cd-role li { position: relative; padding-left: 20px; margin-bottom: 11px; color: var(--paper-2); font-size: 13px; line-height: 1.7; max-width: 62ch; }
      .cd-role li::before { content: '\xB7'; position: absolute; left: 4px; color: var(--accent-ink); }
      .cd-role li strong { color: var(--paper); font-weight: 500; }
      .cd-role li .m { color: var(--accent-ink); }

      /* ---- skill groups ---- */
      .cd-skills { margin-top: var(--sp-band); display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 56px; row-gap: 0; }
      .cd-skills .grp { padding: 22px 0; border-bottom: 1px solid var(--rule); }
      .cd-skills .grp .k { color: var(--accent-ink); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 10px; }
      .cd-skills .grp p { margin: 0; color: var(--paper-2); font-size: 12.5px; line-height: 1.7; }

      /* ---- field notes list ---- */
      .cd-post { padding: var(--sp-ch) 0; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 110px 1fr 150px; gap: 40px; align-items: start; }
      .cd-post:first-of-type { border-top: 1px solid var(--rule); }
      .cd-post .ix { color: var(--paper-3); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; }
      .cd-post .ix .a { color: var(--accent-ink); }
      .cd-post h3 { margin: 0 0 12px; color: var(--paper); font-weight: 500; font-size: 21px; line-height: 1.3; letter-spacing: .005em; }
      .cd-post p { margin: 0 0 14px; color: var(--paper-2); font-size: 13.5px; line-height: 1.75; max-width: 58ch; }
      .cd-post .read { color: var(--paper-3); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .cd-post.live .read { color: var(--accent-ink); }
      .cd-post .right { text-align: right; font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--paper-2); line-height: 2; }
      .cd-post .right .k { color: var(--paper-3); }
      .cd-post .right .badge { display: inline-block; padding: 4px 12px; border: 1px solid var(--rule-2); margin-top: 12px; color: var(--paper-2); }
      .cd-post .right .badge.draft { color: var(--accent-ink); border-color: var(--accent-ink); }

      /* ---- contact rows (hire) ---- */
      .cd-contact { margin-top: var(--sp-band); }
      .cd-contact a, .cd-contact .row { display: grid; grid-template-columns: 200px 1fr auto; gap: 24px; align-items: baseline; padding: 22px 0; border-bottom: 1px solid var(--rule); text-decoration: none; color: var(--paper); }
      .cd-contact .row:first-child, .cd-contact a:first-child { border-top: 1px solid var(--rule); }
      .cd-contact .k { color: var(--paper-3); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; }
      .cd-contact .v { color: var(--paper); font-size: 15px; letter-spacing: .01em; }
      .cd-contact a:hover .v { color: var(--accent-ink); }
      .cd-contact .go { color: var(--accent-ink); font-size: 12px; }

      @media (max-width: 820px) {
        .cd-wrap { padding: 0 28px; }
        .cd-status { grid-template-columns: 1fr 1fr; gap: 12px; }
        .cd-tele .cell { flex: 1 1 45%; min-width: 0; padding: 2px 0; }
        .cd-tele .cell + .cell { border-left: 0; }
        .cd-ch { grid-template-columns: 1fr; gap: 16px; }
        .cd-ch .right { text-align: left; }
        .cd-console h1 { font-size: 34px; }
        .cd-operator { padding: 88px 0 64px; }
        .cd-operator .stmt { font-size: 19px; }
        .cd-cta { flex-direction: column; }
        .cd-params { grid-template-columns: 1fr; column-gap: 0; }
        .cd-steps .step, .cd-log .entry { grid-template-columns: 1fr; gap: 12px; }
        .cd-intro h1 { font-size: 32px; }
        .cd-intro .lead { font-size: 17px; }
        .cd-role, .cd-post { grid-template-columns: 1fr; gap: 14px; }
        .cd-post .right { text-align: left; }
        .cd-skills { grid-template-columns: 1fr; column-gap: 0; }
        .cd-figure.right { float: none; width: 100%; margin-left: 0; }
        .cd-contact a, .cd-contact .row { grid-template-columns: 1fr; gap: 6px; }
      }
    `)}const CD_NAV=[{key:"index",label:"Index",href:"#/"},{key:"projects",label:"Projects",href:"#/projects"},{key:"notes",label:"Field Notes",href:"#/field-notes"},{key:"trajectory",label:"Trajectory",href:"#/trajectory"},{key:"about",label:"About",href:"#/about"},{key:"hire",label:"AOI / Hire",href:"#/hire"}];function StatusBar({station:a,cur:r}){return React.createElement(React.Fragment,null,React.createElement("div",{className:"cd-status"},React.createElement("div",{className:"station"},a," ",React.createElement("span",{className:"a"},"/")," ALI TAHIR"),React.createElement("div",null),React.createElement("div",{className:"pill"},"OPEN \xB7 MID-LEVEL SWE"),React.createElement("div",{className:"stamp"},"UTC",React.createElement("span",{className:"v"},"14:27:08")),React.createElement("div",{className:"stamp"},"DATE",React.createElement("span",{className:"v"},"2026.05.29"))),React.createElement("div",{className:"cd-rule thick"}),React.createElement("nav",{className:"cd-nav"},React.createElement("span",{className:"lbl"},"CHANNELS"),CD_NAV.map(e=>React.createElement("a",{key:e.key,className:r===e.key?"cur":"",href:e.href},e.label))))}function Foot({left:a,ack:r}){return React.createElement("div",{className:"cd-foot"},React.createElement("div",{className:"left"},a),React.createElement("div",{className:"links"},React.createElement("a",{href:"mailto:ali@pakfro.dev"},"ali@pakfro.dev"),React.createElement("a",{href:"#/"},"github"),React.createElement("a",{href:"#/"},"linkedin"),React.createElement("a",{href:"#/"},"/rss")),React.createElement("div",{className:"right"},r))}Object.assign(window,{OXBLOOD,useReveal,GlobalStyle,StatusBar,Foot});
