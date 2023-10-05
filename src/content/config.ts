import { defineCollection } from 'astro:content'
import { authorSchema } from '@lib/schemas/author'
import { eventSchema } from '@lib/schemas/event'
import { trainingData } from '@lib/schemas/training'

const authors = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    return authorSchema.extend({
      photo: image().optional(),
    })
  },
})

const events = defineCollection({
  type: 'content',
  schema: eventSchema,
})

const trainings = defineCollection({
  type: 'content',
  schema: trainingData,
})

export const collections = { authors, events, trainings }
