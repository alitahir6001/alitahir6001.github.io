// Console Dossier — app shell. Locked to OXBLOOD. Hash routing (#/ home,
// #/pocket-professor detail). A small Tweaks panel lets you dial the air:
// spacing rhythm, ambient lounge glow, and rule weight.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "space": "lounge",
  "glow": 55,
  "frame": "stamp"
}/*EDITMODE-END*/;

// The Tweaks panel is a design tool, not for public visitors. Show it only on a
// local preview (localhost / file://) or when explicitly enabled via
// localStorage.setItem('cdTweaks', '1'). Hidden on the live site.
const SHOW_TWEAKS = (() => {
  try {
    const h = location.hostname;
    if (h === 'localhost' || h === '127.0.0.1' || h === '') return true;
    return localStorage.getItem('cdTweaks') === '1';
  } catch (e) {
    return false;
  }
})();

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(() => location.hash || '#/');

  React.useEffect(() => {
    const f = () => setRoute(location.hash || '#/');
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);

  React.useEffect(() => { window.scrollTo(0, 0); }, [route]);

  const style = { ...OXBLOOD.vars, '--glow': String(t.glow / 100) };

  let Page = Home;
  if (route.indexOf('pocket-professor') !== -1) Page = Detail;
  else if (route.indexOf('projects') !== -1) Page = Projects;
  else if (route.indexOf('field-notes') !== -1) Page = FieldNotes;
  else if (route.indexOf('trajectory') !== -1) Page = Trajectory;
  else if (route.indexOf('about') !== -1) Page = About;
  else if (route.indexOf('hire') !== -1) Page = Hire;

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="cd" data-frame={t.frame} data-space={t.space} style={style} key={route}>
        <Page theme={OXBLOOD} />
      </div>

      {SHOW_TWEAKS && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Room" />
          <TweakRadio
            label="Spacing"
            value={t.space}
            options={['relaxed', 'open', 'lounge']}
            onChange={(v) => setTweak('space', v)}
          />
          <TweakSlider
            label="Ambient glow"
            value={t.glow}
            min={0}
            max={100}
            unit="%"
            onChange={(v) => setTweak('glow', v)}
          />
          <TweakSection label="Framing" />
          <TweakRadio
            label="Rules"
            value={t.frame}
            options={['stamp', 'hairline']}
            onChange={(v) => setTweak('frame', v)}
          />
        </TweaksPanel>
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
