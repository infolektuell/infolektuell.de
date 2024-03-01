// Register `hName`, `hProperties` types, used when turning markdown to HTML:
/// <reference types="mdast-util-to-hast" />
// Register directive nodes in mdast:
/// <reference types="mdast-util-directive" />

import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Root } from 'mdast'
import type { Directives } from 'mdast-util-directive'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

const plugin: RemarkPlugin = function () {
  return function (tree: Root) {
    visit(tree, ['containerDirective', 'leafDirective', 'textDirective'], (node) => {
      const data = (node.data ??= {})
      const { name, attributes } = node as Directives
      const { tagName, properties } = h(name, attributes ?? {})
      data.hName = tagName
      data.hProperties = properties
    })
  }
}
export default plugin
