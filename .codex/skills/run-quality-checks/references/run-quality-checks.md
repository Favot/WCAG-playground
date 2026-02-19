# Run Quality Checks

Let's run the linter, type checker, and tests for the wizzme-server project.

This project uses:

- **Biome** for linting and formatting
- **TypeScript** for type checking
- **Bun** test runner for unit tests
- **Turborepo** for monorepo task orchestration

Run the following commands in sequence:

1. **Linting** - Check code style with Biome:

   ```bash
   bunx biome check .
   ```

2. **Type Checking** - Type check with TypeScript across all packages:

   ```bash
   bun run ts:check
   ```

3. **Unit Tests** - Run unit tests (excludes integration tests):

   ```bash
   bun test
   ```

   Note: This is equivalent to `bun run test:unit`

## Additional Quality Checks

### Format Code

To automatically fix linting issues:

```bash
bunx biome check --write .
```

### Run All Tests (including integration)

```bash
bun run test:all
```

Note: This runs both unit and integration tests. To run only integration tests:

```bash
bun run test:integration
```

### Run Tests by Layer

- **Layer 1 (Database Clients)**: `bun run test:packages`
- **Layer 4 (Handlers)**: `bun run test:handlers`
- **Devices**: `bun run test:devices`

### Test Watch Mode

Run tests in watch mode for faster development:

```bash
# Watch unit tests only
bun run test:watch

# Watch all tests (unit + integration)
bun run test:all:watch

# Watch specific layers
bun run test:packages:watch
bun run test:handlers:watch
bun run test:devices:watch
```

### Test Coverage

```bash
bun run test:coverage
```

### Manual/Integration Tests

For manual websocket testing:

```bash
bun run test:websocket:manual
```

## Fix Issues

Once the quality checks are complete and issues have been identified, proceed to
fix the diverse issues found:

1. **Fix formatting issues** - Run `bunx biome check --write .` to auto-fix
   formatting problems
2. **Fix linting errors** - Address code style issues, replace `any` types with
   proper types, etc.
3. **Fix type errors** - Resolve TypeScript type mismatches and ensure type
   consistency across the codebase
4. **Fix test failures** - Update tests to match current implementation, fix
   broken assertions, and ensure test data matches expected types
5. **Verify fixes** - Re-run the quality checks to ensure all issues have been
   resolved
