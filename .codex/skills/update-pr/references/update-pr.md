# Update PR Title and Body

Let's now update the PR title and body with all the work done in this PR using
the `gh` CLI.

Analyze all the commits and changes in this branch, then:

1. Generate an appropriate PR title following conventional commits format:
   - Format: `{type}: {description}`
   - Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
   - Example: `feat: ✨ Add phone number update functionality`

2. Fill out the PR body with a comprehensive description:
   - **Summary**: What was changed, why, and who benefits
   - **Changes**: List of key changes organized by area:
     - Services affected (`services/server`, `services/ingestion-service`, etc.)
     - Packages modified (`packages/db-client`, `packages/db-queries`, etc.)
     - Database migrations (`db/migrations/`)
     - Documentation updates
   - **Technical Details**: Implementation approach, architecture decisions
   - **Testing**: How the changes were tested
   - **Notes**: Any additional context, breaking changes, or follow-up work

3. Use `gh pr edit` to update the current PR with the new title and body:

   ```bash
   gh pr edit --title "YOUR_TITLE" --body "YOUR_BODY"
   ```

## Repository Structure Reference

This is a monorepo with:

- **Services**: `services/server`, `services/ingestion-service`,
  `services/persistence-worker`, `services/alerting-worker`
- **Packages**: `packages/db-client`, `packages/db-queries`,
  `packages/db-types`, `packages/cache-client`, `packages/fcm-client`
- **Database**: `db/migrations/`, `db/seeds/`
- **Architecture**: Clean Architecture with 4 layers (Handlers →
  Repositories/Use Cases → Service Interfaces → Database Clients)
