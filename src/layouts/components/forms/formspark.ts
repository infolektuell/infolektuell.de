import { z } from 'zod'
import Botpoison from '@botpoison/browser'
import providers from '@config/providers'
const botpoison = new Botpoison({ publicKey: providers.botpoison.publicKey })

const formsparkEmail = z
  .object({
    from: z.string().default('Infolektuell.de'),
    subject: z.string().min(1),
    replyTo: z.string().email(),
  })
  .partial()

export const formsparkData = z
  .object({
    _botpoison: z.string(),
    _email: formsparkEmail,
  })
  .partial()

export type FormsparkData = z.infer<typeof formsparkData>

export const formsparkSubmit = async function <T extends FormsparkData>(id: string, values: T) {
  const url = `https://submit-form.com/${id}`
  const { solution } = await botpoison.challenge()
  values._botpoison = solution
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(values),
  }
  const response = await fetch(url, options)
  if (response.ok) {
    return response.json()
  } else {
    throw new FetchError(response)
  }
}

class FetchError extends Error {
  public status: number
  constructor(public response: Response) {
    super(response.statusText)
    this.status = response.status
  }
}
