#!/usr/bin/env bash
# Read-only. Flags any cd-*.jsx / tweaks-panel.jsx that is NEWER than its build/*.js,
# and any .jsx staged/modified in git without its matching build/*.js also modified.
# Exit 1 if anything is stale — safe to use as a pre-commit sanity check.
set -uo pipefail
cd "$(git rev-parse --show-toplevel)" || exit 2

stale=0

echo "== mtime check (source newer than build output) =="
for f in *.jsx; do
  out="build/${f%.jsx}.js"
  if [ ! -f "$out" ]; then
    echo "  MISSING  $out  (source $f has never been built)"
    stale=1
  elif [ "$f" -nt "$out" ]; then
    echo "  STALE    $out  (older than $f)"
    stale=1
  fi
done
[ "$stale" -eq 0 ] && echo "  ok — every .jsx has build output at least as new as itself"

echo
echo "== git check (modified source without modified build output) =="
git_stale=0
while read -r _ path; do
  case "$path" in
    *.jsx)
      out="build/$(basename "${path%.jsx}").js"
      if ! git status --porcelain -- "$out" | grep -q .; then
        echo "  UNBUILT  $path modified but $out is not — run: npm run build"
        git_stale=1
      fi
      ;;
  esac
done < <(git status --porcelain -- '*.jsx')
[ "$git_stale" -eq 0 ] && echo "  ok — no modified .jsx is missing its rebuilt output"

[ "$stale" -eq 1 ] || [ "$git_stale" -eq 1 ] && exit 1
exit 0
