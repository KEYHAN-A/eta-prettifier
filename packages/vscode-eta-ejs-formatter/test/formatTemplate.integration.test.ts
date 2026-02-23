import { describe, expect, it } from "vitest";

import { formatTemplateSource } from "../src/formatTemplate.js";

const defaultConfig = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
};

describe("formatTemplateSource integration", () => {
  it("formats eta template content end-to-end", async () => {
    const input = `<div>\n<% if (it.user) { %>\n<span><%= it.user.name %></span>\n<% } %>\n</div>`;
    const output = await formatTemplateSource("eta", input, defaultConfig);
    expect(output).toContain("<% if (it.user) { %>");
    expect(output).toContain("<%= it.user.name %>");
  });

  it("formats ejs template content end-to-end", async () => {
    const input = `<ul>\n<% posts.forEach((post) => { %>\n<li><%- post.title %></li>\n<% }) %>\n</ul>`;
    const output = await formatTemplateSource("ejs", input, defaultConfig);
    expect(output).toContain("<% posts.forEach((post) => { %>");
    expect(output).toContain("<%- post.title %>");
  });
});
