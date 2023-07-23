import * as astroPlugin from 'prettier-plugin-astro'
import * as sveltePlugin from 'prettier-plugin-svelte'

/** @type {import('prettier').Options} */
export default {
  plugins: [astroPlugin, sveltePlugin],
  singleQuote: true,
  semi: false,
  svelteStrictMode: true,
  svelteIndentScriptAndStyle: false,
}
