---
name: update-pr
description: Update GitHub PR titles and bodies using the gh CLI based on current branch commits and changes, following conventional commit titles and repo-specific sections. Use when asked to summarize branch changes, draft PR summaries, or run `gh pr edit` to update PR metadata.
---

# Update PR Title and Body

## Single flow (Codex should run this end-to-end)

1. Read `references/update-pr.md` and follow it exactly.
2. Collect context:

```
./scripts/collect_pr_context.sh origin/main > /tmp/pr-context.md
```

3. Use the context to draft a conventional-commit title and a structured PR body (see template below).
4. Write the body to `/tmp/pr-body.md`.
5. Apply the update:

```
./scripts/update_pr.sh "<title>" /tmp/pr-body.md
```

## Title rules

- Format: `{type}: {description}`
- Allowed types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
- Keep description concise and specific

## Body template

```
## Summary
- ...

## Changes
- Services:
- Packages:
- Database migrations:
- Documentation:

## Technical Details
- ...

## Testing
- ...

## Notes
- ...
```

## Repo structure hints

- Services: `services/server`, `services/ingestion-service`, `services/persistence-worker`, `services/alerting-worker`
- Packages: `packages/db-client`, `packages/db-queries`, `packages/db-types`, `packages/cache-client`, `packages/fcm-client`
- Database: `db/migrations/`, `db/seeds/`
- Architecture: Clean Architecture with 4 layers (Handlers → Repositories/Use Cases → Service Interfaces → Database Clients)
