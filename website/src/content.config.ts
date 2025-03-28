import { defineCollection, z, reference } from 'astro:content'
import { glob, file } from 'astro/loaders'

const menuItemSchema = z.object({
  name: z.string(),
  link: z.string(),
  target: z.string().optional(),
})
const menus = defineCollection({
  loader: file('./src/content/menus.yml'),
  schema: z.object({
    items: menuItemSchema
      .extend({
        children: menuItemSchema.array().optional(),
        showArrow: z.boolean().optional(),
      })
      .array(),
  }),
})

const categories = defineCollection({
  loader: file('./src/content/categories.yml'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      featuredImage: image().optional(),
      publishDate: z.date(),
      publish: z.boolean().optional(),
      categories: reference('categories').array(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
    }),
})

const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      headshot: image().optional(),
      jobTitle: z.string(),
      email: z.string().optional(),
      linkedin: z.string().url().optional(),
      linkedinUsername: z.string().optional(),
      xSocial: z.string().url().optional(),
      xSocialUsername: z.string().optional(),
      github: z.string().url().optional(),
      githubUsername: z.string().optional(),
      order: z.number().default(999),
      publish: z.boolean().default(true),
    }),
})

const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
})

const faq = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '**/*.yml' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    items: z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .array(),
  }),
})
export const collections = { menus, categories, blog, team, legal, faq }
