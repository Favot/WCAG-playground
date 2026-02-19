---
name: run-quality-checks
description: Run linting, TypeScript type checking, and tests for the wizzme-server monorepo using Bun, Biome, and Turborepo. Use when asked to run quality checks, CI-like local verification, or to execute lint/typecheck/test sequences and interpret failures.
---

# Run Quality Checks

## Single flow (Codex should run this end-to-end)

1. Read `references/run-quality-checks.md` and follow it exactly.
2. Run the standard sequence with the helper script:

```
./scripts/run_quality_checks.sh
```

3. If any step fails, capture the error output, summarize the failure, and propose fixes.
4. After fixes, re-run the script to verify.

## Optional actions

- Format: `bun run lint:check`
- All tests: `bun run test:all`
- Integration only: `bun run test:integration`
- Coverage: `bun run test:coverage`

## Notes

- Prefer the helper script for the main flow.
- Keep output concise; include only the failing command output and a brief summary.
