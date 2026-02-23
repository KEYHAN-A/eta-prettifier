import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";
import prettier from "prettier";

import plugin from "../src/index.js";

function loadFixture(name: string): string {
  return readFileSync(resolve(import.meta.dirname, "fixtures", name), "utf8");
}

describe("prettier-plugin-eta-ejs", () => {
  it("formats eta fixture deterministically", async () => {
    const input = loadFixture("sample.eta");
    const once = await prettier.format(input, {
      parser: "eta-template",
      plugins: [plugin],
    });
    const twice = await prettier.format(once, {
      parser: "eta-template",
      plugins: [plugin],
    });

    expect(twice).toBe(once);
    expect(once).toMatchSnapshot();
  });

  it("formats ejs fixture deterministically", async () => {
    const input = loadFixture("sample.ejs");
    const once = await prettier.format(input, {
      parser: "ejs-template",
      plugins: [plugin],
    });
    const twice = await prettier.format(once, {
      parser: "ejs-template",
      plugins: [plugin],
    });

    expect(twice).toBe(once);
    expect(once).toMatchSnapshot();
  });
});
