import { reference, z } from 'astro:content'
import { markdownSchema } from './markdown'

export const baseQuestionSchema = z.object({
  text: markdownSchema,
})

export const levelSchema = z.enum(['right', 'neutral', 'wrong']).default('wrong')
export type Level = z.infer<typeof levelSchema>

export const choiceSchema = z.object({
  text: z.string(),
  level: levelSchema,
  category: z.string().optional(),
  feedback: markdownSchema,
})
export type Choice = z.infer<typeof choiceSchema>

export const questionFormatSchema = z.enum(['select', 'input'])
export type QuestionFormat = z.infer<typeof questionFormatSchema>

export const selectQuestionSchema = baseQuestionSchema.extend({
  format: z.literal(questionFormatSchema.enum.select),
  amount: z.number().int().positive().default(1),
  choices: choiceSchema.array(),
})
export type SelectQuestion = z.infer<typeof selectQuestionSchema>

const numberInputSchema = z.object({
  type: z.literal('number'),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  value: z.number(),
})
export type NumberInput = z.infer<typeof numberInputSchema>

const textInputSchema = z.object({
  type: z.literal('text'),
  multiline: z.boolean().default(false),
  minlength: z.number().int().positive().optional(),
  maxlength: z.number().int().positive().optional(),
  value: z.string(),
})
export type TextInput = z.infer<typeof textInputSchema>

const inputSchema = z.discriminatedUnion('type', [numberInputSchema, textInputSchema])

export const inputQuestionSchema = baseQuestionSchema.extend({
  format: z.literal(questionFormatSchema.enum.input),
  trials: z.number().int().positive().default(3),
  feedback: markdownSchema,
  input: inputSchema,
})
export type InputQuestion = z.infer<typeof inputQuestionSchema>

export const questionSchema = z.discriminatedUnion('format', [selectQuestionSchema, inputQuestionSchema])
export type Question = z.infer<typeof questionSchema>

export const quizSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  lang: reference('locales').default('de-DE'),
  intro: markdownSchema,
  questions: questionSchema.array().default([]),
  outro: markdownSchema,
})
export type Quiz = z.infer<typeof quizSchema>
