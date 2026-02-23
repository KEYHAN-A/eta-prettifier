export function hasBalancedTemplateTags(source: string): boolean {
  const openCount = (source.match(/<%[-_=#~]?/g) ?? []).length;
  const closeCount = (source.match(/%>/g) ?? []).length;
  return openCount === closeCount;
}
