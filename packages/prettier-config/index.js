export default {
  arrowParens: "always",
  bracketSameLine: false,
  objectWrap: "preserve",
  bracketSpacing: true,
  semi: true,
  experimentalOperatorPosition: "end",
  experimentalTernaries: false,
  singleQuote: false,
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  trailingComma: "all",
  singleAttributePerLine: true,
  proseWrap: "preserve",
  insertPragma: false,
  requirePragma: false,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
  printWidth: 120,
  tabWidth: 2,
  plugins: [
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
    "prettier-plugin-sort-json"
  ],
  jsonRecursiveSort: true
}
