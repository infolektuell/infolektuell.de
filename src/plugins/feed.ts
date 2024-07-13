import { type AstroMarkdownOptions, createMarkdownProcessor } from '@astrojs/markdown-remark'
import remarkHeadingId from 'remark-custom-heading-id'
import remarkDirective from 'remark-directive'
import remarkMath from 'remark-math'
import { remarkDirectives } from './index'
import rehypeKatex from 'rehype-katex'
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
    remarkPlugins: [remarkHeadingId, remarkDirective, remarkDirectives, remarkMath],
    rehypePlugins: [
      [rehypeReplaceRelativeLinks, { prefix: 'https://infolektuell.de' }],
      [rehypeKatex, { output: 'mathml' }],
    ],
  }
  return createMarkdownProcessor(markdownOptions)
}
