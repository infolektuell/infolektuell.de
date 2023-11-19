// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkHeadingId } from 'remark-custom-heading-id'
import remarkGitInfo from './src/plugins/remark-git-info'
import remarkReadingTime from './src/plugins/remark-reading-time'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://infolektuell.de',
  integrations: [
    mdx(),
    sitemap(),
    svelte(),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        'fa6-regular': ['address-card'],
        'fa6-solid': ['envelope', 'phone', 'mobile'],
        'fa6-brands': ['github', 'linkedin', 'mastodon', 'twitter'],
        tabler: ['brand-matrix'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingId, remarkGitInfo, remarkReadingTime],
  },
  server: {
    port: 8080,
  },
})
