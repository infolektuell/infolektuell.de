// Globals for browser code
import globals from 'globals'

// Javascript standard style with prettier
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import standardJsConfig from 'eslint-config-standard'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['.astro/**/*', 'dist/**/*'],
  },

  // Browser code in src
  {
    files: ['src/**/*'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
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

  // Disable rules interferring with prettier
  {
    rules: {
      ...prettierConfig.rules,
    }
  },
]
