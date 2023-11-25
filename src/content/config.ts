import { defineCollection, z } from 'astro:content'
import {
  authorSchema,
  localeSchema,
  menuSchema,
  tagSchema,
  eventSchema,
  pageSchema,
  coachingSchema,
  courseSchema,
  serviceSchema,
  quizSchema,
  trainingSchema,
} from '../entities'

const locales = defineCollection({
  type: 'data',
  schema: localeSchema,
})

const menus = defineCollection({
  type: 'data',
  schema: menuSchema,
})

const tags = defineCollection({
  type: 'data',
  schema: tagSchema,
})

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
      cover: image().optional(),
      cover_alt: z.string().optional(),
      publishedTime: z.coerce.date().default(new Date()),
    }),
})

const events = defineCollection({
  type: 'content',
  schema: eventSchema,
})

const coachings = defineCollection({
  type: 'content',
  schema: coachingSchema,
})

const courses = defineCollection({
  type: 'content',
  schema: courseSchema,
})

const services = defineCollection({
  type: 'content',
  schema: serviceSchema,
})

const trainings = defineCollection({
  type: 'content',
  schema: trainingSchema,
})

const quizzes = defineCollection({
  type: 'data',
  schema: quizSchema,
})

export const collections = {
  authors,
  locales,
  menus,
  tags,
  coachings,
  courses,
  events,
  pages,
  posts,
  quizzes,
  services,
  trainings,
}
