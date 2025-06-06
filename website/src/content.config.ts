import { type CollectionEntry, defineCollection, z, reference } from 'astro:content'
import { glob, file } from 'astro/loaders'
import type { Icon } from '@lucide/astro'

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
  loader: glob({ base: './src/content/blog', pattern: '**/*.(md|mdx)' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      featuredImage: image().optional(),
      pubDate: z.date(),
      draft: z.boolean().default(false),
      categories: reference('categories').array(),
      video: z.object({
        id: z.string(),
        title: z.string().optional(),
      }).optional(),
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

const assistiveTech = defineCollection({
  loader: glob({ base: './src/content/assistive-tech', pattern: '**/*.mdx' }),
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

const stats = defineCollection({
  loader: glob({ base: './src/content/stats', pattern: '**/*.yml' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    button: z.object({
      link: z.string(),
      text: z.string(),
      variant: z.enum(['primary', 'secondary', 'accent', 'ghostLight', 'ghostDark']).default('primary')
    }).optional(),
    stats: z
      .object({
        value: z.number(),
        label: z.string(),
        prefix: z.string().optional(),
        suffix: z.string().optional(),
      })
      .array(),
  }),
})

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.yml' }),
  schema: ({ image }) => z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    logos: z.object({
      name: z.string(),
      logo: image(),
    }).array(),
  })
})

const features = defineCollection({
  loader: glob({ base: './src/content/features', pattern: '**/*.yml' }),
  schema: z.object({
    title: z.string().optional(),
    features: z.object({
      icon: z.string().transform(async (val: string): Promise<typeof Icon | undefined> => {
        const icons = import.meta.glob<{ default: typeof Icon }>('@lucide/astro/icons/*.svg')
        const icon = await icons[val]?.()
        return icon?.default
      }),
      title: z.string(),
      description: z.string(),
    }).array(),
  }),
})

export const collections = { menus, categories, blog, team, 'assistive-tech': assistiveTech, legal, faq, features, partners, stats }

export const sortBlogPosts = function (posts: CollectionEntry<'blog'>[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
