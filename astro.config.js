// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkHeadingId, remarkGitInfo, remarkReadingTime } from './src/plugins/index'
import rehypeExternalLinks from 'rehype-external-links'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://infolektuell.de',
  markdown: {
    remarkPlugins: [remarkHeadingId, remarkGitInfo, remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  },
  integrations: [
    mdx(),
    sitemap(),
    svelte(),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        'fa6-regular': ['address-card'],
        'fa6-solid': ['angle-down', 'envelope', 'phone', 'mobile'],
        'fa6-brands': ['github', 'linkedin', 'mastodon'],
        tabler: ['brand-matrix'],
        openmoji: [
          'abacus',
          'chart-increasing',
          'graduation-cap',
          'light-bulb',
          'handshake',
          'memo',
          'mobile-phone-with-arrow',
          'postbox',
          'sparkle',
          'woman-pilot-medium-light-skin-tone',
          'zipper-mouth-face',
        ],
      },
    }),
  ],
  server: {
    port: 8080,
  },
})
