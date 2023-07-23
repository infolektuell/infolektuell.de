// Globals for browser code
import globals from 'globals'

// Javascript standard style with prettier
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import standardJsConfig from 'eslint-config-standard'
import prettierConfig from 'eslint-config-prettier'

// Astro
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

// Svelte
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default [
  {
    ignores: ['.astro/**/*', 'dist/**/*'],
  },

  // Standard style
  {
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...standardJsConfig.rules,
    },
  },

  // Astro components
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: astroParser,
    },
    plugins: {
      astro: astroPlugin,
    },
    processor: 'astro/astro',
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },

  // Client-side scripts in Astro components
  {
    files: ['**/*.astro/*.js', '*.astro/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Svelte components
  {
    files: ['**/*.svelte'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: svelteParser,
    },
    plugins: {
      svelte: sveltePlugin,
    },
    processor: 'svelte/svelte',
    rules: {
      ...sveltePlugin.configs.recommended.rules,
    },
  },

  // Disable rules interferring with prettier
  {
    rules: {
      ...prettierConfig.rules,
      ...sveltePlugin.configs.prettier.rules,
    },
  },
]
