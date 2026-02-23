import * as vscode from "vscode";
import { hasBalancedTemplateTags } from "./templateRange.js";
import { formatTemplateSource } from "./formatTemplate.js";

interface FormatterConfig {
  printWidth: number;
  tabWidth: number;
  useTabs: boolean;
  semi: boolean;
  singleQuote: boolean;
}

function getConfig(document: vscode.TextDocument): FormatterConfig {
  const cfg = vscode.workspace.getConfiguration("etaEjsPrettifier", document.uri);
  return {
    printWidth: cfg.get<number>("printWidth", 100),
    tabWidth: cfg.get<number>("tabWidth", 2),
    useTabs: cfg.get<boolean>("useTabs", false),
    semi: cfg.get<boolean>("semi", true),
    singleQuote: cfg.get<boolean>("singleQuote", false),
  };
}

async function formatContent(document: vscode.TextDocument, source: string): Promise<string> {
  const cfg = getConfig(document);
  const languageId = document.languageId === "eta" ? "eta" : "ejs";

  return formatTemplateSource(languageId, source, cfg);
}

export class EtaEjsFormatter
  implements vscode.DocumentFormattingEditProvider, vscode.DocumentRangeFormattingEditProvider
{
  async provideDocumentFormattingEdits(
    document: vscode.TextDocument
  ): Promise<vscode.TextEdit[]> {
    const source = document.getText();
    const output = await formatContent(document, source);
    const end = document.lineAt(document.lineCount - 1).range.end;

    return [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(0, 0), end), output)];
  }

  async provideDocumentRangeFormattingEdits(
    document: vscode.TextDocument,
    range: vscode.Range
  ): Promise<vscode.TextEdit[]> {
    const selectedText = document.getText(range);

    if (!selectedText.trim()) {
      return [];
    }

    // Template syntax can depend on surrounding code. If a range has unbalanced tags,
    // fallback to whole-document formatting to avoid emitting broken output.
    if (!hasBalancedTemplateTags(selectedText)) {
      return this.provideDocumentFormattingEdits(document);
    }

    const output = await formatContent(document, selectedText);
    return [vscode.TextEdit.replace(range, output)];
  }
}
