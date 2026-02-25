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
        <h1>ETA/EJS Prettifier v1.0.0</h1>
        <p class="lead">
          ETA-inspired, clean formatting workflow for template projects. Includes syntax highlighting,
          document/selection formatting, and a safe fallback behavior for unbalanced selected tags.
        </p>
        <div class="ctaRow">
          <a class="btn primary" href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install from VS Code Marketplace</a>
          <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.0.0/eta-ejs-prettifier-1.0.0.vsix">Download VSIX v1.0.0</a>
          <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier">GitHub Repository</a>
        </div>
      </div>
    </header>

    <section id="guide" class="panel">
      <h2>Complete Extension Guide</h2>
      <div class="grid2">
        <article class="card">
          <h3>Install</h3>
          <ol>
            <li>Install from VS Code Marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">eta-ejs-prettifier.eta-ejs-prettifier</a>.</li>
            <li>Alternative: install <code>eta-ejs-prettifier-1.0.0.vsix</code> from GitHub release via <code>Install from VSIX...</code>.</li>
            <li>Open a <code>.eta</code> or <code>.ejs</code> file and run <code>Format Document</code>.</li>
          </ol>
          <p>Local package command: <code>npm run package:extension</code>.</p>
        </article>
        <article class="card">
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

    <section id="release" class="panel">
      <h2>Release Links</h2>
      <ul>
        <li>Version: <strong>v1.0.0</strong></li>
        <li>VSIX: <a href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.0.0/eta-ejs-prettifier-1.0.0.vsix">eta-ejs-prettifier-1.0.0.vsix</a></li>
        <li>Repository: <a href="https://github.com/KEYHAN-A/eta-prettifier">github.com/KEYHAN-A/eta-prettifier</a></li>
        <li>Website: <a href="https://keyhan-a.github.io/eta-prettifier/">keyhan-a.github.io/eta-prettifier</a></li>
      </ul>
    </section>

    <footer>
      MIT licensed open-source project. <span class="credit">Extension developer: KEYHAN</span>
    </footer>
  </div>
`;
