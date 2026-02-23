import type { TemplateAst } from "../types.js";
import { parseTemplate } from "./shared.js";

export function parseEta(text: string): TemplateAst {
  return parseTemplate(text, "eta");
}
