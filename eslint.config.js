// noinspection JSUnusedGlobalSymbols

// Globals for browser code
import globals from 'globals'

// Javascript standard style with prettier
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import standardJsConfig from 'eslint-config-standard'
import eslintConfigPrettier from 'eslint-config-prettier'

// Typescript
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

// Astro
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

// Svelte
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default [
  {
    ignores: ['.astro/**/*', 'dist/**/*', 'src/env.d.ts'],
  },

  // Standard style
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
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

  {
    files: ['src/**/*.{js,jsx,ts,tsx,astro,svelte}'],
    ignores: ['src/**/*.astro/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        extraFileExtensions: ['.astro', '.svelte'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs['strict-type-checked'].rules,
      ...tsPlugin.configs['stylistic-type-checked'].rules,
      '@typescript-eslint/no-unused-vars': ['off', 'type'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'no-self-assign': ['off'],
    },
  },

  // Astro components
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
      },
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
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs.strict.rules,
      ...tsPlugin.configs.stylistic.rules,
    },
  },

  // Svelte components
  {
    files: ['src/**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    plugins: {
      svelte: sveltePlugin,
    },
    processor: 'svelte/svelte',
    rules: {
      ...sveltePlugin.configs.recommended.rules,
      ...sveltePlugin.configs.prettier.rules,
      'svelte/no-at-html-tags': ['off'],
    },
  },

  // Disable formatting-related rules
  eslintConfigPrettier,
]
