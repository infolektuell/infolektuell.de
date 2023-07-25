// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkHeadingId } from 'remark-custom-heading-id'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://infolektuell.de',
  integrations: [mdx(), sitemap(), svelte()],
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
  compressHTML: true,
  server: {
    port: 8080,
  },
})
