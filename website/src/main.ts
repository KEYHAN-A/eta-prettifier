import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <nav class="navBar">
        <a class="brand" href="https://keyhan-a.github.io/eta-prettifier/">ETA/EJS Prettifier</a>
        <div class="navLinks">
          <a href="#guide">Guide</a>
          <a href="#troubleshooting">Troubleshooting</a>
          <a href="#release">Release</a>
        </div>
      </nav>
      <div class="heroContent">
        <p class="eyebrow">Stable release</p>
        <h1>ETA/EJS Prettifier v1.1.0</h1>
        <p class="lead">
          Formatter tooling for Eta and EJS templates with predictable output, language registration,
          and safe selection fallback behavior.
        </p>
        <div class="ctaRow">
          <a class="btn primary" href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install from VS Code Marketplace</a>
          <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">Download VSIX v1.1.0</a>
          <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier">GitHub</a>
        </div>
      </div>
    </header>

    <section id="guide" class="panel">
      <h2>Install</h2>
      <div class="grid2">
        <article class="card">
          <h3>VS Code</h3>
          <ol>
            <li>Install from VS Code Marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">eta-ejs-prettifier.eta-ejs-prettifier</a>.</li>
            <li>Alternative: install <code>eta-ejs-prettifier-1.1.0.vsix</code> from GitHub release via <code>Install from VSIX...</code>.</li>
            <li>Open a <code>.eta</code> or <code>.ejs</code> file and run <code>Format Document</code>.</li>
          </ol>
          <p>Local package command: <code>npm run package:extension</code>.</p>
        </article>
        <article class="card">
          <h3>First Run</h3>
          <ol>
            <li>Confirm language mode is <code>Eta</code> or <code>EJS</code>.</li>
            <li>Run <code>Format Document</code>.</li>
            <li>If prompted, set <code>ETA/EJS Prettifier</code> as default formatter.</li>
          </ol>
          <h3>Features</h3>
          <ul>
            <li>Formatting for <code>.eta</code> and <code>.ejs</code>.</li>
            <li>Format Document and Format Selection support.</li>
            <li>Selection fallback to document formatting when tags are unbalanced.</li>
            <li>Syntax grammar support for template scriptlet tokens.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="panel">
      <h2>Configuration</h2>
      <p>Settings namespace: <code>etaEjsPrettifier.*</code></p>
      <pre><code>{
  "etaEjsPrettifier.printWidth": 100,
  "etaEjsPrettifier.tabWidth": 2,
  "etaEjsPrettifier.useTabs": false,
  "etaEjsPrettifier.semi": true,
  "etaEjsPrettifier.singleQuote": false
}</code></pre>
      <p>Fallback association/setup (if VS Code opens <code>.eta</code> as plain text):</p>
      <pre><code>{
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
}</code></pre>
    </section>

    <section id="troubleshooting" class="panel">
      <h2>Troubleshooting</h2>
      <div class="grid2">
        <article class="card">
          <h3>File has no colors</h3>
          <ul>
            <li>Confirm file extension is <code>.eta</code> or <code>.ejs</code>.</li>
            <li>Set language mode to <code>Eta</code> or <code>EJS</code>.</li>
            <li>Run <code>Developer: Reload Window</code>.</li>
            <li>If needed, add <code>"*.eta": "eta"</code> in <code>files.associations</code>.</li>
          </ul>
        </article>
        <article class="card">
          <h3>Format does not run</h3>
          <ul>
            <li>Use <code>Format Document With...</code> and select <code>ETA/EJS Prettifier</code>.</li>
            <li>Check formatter conflicts in language-specific settings.</li>
            <li>Inspect <code>Log (Extension Host)</code> output for errors.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="panel">
      <h2>IntelliJ Products (Prettier path)</h2>
      <p>
        For IntelliJ IDEA, WebStorm, and PhpStorm, use the Prettier integration with
        <code>@eta-ejs/prettier-plugin</code>.
      </p>
      <ol>
        <li>Install: <code>npm install --save-dev prettier @eta-ejs/prettier-plugin</code>.</li>
        <li>In IDE settings, point Prettier package to project <code>node_modules/prettier</code>.</li>
        <li>Add plugin in Prettier config: <code>"plugins": ["@eta-ejs/prettier-plugin"]</code>.</li>
        <li>If <code>.eta</code> parsing is not picked up, map <code>*.eta</code> to an HTML-like file type.</li>
      </ol>
    </section>

    <section id="release" class="panel">
      <h2>Project Links</h2>
      <ul>
        <li>Version: <strong>v1.1.0</strong></li>
        <li>Marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">eta-ejs-prettifier.eta-ejs-prettifier</a></li>
        <li>VSIX: <a href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">eta-ejs-prettifier-1.1.0.vsix</a></li>
        <li>Repository: <a href="https://github.com/KEYHAN-A/eta-prettifier">github.com/KEYHAN-A/eta-prettifier</a></li>
        <li>Main ETA website: <a href="https://eta.js.org/">eta.js.org</a></li>
        <li>Website: <a href="https://keyhan-a.github.io/eta-prettifier/">keyhan-a.github.io/eta-prettifier</a></li>
      </ul>
    </section>

    <footer>
      MIT licensed open-source project. <span class="credit">Extension developer: KEYHAN</span>
    </footer>
  </div>
`;
