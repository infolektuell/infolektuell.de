// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkHeadingId } from 'remark-custom-heading-id'
import remarkGitInfo from './src/lib/plugins/remark-git-info'
import remarkReadingTime from './src/lib/plugins/remark-reading-time'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://infolektuell.de',
  integrations: [mdx(), sitemap(), svelte()],
  markdown: {
    remarkPlugins: [remarkHeadingId, remarkGitInfo, remarkReadingTime],
  },
  server: {
    port: 8080,
  },
})
