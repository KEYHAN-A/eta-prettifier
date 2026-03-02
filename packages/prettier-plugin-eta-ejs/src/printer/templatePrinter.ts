import { doc } from "prettier";

import type { TemplateAst } from "../types.js";

interface PrinterOptions {
  tabWidth?: number;
  useTabs?: boolean;
  etaEjsCollapseBlankLines?: boolean;
}

function normalizeSource(value: string, collapseBlankLines: boolean): string {
  const withoutTrailingSpace = value.replace(/\r\n/g, "\n");
  const normalized = withoutTrailingSpace
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n");

  if (!collapseBlankLines) {
    return normalized;
  }

  return normalized.replace(/\n{3,}/g, "\n\n");
}

function indentUnit(options: PrinterOptions): string {
  const tabWidth = Math.max(1, options.tabWidth ?? 2);
  return options.useTabs ? "\t" : " ".repeat(tabWidth);
}

function repeatIndent(level: number, unit: string): string {
  return unit.repeat(Math.max(0, level));
}

function stripTemplateTags(line: string): string {
  return line.replace(/<%[-_=#~]?[\s\S]*?%>/g, "");
}

function lineDeltaHtml(line: string): number {
  const stripped = stripTemplateTags(line).replace(/<!--[\s\S]*?-->/g, "");
  const closes = (stripped.match(/<\/[a-zA-Z][^>]*>/g) ?? []).length;
  const opens = (stripped.match(/<(?!\/|!)([a-zA-Z][\w:-]*)(?:\s[^>]*)?>/g) ?? []).length;
  const selfClosing = (stripped.match(/<(?!\/|!)([a-zA-Z][\w:-]*)(?:\s[^>]*)?\/>/g) ?? []).length;
  return opens - selfClosing - closes;
}

function startsWithClosingHtmlTag(line: string): boolean {
  return /^<\/[a-zA-Z][^>]*>/.test(line);
}

function controlTemplateInner(line: string): string | null {
  const match = line.match(/^<%(?![=#~\-])([\s\S]*?)%>$/);
  if (!match) {
    return null;
  }

  return (match[1] ?? "").trim();
}

function shouldOutdentTemplate(inner: string | null): boolean {
  return inner !== null && /^[)\]}]/.test(inner);
}

function shouldIndentTemplate(inner: string | null): boolean {
  return inner !== null && /[{([]\s*$/.test(inner);
}

export const templatePrinter = {
  print(path: { getValue(): TemplateAst }, options: PrinterOptions): doc.builders.Doc {
    const node = path.getValue();
    const unit = indentUnit(options);
    const collapseBlankLines = options.etaEjsCollapseBlankLines !== false;
    const normalized = normalizeSource(node.source, collapseBlankLines);
    const output: string[] = [];
    let templateIndent = 0;
    let htmlIndent = 0;

    for (const rawLine of normalized.split("\n")) {
      const line = rawLine.trim();
      if (!line) {
        if (output.length > 0 && output[output.length - 1] !== "") {
          output.push("");
        }
        continue;
      }

      const inner = controlTemplateInner(line);
      const nextTemplateIndent = shouldOutdentTemplate(inner) ? templateIndent - 1 : templateIndent;
      const htmlOutdent = startsWithClosingHtmlTag(line) ? 1 : 0;
      const level = Math.max(0, nextTemplateIndent + htmlIndent - htmlOutdent);
      output.push(`${repeatIndent(level, unit)}${line}`);

      templateIndent = shouldIndentTemplate(inner) ? nextTemplateIndent + 1 : nextTemplateIndent;
      htmlIndent = Math.max(0, htmlIndent + lineDeltaHtml(line));
    }

    if (output.length > 0 && output[output.length - 1] !== "") {
      output.push("");
    }

    return output.join("\n");
  }
};
