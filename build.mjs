// Build step for Console Dossier.
//
// Each cd-*.jsx / tweaks-panel.jsx source is transpiled (JSX -> React.createElement)
// and minified into build/<name>.js. We deliberately DON'T bundle: the files share
// a global (window.*) namespace and index.html loads them in a load-bearing order
// (tweaks-panel -> cd-theme -> pages -> cd-app last). Bundling would break that.
//
//   npm run build     one-shot transpile + minify
//   npm run watch     rebuild on save while you edit content
//
// After editing any .jsx, run the build, then refresh the browser.

import { build, context } from 'esbuild';

// Order here is cosmetic (each file is built independently); the load order that
// actually matters lives in index.html.
const ENTRIES = [
  'tweaks-panel',
  'cd-theme',
  'cd-home',
  'cd-detail',
  'cd-projects',
  'cd-fieldnotes',
  'cd-trajectory',
  'cd-about',
  'cd-hire',
  'cd-app',
];

const common = {
  bundle: false,
  loader: { '.jsx': 'jsx' },
  minify: true,
  target: 'es2018',
  logLevel: 'info',
};

const configs = ENTRIES.map((name) => ({
  ...common,
  entryPoints: [`${name}.jsx`],
  outfile: `build/${name}.js`,
}));

const watch = process.argv.includes('--watch');

if (watch) {
  const ctxs = await Promise.all(configs.map((c) => context(c)));
  await Promise.all(ctxs.map((c) => c.watch()));
  console.log('watching cd-*.jsx — edit + save to rebuild (ctrl-c to stop)');
} else {
  await Promise.all(configs.map((c) => build(c)));
  console.log(`built ${ENTRIES.length} files -> build/`);
}
