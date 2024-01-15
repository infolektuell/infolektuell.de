import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { remarkHeadingId } from './remark-heading-id'
import remarkRehype from 'remark-rehype'
import { rehypeReplaceRelativeLinks } from './rehype-replace-relative-links'
import rehypeStringify from 'rehype-stringify'

const processor = unified()
  .use(remarkParse)
  .use(remarkHeadingId)
  .use(remarkRehype)
  .use(rehypeReplaceRelativeLinks, { prefix: 'https://infolektuell.de' })
  .use(rehypeStringify)

export const renderPost = async function (body: string): Promise<string> {
  const file = await processor.process(body)
  return String(file)
}
