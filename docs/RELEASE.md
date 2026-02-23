# Release Guide

## Prerequisites

- Node.js 20+
- GitHub CLI authenticated
- VS Code extension publisher credentials (when publishing to Marketplace)

## Validate Before Release

```bash
npm install
npm run build
npm run test
npm run lint
npm run licenses:check
```

## Build VSIX

```bash
npm run package:extension
```

Output:

- `packages/vscode-eta-ejs-formatter/eta-ejs-prettifier-<version>.vsix`
- Current published build: `v0.1.0` (`eta-ejs-prettifier-0.1.0.vsix`)

## Create GitHub Release

1. Update versions/changelog as needed.
2. Create and push tag:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```
3. Draft release notes in GitHub and attach generated VSIX.

## Publish Website

Website deploys with `.github/workflows/deploy-pages.yml` on `main`.

## Marketplace Publish (Later)

When ready, publish with `vsce` using your publisher account and PAT with Marketplace scopes.
