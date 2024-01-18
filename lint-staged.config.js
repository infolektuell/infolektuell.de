// noinspection JSUnusedGlobalSymbols

export default {
  '*.{json,yaml,yml}': ['prettier -w -u'],
  '*.{js,mjs,cjs,ts}': ['prettier -w -u', 'eslint --fix'],
  '*.md': ['prettier -w -u', 'markdownlint --fix'],
}
