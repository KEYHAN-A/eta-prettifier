# ETA/EJS Prettifier

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![CI](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml/badge.svg)](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml)
[![Website](https://img.shields.io/badge/docs-GitHub%20Pages-2563eb)](https://keyhan-a.github.io/eta-prettifier/)

Formatter tooling for Eta and EJS template files, shipped as a VS Code extension and a reusable Prettier plugin.

Current release: **v1.0.0**  
VSIX asset: `eta-ejs-prettifier-1.0.0.vsix`  
Download: [eta-ejs-prettifier-1.0.0.vsix](https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.0.0/eta-ejs-prettifier-1.0.0.vsix)

## Project Links

- GitHub repository: `https://github.com/KEYHAN-A/eta-prettifier`
- Website: `https://keyhan-a.github.io/eta-prettifier/`

## What This Extension Does

- Formats `.eta` and `.ejs` with deterministic output
- Supports **Format Document** and **Format Selection**
- Falls back to full document formatting when selection tags are unbalanced
- Adds language registration for Eta/EJS and syntax grammar support
- Sets default formatter for `eta` and `ejs` language modes

## Packages

- `packages/vscode-eta-ejs-formatter` -> VS Code extension `eta-ejs-prettifier`
- `packages/prettier-plugin-eta-ejs` -> NPM plugin `@eta-ejs/prettier-plugin`
- `website/` -> project docs and release guide website

## Complete Extension Guide

### 1) Install

Option A (recommended): VS Code Marketplace  
[ETA/EJS Prettifier on Marketplace](https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier)

Option B: download release VSIX  
[v1.0.0 VSIX](https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.0.0/eta-ejs-prettifier-1.0.0.vsix)

Option C: build locally

```bash
npm install
npm run package:extension
```

Generated file:
`packages/vscode-eta-ejs-formatter/eta-ejs-prettifier-1.0.0.vsix`

Then in VS Code:
1. Open Extensions panel
2. Menu (`...`) -> `Install from VSIX...`
3. Select the VSIX file

### 2) First-Run Setup

1. Open an `.eta` or `.ejs` file
2. Confirm language mode is `Eta` or `EJS` in the status bar
3. Run `Format Document`

If prompted, select `ETA/EJS Prettifier` as formatter.

### 3) Formatting Behavior

- **Format Document**: formats the entire file
- **Format Selection**: formats only selection when tags are balanced
- **Selection fallback**: if selected template tags are unbalanced, extension safely formats whole document

### 4) Configuration

Settings namespace: `etaEjsPrettifier.*`

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `etaEjsPrettifier.printWidth` | number | `100` | Wrap width target |
| `etaEjsPrettifier.tabWidth` | number | `2` | Spaces per indentation level |
| `etaEjsPrettifier.useTabs` | boolean | `false` | Use tabs instead of spaces |
| `etaEjsPrettifier.semi` | boolean | `true` | Keep semicolons where applicable |
| `etaEjsPrettifier.singleQuote` | boolean | `false` | Prefer single quotes where applicable |

### 5) Troubleshooting

If file appears plain white text:
- ensure file extension is `.eta` or `.ejs`
- check VS Code language mode is `Eta` or `EJS`, not `Plain Text` or `HTML`
- reload window: `Developer: Reload Window`

If formatting does not run:
- run `Format Document With...` and choose `ETA/EJS Prettifier`
- verify no conflicting formatter is forced for `[eta]` / `[ejs]`
- check `Output -> Log (Extension Host)` for runtime errors

## Prettier Plugin Usage

Install:

```bash
npm install --save-dev prettier @eta-ejs/prettier-plugin
```

Prettier config example:

```json
{
  "plugins": ["@eta-ejs/prettier-plugin"]
}
```

## Development

```bash
npm install
npm run build
npm run test
npm run lint
npm run licenses:check
```

## Release

- VSIX packaging: `npm run package:extension`
- Full release guide: `docs/RELEASE.md`
- API integration doc: `docs/API_INTEGRATION.md`

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.

## Security

Report vulnerabilities responsibly via `SECURITY.md`.

## License

MIT - see `LICENSE`.
