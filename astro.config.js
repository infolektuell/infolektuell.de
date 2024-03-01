// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import { remarkHeadingId, remarkGitInfo, remarkDirectives, remarkReadingTime } from './src/plugins/index'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeMermaid from 'rehype-mermaid'
import rehypeShikiji from 'rehype-shikiji'
import rehypeKatex from 'rehype-katex'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

const site = 'https://infolektuell.de'
// https://astro.build/config
export default defineConfig({
  site,
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex, rereferenceIndex) {
        return 'Hochspringen nach: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    },
    syntaxHighlight: false,
    remarkPlugins: [remarkHeadingId, remarkGitInfo, remarkReadingTime, remarkDirective, remarkDirectives, remarkMath],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank' }],
      rehypeKatex,
      rehypeMermaid,
      [rehypeShikiji, { theme: 'github-dark' }],
    ],
  },
  integrations: [
    mdx(),
    sitemap({
      filter(page) {
        return !page.startsWith(site + '/tags/') && !page.startsWith(site + '/legal/')
      },
    }),
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
