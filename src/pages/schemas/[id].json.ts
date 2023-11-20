import type { GetStaticPaths, APIRoute } from 'astro'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { quizSchema } from '../../entities/quiz.ts'

const schemaMap = {
  story: quizSchema,
}

export const getStaticPaths: GetStaticPaths = function () {
  return Object.entries(schemaMap).map((e) => ({
    params: { id: e[0] },
  }))
}

export const GET: APIRoute = function ({ params }) {
  const { id } = params
  if (!id) {
    return new Response(null, {
      status: 400,
    })
  }
  if (id in schemaMap) {
    const schema = schemaMap[id as keyof typeof schemaMap]
    const compiled = zodToJsonSchema(schema, { name: id })
    return new Response(JSON.stringify(compiled), {
      headers: {
        'Content-Type': 'text/json',
      },
    })
  } else {
    return new Response(null, {
      status: 404,
    })
  }
}
