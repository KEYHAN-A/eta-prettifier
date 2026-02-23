import * as vscode from "vscode";

import { EtaEjsFormatter } from "./formatter.js";

export function activate(context: vscode.ExtensionContext): void {
  const formatter = new EtaEjsFormatter();

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      [{ language: "eta" }, { language: "ejs" }],
      formatter
    )
  );

  context.subscriptions.push(
    vscode.languages.registerDocumentRangeFormattingEditProvider(
      [{ language: "eta" }, { language: "ejs" }],
      formatter
    )
  );
}

export function deactivate(): void {}
