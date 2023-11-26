import { z } from 'astro:content'
import { micromark } from 'micromark'
import { math, mathHtml } from 'micromark-extension-math'

const compileMarkdown = (value: string): string => {
  if (!value) {
    return ''
  }
  return micromark(value, { extensions: [math()], htmlExtensions: [mathHtml()] })
}

export const markdownSchema = z.string().transform(compileMarkdown)
