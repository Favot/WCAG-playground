#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  run_quality_checks.sh

Runs linting (Biome), type checking (TypeScript), and unit tests (Bun) in order.
USAGE
}

if [[ ${1:-} == "-h" || ${1:-} == "--help" ]]; then
  usage
  exit 0
fi

if ! command -v bun >/dev/null 2>&1; then
  echo "error: bun not found in PATH" >&2
  exit 1
fi

if ! command -v bunx >/dev/null 2>&1; then
  echo "error: bunx not found in PATH" >&2
  exit 1
fi

printf "\n==> Linting (Biome)\n"
bun run lint:check

printf "\n==> Type Checking (TypeScript)\n"
bun run ts:check

printf "\n==> Unit Tests (Bun)\n"
bun test
