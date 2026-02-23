import { describe, expect, it } from "vitest";

import { hasBalancedTemplateTags } from "../src/templateRange.js";

describe("hasBalancedTemplateTags", () => {
  it("returns true for balanced tags", () => {
    const input = `<% if (x) { %>\n<div><%= x %></div>\n<% } %>`;
    expect(hasBalancedTemplateTags(input)).toBe(true);
  });

  it("returns false for unbalanced tags", () => {
    const input = `<% if (x) { %>\n<div><%= x </div>`;
    expect(hasBalancedTemplateTags(input)).toBe(false);
  });
});
