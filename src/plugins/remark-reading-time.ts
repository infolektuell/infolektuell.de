import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Node } from 'unist'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { VFile } from 'vfile'

const plugin: RemarkPlugin = function remarkReadingTime() {
  return function (tree: Node, file: VFile) {
    const data = file.data.astro
    if (!data?.frontmatter) {
      return
    }
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.frontmatter.minutesRead = Math.ceil(readingTime.minutes)
  }
}

export default plugin
