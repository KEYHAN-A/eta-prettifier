import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

const version = "v1.1.0";

app.innerHTML = `
  <div class="page">
    <header class="topShell">
      <nav class="navBar">
        <a class="brand" href="https://keyhan-a.github.io/eta-prettifier/">
          <span class="brandDot" aria-hidden="true"></span>
          ETA/EJS Prettifier
        </a>
        <div class="navLinks" aria-label="Main links">
          <a href="#install">Install</a>
          <a href="#config">Config</a>
          <a href="#help">Help</a>
        </div>
      </nav>

      <section class="hero">
        <div class="heroMain">
          <p class="eyebrow">${version}</p>
          <h1>Formatter confidence for Eta and EJS templates</h1>
          <p class="lead">
            Keep mixed template files readable with stable output, predictable options, and an
            install flow that takes minutes.
          </p>
          <div class="ctaRow">
            <a class="btn primary" href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install Extension</a>
            <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier">View Source</a>
          </div>
          <ul class="heroMeta">
            <li>MIT licensed</li>
            <li>VS Code extension + Prettier plugin</li>
            <li>Built for Eta and EJS workflows</li>
          </ul>
        </div>
        <div class="heroPanel">
          <h3>Quick Start</h3>
          <ol class="stepList">
            <li>Install from Marketplace.</li>
            <li>Open any <code>.eta</code> or <code>.ejs</code> template.</li>
            <li>Run <code>Format Document</code>.</li>
            <li>Set this extension as default formatter when prompted.</li>
          </ol>
          <a class="inlineLink" href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">Need offline setup? Download VSIX.</a>
        </div>
      </section>
    </header>

    <section class="trustStrip">
      <article class="trustItem">
        <p class="trustLabel">Output style</p>
        <p>Predictable and low-noise formatting</p>
      </article>
      <article class="trustItem">
        <p class="trustLabel">Editor support</p>
        <p>VS Code first, with Prettier plugin support</p>
      </article>
      <article class="trustItem">
        <p class="trustLabel">Maintained in public</p>
        <p>Open issues, releases, and changelog on GitHub</p>
      </article>
    </section>

    <section id="install" class="panel">
      <div class="sectionHead">
        <p class="eyebrow">Installation</p>
        <h2>Choose your install path</h2>
      </div>
      <div class="grid3 installGrid">
        <article class="card">
          <h3>Marketplace</h3>
          <p>Recommended for normal use and updates.</p>
          <a href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install eta-ejs-prettifier.eta-ejs-prettifier</a>
        </article>
        <article class="card">
          <h3>VSIX</h3>
          <p>Use release asset for offline/manual install.</p>
          <a href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">Download eta-ejs-prettifier-1.1.0.vsix</a>
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
      <div class="sectionHead">
        <p class="eyebrow">Configuration</p>
        <h2>Drop-in settings for stable formatting</h2>
      </div>
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
      <div class="sectionHead">
        <p class="eyebrow">Troubleshooting</p>
        <h2>Fix common setup issues quickly</h2>
      </div>
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
      <div class="sectionHead">
        <p class="eyebrow">JetBrains</p>
        <h2>Use the Prettier plugin in IntelliJ-family IDEs</h2>
      </div>
      <p>
        Use Prettier with <code>@eta-ejs/prettier-plugin</code>. Point IDE Prettier path to project
        <code>node_modules/prettier</code>, and map <code>*.eta</code> to an HTML-like file type if needed.
      </p>
      <pre><code>npm install --save-dev prettier @eta-ejs/prettier-plugin</code></pre>
    </section>

    <section id="release" class="panel">
      <div class="sectionHead">
        <p class="eyebrow">Project links</p>
        <h2>Release and reference links</h2>
      </div>
      <ul class="linksList">
        <li><strong>Version:</strong> ${version}</li>
        <li><strong>Repository:</strong> <a href="https://github.com/KEYHAN-A/eta-prettifier">github.com/KEYHAN-A/eta-prettifier</a></li>
        <li><strong>Main ETA website:</strong> <a href="https://eta.js.org/">eta.js.org</a></li>
        <li><strong>Project website:</strong> <a href="https://keyhan-a.github.io/eta-prettifier/">keyhan-a.github.io/eta-prettifier</a></li>
      </ul>
    </section>

    <section class="finalCta">
      <h2>Ready to clean up your templates?</h2>
      <p>
        Install once, set as default formatter, and keep Eta/EJS files consistent across your team.
      </p>
      <div class="ctaRow">
        <a class="btn primary" href="https://marketplace.visualstudio.com/items?itemName=eta-ejs-prettifier.eta-ejs-prettifier">Install Extension</a>
        <a class="btn" href="https://github.com/KEYHAN-A/eta-prettifier/releases/download/v1.1.0/eta-ejs-prettifier-1.1.0.vsix">Download VSIX</a>
      </div>
    </section>

    <footer>
      MIT licensed open-source project. <span class="credit">Extension developer: KEYHAN</span>
    </footer>
  </div>
`;
