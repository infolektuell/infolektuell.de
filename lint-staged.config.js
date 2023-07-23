export default {
  '*.{json,yaml,yml}': ['prettier -w -u'],
  '*.{js,mjs,cjs}': ['prettier -w -u', 'eslint --fix'],
  '*.{md,mdx}': ['prettier -w -u', 'markdownlint --fix'],
}
