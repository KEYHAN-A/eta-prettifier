import type { TemplateAst } from "../types.js";
import { parseTemplate } from "./shared.js";

export function parseEjs(text: string): TemplateAst {
  return parseTemplate(text, "ejs");
}
