import type { Dialect, TagChunk, TemplateAst, TemplateChunk } from "../types.js";

const TAG_PATTERN = /<%[-_=#~]?[\s\S]*?%>/g;

export function parseTemplate(source: string, dialect: Dialect): TemplateAst {
  const body: TemplateChunk[] = [];
  let cursor = 0;

  for (const match of source.matchAll(TAG_PATTERN)) {
    const value = match[0];
    const start = match.index ?? 0;
    const end = start + value.length;

    if (start > cursor) {
      body.push({
        type: "text",
        value: source.slice(cursor, start),
        start: cursor,
        end: start,
      });
    }

    body.push(parseTag(value, start, end));
    cursor = end;
  }

  if (cursor < source.length) {
    body.push({
      type: "text",
      value: source.slice(cursor),
      start: cursor,
      end: source.length,
    });
  }

  return {
    type: "TemplateProgram",
    dialect,
    body,
    source,
    start: 0,
    end: source.length,
  };
}

function parseTag(raw: string, start: number, end: number): TagChunk {
  const close = "%>";
  const innerRaw = raw.slice(2, -2);
  const open = `<%${innerRaw.charAt(0).match(/[-_=#~]/) ? innerRaw.charAt(0) : ""}`;
  const inner = open.length === 3 ? innerRaw.slice(1) : innerRaw;

  return {
    type: "tag",
    open,
    inner,
    close,
    start,
    end,
  };
}
