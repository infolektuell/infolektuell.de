import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import remarkHeadingId from 'remark-custom-heading-id'
import rehypeExternalLinks from 'rehype-external-links'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import astroBrokenLinksChecker from 'astro-broken-link-checker';

// Get the site URL from environment variable or use a default for local development

export default defineConfig({
  site: 'https://infolektuell.de',
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
    remarkRehype: {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel(referenceIndex, rereferenceIndex) {
        return 'Hochspringen zu: ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
      },
    },
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['noopener', 'noreferrer', 'nofollow'],
          target: '_blank',
          properties: { 'aria-description': 'Externer Link, öffnet in neuem Fenster' }
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
    astroBrokenLinksChecker({
      logFilePath: 'broken-links.log', // Optional: specify the log file path
      checkExternalLinks: false // Optional: check external links (currently, caching to disk is not supported, and it is slow )
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 10000, // Increase the entry limit if you have many pages
    }),
    mdx(),
    svelte(),
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
