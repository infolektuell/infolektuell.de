import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Node } from 'unist'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { VFile } from 'vfile'

type AstroData = { frontmatter: Record<string, unknown> }

const plugin: RemarkPlugin = function remarkReadingTime() {
  return function (tree: Node, file: VFile) {
    if (!file.data.astro) {
      return
    }
    const astroData = file.data.astro as AstroData
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    astroData.frontmatter.minutesRead = readingTime.minutes
  }
}

export default plugin
