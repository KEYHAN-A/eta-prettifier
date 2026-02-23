# ETA/EJS Prettifier

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![CI](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml/badge.svg)](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml)
[![Website](https://img.shields.io/badge/docs-GitHub%20Pages-2563eb)](https://keyhan-a.github.io/eta-prettifier/)

Open-source formatter tooling for **Eta** and **EJS** templates:

- VS Code extension for Format Document + Format Selection
- Prettier plugin for reusable formatting integration

## Why This Project

Template files that mix HTML and scriptlets are easy to make messy and hard to review.
This project gives you a predictable formatting baseline for `.eta` and `.ejs` while keeping
formatting conservative enough to avoid changing runtime behavior.

## Packages

- `packages/prettier-plugin-eta-ejs` - `@eta-ejs/prettier-plugin`
- `packages/vscode-eta-ejs-formatter` - `eta-ejs-prettifier` VS Code extension
- `website/` - GitHub Pages showcase and integration guide

## Features

- Formats `.eta` and `.ejs` files in VS Code
- Supports **Format Document** and **Format Selection**
- Fallback to full-document formatting when selected range has unbalanced template tags
- Deterministic formatting (idempotent output)
- License-check workflow for OSS-friendly distribution

## Install

### VSIX (current)

1. Build package:
   ```bash
   npm install
   npm run package:extension
   ```
2. In VS Code: Extensions panel -> menu -> `Install from VSIX...`
3. Select the generated file in `packages/vscode-eta-ejs-formatter/*.vsix`

### Marketplace (planned)

Marketplace publishing is planned after wider fixture coverage.

## Extension Configuration

Settings are available under `etaEjsPrettifier.*`:

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `etaEjsPrettifier.printWidth` | number | `100` | Maximum line width before wrapping |
| `etaEjsPrettifier.tabWidth` | number | `2` | Indentation width |
| `etaEjsPrettifier.useTabs` | boolean | `false` | Use tabs for indentation |
| `etaEjsPrettifier.semi` | boolean | `true` | Keep semicolons where applicable |
| `etaEjsPrettifier.singleQuote` | boolean | `false` | Prefer single quotes where applicable |

## Quick Before/After

### ETA

Before:
```eta
<% if (it.user) { %>
<h1><%= it.user.name %></h1>
<% } %>
```

After:
```eta
<% if (it.user) { %>
<h1><%= it.user.name %></h1>
<% } %>
```

### EJS

Before:
```ejs
<% posts.forEach((post) => { %>
<li><%- post.title %></li>
<% }) %>
```

After:
```ejs
<% posts.forEach((post) => { %>
<li><%- post.title %></li>
<% }) %>
```

## Development

```bash
npm install
npm run build
npm run test
npm run lint
npm run licenses:check
```

## Website (GitHub Pages)

```bash
cd website
npm install
npm run dev
```

The live site is intended to be published at:
`https://keyhan-a.github.io/eta-prettifier/`

## Release

- VSIX packaging: `npm run package:extension`
- Full release steps: `docs/RELEASE.md`
- API integration docs for subscription: `docs/API_INTEGRATION.md`

## Roadmap

- Richer parser/printer coverage for complex mixed HTML/template blocks
- Additional formatting controls for whitespace handling
- Marketplace publish and semver release automation
- Expanded fixture corpus from real-world template projects

## Known Limitations

- Formatter is intentionally conservative for safety in mixed template markup
- Deep JS/HTML semantic reformatting inside template blocks is limited in MVP

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.

## Security

Report vulnerabilities responsibly via `SECURITY.md`.

## License

MIT - see `LICENSE`.
