import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Root, Heading } from 'mdast'
import type { Properties } from 'hast'
import { visit } from 'unist-util-visit'

export const remarkHeadingId: RemarkPlugin = function () {
  return function (tree: Root) {
    visit(tree, 'heading', (node) => {
      const lastChild = node.children[node.children.length - 1]
      if (lastChild.type === 'text') {
        const text = lastChild.value.trimEnd()
        const matched = text.match(/ {#([^]+?)}$/)
        if (matched) {
          const id = matched[1]
          if (id.length > 0) {
            setNodeId(node, id)
            lastChild.value = text.substring(0, matched.index)
          }
        }
      }
    })
  }
}
export default remarkHeadingId

const setNodeId = (node: Heading, id: string) => {
  if (!node.data) {
    node.data = {}
  }
  if (!node.data.hProperties) {
    node.data.hProperties = {} as Properties
  }
  if (!(id in node.data.hProperties)) {
    Object.assign(node.data.hProperties, { id })
  }
}
