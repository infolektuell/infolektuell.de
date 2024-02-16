import { type AstroMarkdownOptions, createMarkdownProcessor } from '@astrojs/markdown-remark'
import { remarkHeadingId } from './remark-heading-id'
import { rehypeReplaceRelativeLinks } from './rehype-replace-relative-links'

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
    rehypePlugins: [[rehypeReplaceRelativeLinks, { prefix: 'https://infolektuell.de' }]],
  }
  return createMarkdownProcessor(markdownOptions)
}
