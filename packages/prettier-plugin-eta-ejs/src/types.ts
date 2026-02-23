export type Dialect = "eta" | "ejs";

export interface TextChunk {
  type: "text";
  value: string;
  start: number;
  end: number;
}

export interface TagChunk {
  type: "tag";
  open: string;
  inner: string;
  close: string;
  start: number;
  end: number;
}

export type TemplateChunk = TextChunk | TagChunk;

export interface TemplateAst {
  type: "TemplateProgram";
  dialect: Dialect;
  body: TemplateChunk[];
  source: string;
  start: number;
  end: number;
}
