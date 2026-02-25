export type TemplateLanguageId = "eta" | "ejs";

export interface TemplateFormatConfig {
  printWidth: number;
  tabWidth: number;
  useTabs: boolean;
  semi: boolean;
  singleQuote: boolean;
}

async function loadPrettier(): Promise<any> {
  try {
    return (await import(new URL("./vendor/prettier/index.mjs", import.meta.url).href)).default;
  } catch {
    return (await import("prettier")).default;
  }
}

async function loadPlugin(): Promise<unknown> {
  try {
    return (await import(new URL("./vendor/prettier-plugin/index.js", import.meta.url).href)).default;
  } catch {
    return (await import("@eta-ejs/prettier-plugin")).default;
  }
}

export async function formatTemplateSource(
  languageId: TemplateLanguageId,
  source: string,
  config: TemplateFormatConfig
): Promise<string> {
  const prettier = await loadPrettier();
  const etaEjsPlugin = await loadPlugin();

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
