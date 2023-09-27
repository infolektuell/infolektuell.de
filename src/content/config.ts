import { defineCollection } from 'astro:content'
import { authorSchema } from '@lib/schemas/author'
import { trainingData } from '@lib/schemas/training'

const authors = defineCollection({
  type: 'data',
  schema: ({ image }) => {
    return authorSchema.extend({
      photo: image().optional(),
    })
  },
})

const trainings = defineCollection({
  type: 'content',
  schema: trainingData,
})

export const collections = { authors, trainings }
