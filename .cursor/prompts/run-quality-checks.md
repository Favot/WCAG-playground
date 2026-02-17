# Run Quality Checks

Let's run the linter, tsc and tests from the @package.json.

Run the following commands in sequence:

1. `bun run lint:check` - Check code style with Biome
2. `bun run ts:check` - Type check with TypeScript
3. `bun run test:debug` - Run Jest tests

Report any errors or issues found, and suggest fixes if needed.
