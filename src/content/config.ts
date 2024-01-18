import { defineCollection, z } from 'astro:content'
import { authorSchema, eventSchema, pageSchema, productSchema, quizSchema } from '../entities'

const authors = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    authorSchema.extend({
      photo: image().optional(),
    }),
})

const pages = defineCollection({
  type: 'content',
  schema: pageSchema,
})

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    pageSchema.extend({
      publishedTime: z.date(),
      cover: image().optional(),
      cover_alt: z.string().optional(),
    }),
})

const events = defineCollection({
  type: 'content',
  schema: eventSchema,
})

const products = defineCollection({
  type: 'content',
  schema: productSchema,
})

const quizzes = defineCollection({
  type: 'data',
  schema: quizSchema,
})

export const collections = {
  authors,
  events,
  pages,
  posts,
  products,
  quizzes,
}
