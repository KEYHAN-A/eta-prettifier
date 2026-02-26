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
          <a href="#install">Install</a>
          <a href="#config">Config</a>
          <a href="#help">Help</a>
        </div>
      </nav>
      <div class="heroSplit">
        <div class="heroMain">
          <p class="eyebrow">v1.1.0</p>
          <h1>Minimal formatter workflow for Eta and EJS</h1>
          <p class="lead">
            Fast setup, predictable output, and safe formatting behavior for mixed template files.
          </p>
          <div class="ctaRow">
            <a class="btn primary" href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install from Marketplace</a>
            <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">Download VSIX</a>
            <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier">GitHub</a>
          </div>
        </div>
        <aside class="quickCard">
          <h3>Quick Start</h3>
          <ol>
            <li>Install extension.</li>
            <li>Open an <code>.eta</code> or <code>.ejs</code> file.</li>
            <li>Run <code>Format Document</code>.</li>
            <li>Set default formatter if prompted.</li>
          </ol>
        </aside>
      </div>
    </header>

    <section id="install" class="panel">
      <h2>Install Paths</h2>
      <div class="grid3">
        <article class="card">
          <h3>Marketplace</h3>
          <p>Recommended for normal use and updates.</p>
          <a href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">eta-ejs-prettifier.eta-ejs-prettifier</a>
        </article>
        <article class="card">
          <h3>VSIX</h3>
          <p>Use release asset for offline/manual install.</p>
          <a href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">eta-ejs-prettifier-1.1.0.vsix</a>
        </article>
        <article class="card">
          <h3>Local Build</h3>
          <p>Build your own package for testing.</p>
          <pre><code>npm install
npm run package:extension</code></pre>
        </article>
      </div>
    </section>

    <section id="config" class="panel">
      <h2>Configuration</h2>
      <div class="grid2">
        <article class="card">
          <h3>Formatter Settings</h3>
          <pre><code>{
  "etaEjsPrettifier.printWidth": 100,
  "etaEjsPrettifier.tabWidth": 2,
  "etaEjsPrettifier.useTabs": false,
  "etaEjsPrettifier.semi": true,
  "etaEjsPrettifier.singleQuote": false
}</code></pre>
        </article>
        <article class="card">
          <h3>Language Fallback</h3>
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
        </article>
      </div>
    </section>

    <section id="help" class="panel">
      <h2>Troubleshooting</h2>
      <div class="grid2">
        <article class="card">
          <h3>.eta appears as plain text</h3>
          <ul>
            <li>Confirm extension is <code>.eta</code>.</li>
            <li>Set language mode to <code>Eta</code>.</li>
            <li>Reload: <code>Developer: Reload Window</code>.</li>
            <li>Add <code>"*.eta": "eta"</code> in <code>files.associations</code> if needed.</li>
          </ul>
        </article>
        <article class="card">
          <h3>Formatter does not run</h3>
          <ul>
            <li>Use <code>Format Document With...</code> and select this extension.</li>
            <li>Check conflicting formatter settings for <code>[eta]</code>/<code>[ejs]</code>.</li>
            <li>Review <code>Log (Extension Host)</code> output.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="panel">
      <h2>JetBrains / IntelliJ</h2>
      <p>
        Use Prettier with <code>@eta-ejs/prettier-plugin</code>. Point IDE Prettier path to project
        <code>node_modules/prettier</code>, and map <code>*.eta</code> to an HTML-like file type if needed.
      </p>
      <pre><code>npm install --save-dev prettier @eta-ejs/prettier-plugin</code></pre>
    </section>

    <section id="release" class="panel">
      <h2>Project Links</h2>
      <ul class="linksList">
        <li><strong>Version:</strong> v1.1.0</li>
        <li><strong>Repository:</strong> <a href="https://github.com/KEYHAN-A/eta-prettifier">github.com/KEYHAN-A/eta-prettifier</a></li>
        <li><strong>Main ETA website:</strong> <a href="https://eta.js.org/">eta.js.org</a></li>
        <li><strong>Project website:</strong> <a href="https://keyhan-a.github.io/eta-prettifier/">keyhan-a.github.io/eta-prettifier</a></li>
      </ul>
    </section>

    <footer>
      MIT licensed open-source project. <span class="credit">Extension developer: KEYHAN</span>
    </footer>
  </div>
`;
