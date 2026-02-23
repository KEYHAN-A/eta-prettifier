# Contributing

Thanks for considering a contribution.

## Development Setup

```bash
npm install
npm run build
npm run test
npm run lint
```

## Repository Layout

- `packages/prettier-plugin-eta-ejs` - Prettier plugin
- `packages/vscode-eta-ejs-formatter` - VS Code extension
- `website` - GitHub Pages site and subscription UI
- `docs` - release and API integration docs

## Contribution Workflow

1. Create a branch from `main`.
2. Make focused changes with tests where applicable.
3. Run validation locally:
   ```bash
   npm run build
   npm run test
   npm run lint
   npm run licenses:check
   ```
4. Open a pull request with a clear summary and test plan.

## Coding Guidelines

- Prefer small, composable functions.
- Keep formatter behavior deterministic.
- For template formatting changes, add fixture coverage.
- For website API integration, keep endpoints environment-driven.

## Reporting Issues

Use GitHub issue templates for bugs and feature requests.
