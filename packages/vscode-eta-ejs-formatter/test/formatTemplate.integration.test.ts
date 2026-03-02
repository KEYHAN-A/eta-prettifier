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
  it("formats eta template content with indentation", async () => {
    const input = `<div>\n<% if (it.user) { %>\n<span><%= it.user.name %></span>\n<% } %>\n</div>`;
    const output = await formatTemplateSource("eta", input, defaultConfig);
    expect(output).toBe(
      `<div>\n  <% if (it.user) { %>\n    <span><%= it.user.name %></span>\n  <% } %>\n</div>\n`
    );
  });

  it("formats ejs template content with indentation", async () => {
    const input = `<ul>\n<% posts.forEach((post) => { %>\n<li><%- post.title %></li>\n<% }) %>\n</ul>`;
    const output = await formatTemplateSource("ejs", input, defaultConfig);
    expect(output).toBe(
      `<ul>\n  <% posts.forEach((post) => { %>\n    <li><%- post.title %></li>\n  <% }) %>\n</ul>\n`
    );
  });
});
