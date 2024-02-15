import type { APIRoute } from 'astro'
import { dedent } from 'ts-dedent'

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = dedent`
    User-agent: *
    Allow: /

    Sitemap: ${new URL('sitemap-index.xml', site).href}
  `
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
