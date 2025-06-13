import { type AstroMarkdownOptions, createMarkdownProcessor } from '@astrojs/markdown-remark'
import remarkHeadingId from 'remark-custom-heading-id'
import { rehypeAbsoluteUrl } from '@markdown-plugins/rehype-absolute-url.ts'

export const createPostRenderer = async function () {
  const markdownOptions: AstroMarkdownOptions = {
    remarkRehype: {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex, rereferenceIndex) {
        return 'Hochspringen nach: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    },
    syntaxHighlight: false,
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [
      [rehypeAbsoluteUrl, { prefix: 'https://infolektuell.de' }],
    ],
  }
  return createMarkdownProcessor(markdownOptions)
}
