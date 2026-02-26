# ETA/EJS Prettifier

<img src="packages/vscode-eta-ejs-formatter/icon.png" alt="ETA/EJS icon" width="28" height="28" />

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![CI](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml/badge.svg)](https://github.com/KEYHAN-A/eta-prettifier/actions/workflows/ci.yml)
[![Website](https://img.shields.io/badge/docs-GitHub%20Pages-2563eb)](https://keyhan-a.github.io/eta-prettifier/)

Formatter tooling for Eta and EJS templates, delivered as a VS Code extension and a reusable Prettier plugin.

Current release: **v1.1.0**  
VSIX asset: `eta-ejs-prettifier-1.1.0.vsix`

## Links

- Marketplace: `https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier`
- GitHub: `https://github.com/KEYHAN-A/eta-prettifier`
- Website: `https://keyhan-a.github.io/eta-prettifier/`
- Main ETA website: `https://eta.js.org/`
- VSIX download: `https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix`

## Install

1. Install from VS Code Marketplace (recommended):  
   `eta-ejs-prettifier.eta-ejs-prettifier`
2. Or install the release VSIX:  
   `eta-ejs-prettifier-1.1.0.vsix`
3. Or build locally:

```bash
npm install
npm run package:extension
```

Generated file:
`packages/vscode-eta-ejs-formatter/eta-ejs-prettifier-1.1.0.vsix`

## First Run

1. Open a `.eta` or `.ejs` file.
2. Confirm language mode is `Eta` or `EJS`.
3. Run `Format Document`.
4. If prompted, choose `ETA/EJS Prettifier` as default formatter.

## Features

- Deterministic formatting for `.eta` and `.ejs`
- `Format Document` and `Format Selection`
- Safe full-document fallback when selected tags are unbalanced
- Syntax grammar support for Eta/EJS scriptlet blocks

## Configuration

Settings namespace: `etaEjsPrettifier.*`

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `etaEjsPrettifier.printWidth` | number | `100` | Wrap width target |
| `etaEjsPrettifier.tabWidth` | number | `2` | Spaces per indentation level |
| `etaEjsPrettifier.useTabs` | boolean | `false` | Use tabs instead of spaces |
| `etaEjsPrettifier.semi` | boolean | `true` | Keep semicolons where applicable |
| `etaEjsPrettifier.singleQuote` | boolean | `false` | Prefer single quotes where applicable |

Fallback association/setup (if `.eta` opens as plain text):

```json
{
  "files.associations": {
    "*.eta": "eta",
    "*.ejs": "ejs"
  },
  "[eta]": {
    "editor.defaultFormatter": "eta-ejs-prettifier.eta-ejs-prettifier"
  },
  "[ejs]": {
    "editor.defaultFormatter": "eta-ejs-prettifier.eta-ejs-prettifier"
  }
}
```

## Troubleshooting

- `.eta` looks plain text:
  - verify file extension is `.eta`
  - set language mode to `Eta`
  - run `Developer: Reload Window`
- Formatter does not run:
  - use `Format Document With...` and select this extension
  - check formatter conflicts for `[eta]` / `[ejs]`
  - inspect `Output -> Log (Extension Host)` for errors

## IntelliJ Products (Prettier Path)

This project does not ship a native JetBrains plugin yet. For IntelliJ IDEA/WebStorm/PhpStorm:

1. Install dependencies:

```bash
npm install --save-dev prettier @eta-ejs/prettier-plugin
```

2. In IDE settings, use project `node_modules/prettier`.
3. Ensure Prettier config includes:

```json
{
  "plugins": ["@eta-ejs/prettier-plugin"]
}
```

4. If needed, map `*.eta` to an HTML-like file type.
5. Fallback external tool command:
   `npx prettier --write --plugin @eta-ejs/prettier-plugin <file>`

## Packages

- `packages/vscode-eta-ejs-formatter` -> VS Code extension
- `packages/prettier-plugin-eta-ejs` -> Prettier plugin
- `website/` -> docs site

## Development

```bash
npm install
npm run build
npm run test
npm run lint
npm run licenses:check
```

## Release

- VSIX package: `npm run package:extension`
- Full release guide: `docs/RELEASE.md`

## Contributing

See `CONTRIBUTING.md`.

## Security

See `SECURITY.md`.

## License

MIT - see `LICENSE`.
