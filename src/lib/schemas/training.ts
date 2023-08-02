import { z } from 'zod'
import { baseData } from './base'

export const trainingData = baseData.extend({
  title: z.string(),
  subtitle: z.string().optional(),
  order: z.number().int().min(1),
  keywords: z.string().array().default([]),
  sessions: z.number().int().min(1).default(5),
  price: z.string().default('120/h'),
  audience: z.string().array().default([]),
})

export type TrainingData = z.infer<typeof trainingData>
