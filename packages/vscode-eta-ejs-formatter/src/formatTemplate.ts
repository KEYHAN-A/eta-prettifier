import prettier from "prettier";
import etaEjsPlugin from "@eta-ejs/prettier-plugin";

export type TemplateLanguageId = "eta" | "ejs";

export interface TemplateFormatConfig {
  printWidth: number;
  tabWidth: number;
  useTabs: boolean;
  semi: boolean;
  singleQuote: boolean;
}

export async function formatTemplateSource(
  languageId: TemplateLanguageId,
  source: string,
  config: TemplateFormatConfig
): Promise<string> {
  return prettier.format(source, {
    parser: languageId === "eta" ? "eta-template" : "ejs-template",
    plugins: [etaEjsPlugin],
    printWidth: config.printWidth,
    tabWidth: config.tabWidth,
    useTabs: config.useTabs,
    semi: config.semi,
    singleQuote: config.singleQuote,
  });
}
