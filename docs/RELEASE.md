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
- Current stable target: `v1.2.0` (`eta-ejs-prettifier-1.2.0.vsix`)

## Metadata Checklist Before Tagging

- Repo URL: `https://github.com/KEYHAN-A/eta-prettifier`
- Website URL: `https://keyhan-a.github.io/eta-prettifier/`
- README release version/download URL updated
- Website CTA links and version labels updated
- `CHANGELOG.md` includes the release notes section

## Create GitHub Release

1. Update versions/changelog as needed.
2. Create and push tag:
   ```bash
   git tag v1.2.0
   git push origin v1.2.0
   ```
3. Create release with GitHub CLI and upload VSIX:
   ```bash
   gh release create v1.2.0 \
    packages/vscode-eta-ejs-formatter/eta-ejs-prettifier-1.2.0.vsix \
    --title "v1.2.0" \
     --notes-file CHANGELOG.md
   ```
4. Validate release asset link:
   - `https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.2.0/eta-ejs-prettifier-1.2.0.vsix`

## Publish Website

Website deploys with `.github/workflows/deploy-pages.yml` on `main`.

## Marketplace Publish (Later)

### One-Time Manual Setup

1. Create or verify publisher at `https://marketplace.visualstudio.com/manage`:
   - Publisher ID must match extension `publisher` in `packages/vscode-eta-ejs-formatter/package.json` (`eta-ejs-prettifier`).
2. Create Azure DevOps PAT with Marketplace publish/manage scope.
3. Add repository secret:
   - GitHub -> Settings -> Secrets and variables -> Actions -> New repository secret
   - Name: `VSCE_PAT`
   - Value: your Marketplace PAT

### Publish Paths

Option A: GitHub Actions (recommended)

- Trigger workflow: `.github/workflows/publish-marketplace.yml`
- Manual dispatch input `version` must match extension package version.
- Or publish automatically when a GitHub Release is marked **published**.

Option B: Local publish

```bash
cd packages/vscode-eta-ejs-formatter
npx @vscode/vsce login eta-ejs-prettifier
npm run publish:marketplace
```

### Verify Listing

After publish succeeds, check:

- Marketplace listing:
  `https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier`
