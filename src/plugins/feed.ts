import { type AstroMarkdownOptions, createMarkdownProcessor } from '@astrojs/markdown-remark'
import config from '../../astro.config.js'
import { remarkHeadingId } from './remark-heading-id'
import { rehypeReplaceRelativeLinks } from './rehype-replace-relative-links'

export const createPostRenderer = async function () {
  const markdownOptions: AstroMarkdownOptions = {
    ...config.markdown,
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [[rehypeReplaceRelativeLinks, { prefix: 'https://infolektuell.de' }]],
  }
  return createMarkdownProcessor(markdownOptions)
}

export const processor = await createPostRenderer()
