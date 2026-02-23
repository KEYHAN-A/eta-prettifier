import type { SupportOption } from "prettier";

export const pluginOptions: Record<string, SupportOption> = {
  etaEjsCollapseBlankLines: {
    type: "boolean",
    category: "Global",
    default: true,
    description: "Collapse 3+ blank lines into 2 lines in template text nodes.",
  },
};
