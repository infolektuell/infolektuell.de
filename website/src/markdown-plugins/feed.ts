import { Buffer } from "node:buffer";

import minifyHtml from "@minify-html/node";
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-custom-heading-id'
import remarkStripMdxImportsExports from 'remark-strip-mdx-imports-exports'
import { rehypeAbsoluteUrl } from '@markdown-plugins/rehype-absolute-url.ts'
import rehypeStringify from "rehype-stringify";
import remarkMarkers from "remark-flexible-markers";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function mdxToHtml(
  mdxContent: string,
  prefix: string,
): Promise<string> {
  const result = await unified()
    .use(remarkParse) // 1. Parse Markdown/MDX text -> MDAST
    .use(remarkGfm)
    .use(remarkHeadingId)
    .use(remarkMdx) // 2. Handle MDX specific syntax (JSX, imports/exports)
    .use(remarkStripMdxImportsExports)
    .use(remarkMarkers, { markerClassName: () => [] }) // 3. Handle <mark> correctly
    .use(remarkRehype, {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex: number, rereferenceIndex: number) {
        return 'Hochspringen zu: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    }) // 6. Bridge: Convert MDAST -> HAST
    .use(rehypeAbsoluteUrl, { prefix }) // 7. Custom: Convert relative URLs -> absolute
    .use(rehypeStringify) // 8. Convert HAST -> HTML string
    .process(mdxContent);

  // 9. Minify the HTML safely
  return minifyHtml
    .minify(Buffer.from(result.toString()), { keep_closing_tags: true })
    .toString();
}
