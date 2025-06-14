import { Buffer } from "node:buffer";

import minifyHtml from "@minify-html/node";
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-custom-heading-id'
import remarkStripMdxImportsExports from 'remark-strip-mdx-imports-exports'
import { rehypeAbsoluteUrl } from './rehype-absolute-url.ts'
import rehypeStringify from "rehype-stringify";
import remarkMarkers from "remark-flexible-markers";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function mdxToHtml(mdxContent: string, prefix: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHeadingId)
    .use(remarkMdx)
    .use(remarkStripMdxImportsExports)
    .use(remarkMarkers, { markerClassName: () => [] })
    .use(remarkRehype, {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex: number, rereferenceIndex: number) {
        return 'Hochspringen zu: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    })
    .use(rehypeAbsoluteUrl, { prefix })
    .use(rehypeStringify)
    .process(mdxContent);

  return minifyHtml
    .minify(Buffer.from(result.toString()), { keep_closing_tags: true })
    .toString();
}
