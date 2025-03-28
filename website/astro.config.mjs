import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

import remarkHeadingId from 'remark-custom-heading-id'
import rehypeExternalLinks from 'rehype-external-links'

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321'

export default defineConfig({
  site,
  outDir: './build/dist',
  trailingSlash: 'always',
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  env: {
    schema: {
      FORM_SUBMIT_ENDPOINT: envField.string({ context: 'server', access: 'public', url: true }),
      CONTACT_FORM_ID: envField.string({ context: 'server', access: 'public' }),
      BOTPOISON_PUBLIC_KEY: envField.string({ context: 'server', access: 'public' }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`,
        },
      },
    },
    optimizeDeps: {
      include: ['aos'],
    },
  },
  markdown: {
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: '',
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 10000, // Increase entry limit if you have many pages
    }),
  ],
  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: 'https',
      },
      {
        protocol: 'http',
      },
    ],
  },
})
