#!/usr/bin/env bash
# Read-only. Verifies the three-touch wiring invariant for every page file:
#   1. cd-<name>.jsx exists and publishes a window.<X> global
#   2. it is listed in build.mjs ENTRIES
#   3. it has a <script> tag in index.html, and cd-app is LAST
# Exit 1 if any wiring is broken.
set -uo pipefail
cd "$(git rev-parse --show-toplevel)" || exit 2

fail=0

sources=$(ls *.jsx | sed 's/\.jsx$//' | sort)
entries=$(sed -n "/^const ENTRIES/,/^\];/p" build.mjs | grep -o "'[^']*'" | tr -d "'" | sort)
scripts=$(grep -o 'build/[A-Za-z0-9._-]*\.js' index.html | sed 's|build/||;s|\.js$||')

echo "== sources vs build.mjs ENTRIES =="
if diff <(echo "$sources") <(echo "$entries") >/dev/null; then
  echo "  ok — $(echo "$sources" | wc -l | tr -d ' ') sources, all listed in ENTRIES"
else
  echo "  MISMATCH (< source not in ENTRIES, > ENTRIES with no source):"
  diff <(echo "$sources") <(echo "$entries") | sed 's/^/    /'
  fail=1
fi

echo
echo "== ENTRIES vs index.html script tags =="
if diff <(echo "$entries") <(echo "$scripts" | sort) >/dev/null; then
  echo "  ok — every built file is loaded by index.html"
else
  echo "  MISMATCH (< in ENTRIES, > in index.html):"
  diff <(echo "$entries") <(echo "$scripts" | sort) | sed 's/^/    /'
  fail=1
fi

echo
echo "== load order =="
first=$(echo "$scripts" | head -1)
last=$(echo "$scripts" | tail -1)
echo "  first: $first    last: $last"
[ "$last" = "cd-app" ] || { echo "  BROKEN — cd-app must be the LAST script tag"; fail=1; }
echo "$scripts" | grep -n . | grep -E ':(tweaks-panel|cd-theme)$' | while read -r l; do
  echo "    ${l%%:*}. ${l#*:}"
done

echo
echo "== window.* exports (each page must publish itself) =="
# cd-app.jsx is the entry point: it CONSUMES globals and renders, it exports nothing.
export_fail=0
for f in *.jsx; do
  [ "$f" = "cd-app.jsx" ] && continue
  if ! grep -qE "window\.[A-Za-z]+ *= *[A-Za-z]+;|Object\.assign\(window" "$f"; then
    echo "  NO EXPORT  $f — nothing assigned to window.*; cd-app will throw 'X is not defined'"
    export_fail=1; fail=1
  fi
done
[ "$export_fail" -eq 0 ] && echo "  ok — every source except the cd-app entry point publishes a global"

echo
echo "== useReveal called by every page component =="
for f in cd-home cd-detail cd-projects cd-fieldnotes cd-trajectory cd-about cd-hire; do
  grep -q "useReveal(" "$f.jsx" || { echo "  MISSING  $f.jsx never calls useReveal() — data-reveal content will stay invisible"; fail=1; }
done
echo "  (checked 7 page files)"

exit "$fail"
