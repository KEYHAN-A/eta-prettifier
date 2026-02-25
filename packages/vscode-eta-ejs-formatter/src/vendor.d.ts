declare module "./vendor/prettier/index.mjs" {
  import type prettier from "prettier";
  export default prettier;
}

declare module "./vendor/prettier-plugin/index.js" {
  const plugin: unknown;
  export default plugin;
}
