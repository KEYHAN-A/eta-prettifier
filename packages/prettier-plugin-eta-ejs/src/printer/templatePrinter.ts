import { doc } from "prettier";

import type { TagChunk, TemplateAst, TemplateChunk } from "../types.js";

function normalizeText(value: string): string {
  const withoutTrailingSpace = value
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n");

  return withoutTrailingSpace.replace(/\n{3,}/g, "\n\n");
}

function normalizeInner(inner: string): string {
  const trimmed = inner.trim();
  if (!trimmed) {
    return "";
  }

  return trimmed
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
}

function printTag(chunk: TagChunk): string {
  const cleanedInner = normalizeInner(chunk.inner);

  if (!cleanedInner) {
    return `${chunk.open}${chunk.close}`;
  }

  if (chunk.open === "<%#") {
    return `${chunk.open} ${cleanedInner.replace(/\s+/g, " ")} ${chunk.close}`;
  }

  return `${chunk.open} ${cleanedInner} ${chunk.close}`;
}

function printChunk(chunk: TemplateChunk): string {
  if (chunk.type === "text") {
    return normalizeText(chunk.value);
  }

  return printTag(chunk);
}

export const templatePrinter = {
  print(path: { getValue(): TemplateAst }): doc.builders.Doc {
    const node = path.getValue();
    return node.body.map((chunk) => printChunk(chunk));
  },
};
