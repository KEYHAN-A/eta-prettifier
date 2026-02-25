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
- Current stable target: `v1.0.0` (`eta-ejs-prettifier-1.0.0.vsix`)

## Metadata Checklist Before Tagging

- Extension developer attribution: `KEYHAN`
- Repo URL: `https://github.com/KEYHAN-A/eta-prettifier`
- Website URL: `https://keyhan-a.github.io/eta-prettifier/`
- README release version/download URL updated
- Website CTA links and version labels updated
- `CHANGELOG.md` includes the release notes section

## Create GitHub Release

1. Update versions/changelog as needed.
2. Create and push tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. Create release with GitHub CLI and upload VSIX:
   ```bash
   gh release create v1.0.0 \
     packages/vscode-eta-ejs-formatter/eta-ejs-prettifier-1.0.0.vsix \
     --title "v1.0.0" \
     --notes-file CHANGELOG.md
   ```
4. Validate release asset link:
   - `https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.0.0/eta-ejs-prettifier-1.0.0.vsix`

## Publish Website

Website deploys with `.github/workflows/deploy-pages.yml` on `main`.

## Marketplace Publish (Later)

When ready, publish with `vsce` using your publisher account and PAT with Marketplace scopes.
