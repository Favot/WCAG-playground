#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  collect_pr_context.sh [base]

Collects PR context (git status, log, diffstat) against base (default: origin/main).
Output is written to stdout.
USAGE
}

if [[ ${1:-} == "-h" || ${1:-} == "--help" ]]; then
  usage
  exit 0
fi

base="${1:-origin/main}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "error: not inside a git repository" >&2
  exit 1
fi

echo "# PR Context"
echo
echo "## Branch"
git branch --show-current || true
echo
echo "## Status"
git status -sb
echo
echo "## Recent Commits"
git log --oneline --decorate -n 30
echo
echo "## Diffstat (${base}...HEAD)"
git diff --stat "${base}...HEAD"
