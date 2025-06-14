import type { Root, Element } from 'hast'
import { visit, CONTINUE } from 'unist-util-visit'

export type Options = {
  prefix: string
}

export const rehypeAbsoluteUrl = function ({ prefix }: Options) {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') {
        return CONTINUE
      }
      const { href } = node.properties
      if (typeof href === 'string' && href.startsWith('/')) {
        node.properties.href = prefix + href
      }
    })
  }
}
