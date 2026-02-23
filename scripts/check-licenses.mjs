import { execSync } from "node:child_process";

const ALLOWED = new Set([
  "MIT",
  "ISC",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "Apache-2.0",
  "BlueOak-1.0.0",
  "Artistic-2.0",
  "WTFPL",
  "Python-2.0",
  "Zlib",
  "CC-BY-3.0",
  "0BSD",
  "CC0-1.0",
  "Unlicense",
]);

const raw = execSync("npx license-checker --json --production --excludePrivatePackages", {
  stdio: ["ignore", "pipe", "pipe"],
  encoding: "utf8",
});

const report = JSON.parse(raw);
const offenders = [];

for (const [pkg, meta] of Object.entries(report)) {
  const licenses = String(meta.licenses ?? "")
    .replace(/[()]/g, "")
    .split(/\s+OR\s+|\s+AND\s+|\//g)
    .map((part) => part.trim())
    .filter(Boolean);

  if (!licenses.length) {
    offenders.push(`${pkg}: Unknown`);
    continue;
  }

  const allAllowed = licenses.every((id) => ALLOWED.has(id));
  if (!allAllowed) {
    offenders.push(`${pkg}: ${licenses.join(" OR ")}`);
  }
}

if (offenders.length > 0) {
  console.error("Disallowed or unknown licenses detected:");
  for (const line of offenders) {
    console.error(`- ${line}`);
  }
  process.exit(1);
}

console.log("License check passed.");
