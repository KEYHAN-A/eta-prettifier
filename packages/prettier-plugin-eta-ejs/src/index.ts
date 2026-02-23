import type { Plugin } from "prettier";

import { pluginOptions } from "./options.js";
import { parseEjs } from "./parser/ejs.js";
import { parseEta } from "./parser/eta.js";
import { templatePrinter } from "./printer/templatePrinter.js";
import type { TemplateAst } from "./types.js";

const plugin: Plugin<TemplateAst> = {
  languages: [
    {
      name: "Eta",
      parsers: ["eta-template"],
      extensions: [".eta"],
      vscodeLanguageIds: ["eta"],
    },
    {
      name: "EJS",
      parsers: ["ejs-template"],
      extensions: [".ejs"],
      vscodeLanguageIds: ["ejs"],
    },
  ],
  parsers: {
    "eta-template": {
      parse: (text: string) => parseEta(text),
      astFormat: "eta-ejs-ast",
      locStart: (node: TemplateAst) => node.start,
      locEnd: (node: TemplateAst) => node.end,
    },
    "ejs-template": {
      parse: (text: string) => parseEjs(text),
      astFormat: "eta-ejs-ast",
      locStart: (node: TemplateAst) => node.start,
      locEnd: (node: TemplateAst) => node.end,
    },
  },
  printers: {
    "eta-ejs-ast": templatePrinter,
  },
  options: pluginOptions,
};

export default plugin;
