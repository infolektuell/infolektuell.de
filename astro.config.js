// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkHeadingId, remarkGitInfo, remarkReadingTime } from './src/plugins/index'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeMermaid from 'rehype-mermaid'
import rehypeShikiji from 'rehype-shikiji'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://infolektuell.de',
  markdown: {
    remarkPlugins: [remarkHeadingId, remarkGitInfo, remarkReadingTime],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank' }],
      rehypeMermaid,
      [rehypeShikiji, { theme: 'github-dark' }],
    ],
    remarkRehype: {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex, rereferenceIndex) {
        return 'Hochspringen nach: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    },
    syntaxHighlight: false,
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
      },
    }),
  ],
  server: {
    port: 8080,
  },
})
