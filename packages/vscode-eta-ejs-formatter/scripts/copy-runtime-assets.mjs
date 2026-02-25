import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const distVendorRoot = path.join(packageRoot, "dist", "vendor");

const localPrettierSource = path.join(packageRoot, "node_modules", "prettier");
const workspacePrettierSource = path.resolve(packageRoot, "..", "..", "node_modules", "prettier");
const pluginSource = path.resolve(packageRoot, "..", "prettier-plugin-eta-ejs", "dist");
const prettierTarget = path.join(distVendorRoot, "prettier");
const pluginTarget = path.join(distVendorRoot, "prettier-plugin");

let prettierSource = localPrettierSource;
try {
  await access(prettierSource);
} catch {
  prettierSource = workspacePrettierSource;
}

await rm(distVendorRoot, { recursive: true, force: true });
await mkdir(distVendorRoot, { recursive: true });
await cp(prettierSource, prettierTarget, { recursive: true });
await cp(pluginSource, pluginTarget, { recursive: true });
