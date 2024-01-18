// noinspection SpellCheckingInspection

import { type RemarkPlugin } from '@astrojs/markdown-remark'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

const plugin: RemarkPlugin = function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    file.data.astro ??= { frontmatter: {} }
    const fm = file.data.astro.frontmatter
    fm.minutesRead = Math.ceil(readingTime.minutes)
  }
}

export default plugin
