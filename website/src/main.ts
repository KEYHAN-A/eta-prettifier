import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
  <div class="wrap">
    <header>
      <h1>ETA/EJS Prettifier</h1>
      <p><strong>Current build:</strong> v0.1.0</p>
      <p class="lead">
        Open-source formatter extension and plugin for clean, consistent Eta and EJS templates.
        Format Document and Format Selection in VS Code with deterministic output.
      </p>
      <div class="ctaRow">
        <a class="btn primary" href="https://github.com/KEYHAN-A/eta-prettifier">View on GitHub</a>
        <a class="btn" href="#install">Installation Guide</a>
      </div>
    </header>

    <section id="features">
      <h2>Features</h2>
      <div class="grid2">
        <div class="feature"><strong>VS Code Formatting</strong><br />Supports full-document and selection formatting for <code>.eta</code> and <code>.ejs</code>.</div>
        <div class="feature"><strong>Stable Output</strong><br />Idempotent formatting with parser/printer fixture coverage.</div>
        <div class="feature"><strong>Safety Fallback</strong><br />Selection formatting falls back to full document when tags are unbalanced.</div>
        <div class="feature"><strong>Open Source</strong><br />MIT licensed with reproducible checks and transparent release workflow.</div>
      </div>
    </section>

    <section id="install">
      <h2>Installation Guide</h2>
      <ol>
        <li>Clone repo and install dependencies: <code>npm install</code></li>
        <li>Package extension: <code>npm run package:extension</code></li>
        <li>In VS Code, install from generated VSIX file.</li>
      </ol>
      <p>Marketplace publishing is planned after broader fixture and compatibility validation.</p>
    </section>

    <section id="usage">
      <h2>Usage</h2>
      <p>Open any <code>.eta</code> or <code>.ejs</code> file and run formatting from command palette or editor actions.</p>
      <pre><code>&lt;% if (it.user) { %&gt;
&lt;h1&gt;&lt;%= it.user.name %&gt;&lt;/h1&gt;
&lt;% } %&gt;</code></pre>
      <p>The formatter keeps tag spacing normalized and avoids aggressive transformations in mixed markup/script template files.</p>
    </section>

    <section id="changelog">
      <h2>Version Highlights</h2>
      <ul>
        <li><strong>v0.1.0</strong> - Initial public build and release asset (<code>eta-ejs-prettifier-0.1.0.vsix</code>).</li>
        <li>GitHub Pages docs and install guide are now live.</li>
      </ul>
    </section>

    <footer>
      Built by Keyhan. This project is free and open-source.
    </footer>
  </div>
`;
