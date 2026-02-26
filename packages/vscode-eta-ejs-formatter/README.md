# ETA/EJS Prettifier

Format Eta and EJS template files in VS Code with stable, predictable output.

- Marketplace: https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier
- GitHub: https://github.com/KEYHAN-A/eta-prettifier
- Website: https://keyhan-a.github.io/eta-prettifier/

## Features

- Formatting for `.eta` and `.ejs`
- Supports **Format Document** and **Format Selection**
- Safe fallback to full document formatting when selected template tags are unbalanced
- Syntax grammar support for Eta/EJS scriptlet blocks

## Quick Start

1. Install from Marketplace (recommended).
2. Open an `.eta` or `.ejs` file.
3. Run **Format Document**.

If needed, choose `ETA/EJS Prettifier` via **Format Document With...**.

## Configuration

Settings namespace: `etaEjsPrettifier.*`

- `etaEjsPrettifier.printWidth` (default: `100`)
- `etaEjsPrettifier.tabWidth` (default: `2`)
- `etaEjsPrettifier.useTabs` (default: `false`)
- `etaEjsPrettifier.semi` (default: `true`)
- `etaEjsPrettifier.singleQuote` (default: `false`)

## Troubleshooting

- If the file appears plain text, verify language mode is `Eta` or `EJS`.
- If formatting does not run, use **Format Document With...** and select this extension.
- Reload VS Code window after updates: **Developer: Reload Window**.
- If needed, set fallback association in settings: `"files.associations": { "*.eta": "eta" }`.
