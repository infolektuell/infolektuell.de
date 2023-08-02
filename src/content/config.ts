import { defineCollection } from 'astro:content'
import { trainingData } from '@lib/schemas/training'

const trainings = defineCollection({
  type: 'content',
  schema: trainingData,
})

export const collections = { trainings }
