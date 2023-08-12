<script lang="ts">
import { createForm } from 'felte'
import { z } from 'zod'
import { validateSchema } from '@felte/validator-zod'
import reporter from '@felte/reporter-dom'
import providers from '@config/providers'
import { formsparkData, formsparkSubmit } from './formspark'

const contactFormData = formsparkData.extend({
  name: z.string().nonempty(),
  contact: z.discriminatedUnion('preferred', [
    z.object({
      preferred: z.literal('email'),
      email: z.string().email(),
    }),
    z.object({
      preferred: z.literal('phone'),
      phone: z.string().nonempty(),
    }),
  ]),
  message: z.string().nonempty(),
  accept: z.boolean().refine((val) => val),
})
type ContactFormData = z.infer<typeof contactFormData>

const { form, data, isSubmitting } = createForm<ContactFormData>({
  onSubmit: async (values) => {
    return await formsparkSubmit(providers.formspark.forms.contact.id, values)
  },
  onSuccess: (response) => {
    console.log(response)
  },
  onError: (errors) => {
    console.log(errors)
  },
  validate: validateSchema(contactFormData),
  initialValues: {
    contact: {
      preferred: 'email',
    },
    accept: false,
  },
  extend: [reporter({ single: true })],
})
</script>

<pre>{JSON.stringify($data, null, 2)}</pre>
<form use:form data-botpoison-public-key="{providers.botpoison.publicKey}">
  <input type="hidden" name="_email.from" value="infolektuell.de" />
  <input type="hidden" name="_email.subject" value="Neue Kontaktanfrage" />
  <label for="inputName">Name</label>
  <input type="text" required name="name" id="inputName" placeholder="Alex Anonym" aria-describedby="name-validation" />
  <div id="name-validation" data-felte-reporter-dom-for="name" aria-live="polite"></div>
  <fieldset>
    <legend>Wie soll ich Ihre Anfrage beantworten?</legend>
    <input type="radio" checked id="prefer_email" name="contact.preferred" value="email" />
    <label for="prefer_email">Email</label>
    <input type="radio" id="prefer_phone" name="contact.preferred" value="phone" />
    <label for="prefer_phone">Telefon</label>
    {#if $data.contact.preferred === 'email'}
      <label for="inputEmail">Email</label>
      <input type="email" required name="contact.email" id="inputEmail" placeholder="beispiel@beispiel.de" />
      <div data-felte-reporter-dom-for="contact.email" aria-live="polite"></div>
    {/if}
    {#if $data.contact.preferred === 'phone'}
      <label for="inputPhone">Telefon</label>
      <input type="tel" required name="contact.phone" id="inputPhone" placeholder="01234 56789" />
      <div data-felte-reporter-dom-for="contact.phone" aria-live="polite"></div>
    {/if}
  </fieldset>
  <label for="inputMessage">Nachricht</label>
  <textarea required name="message" id="inputMessage" rows="5" placeholder="Ihre Nachricht"></textarea>
  <div data-felte-reporter-dom-for="message" aria-live="polite"></div>
  <label for="acceptInput"> Ich akzeptiere die Datenschutzbedingungen. </label>
  <input type="checkbox" required name="accept" id="acceptInput" />
  <div data-felte-reporter-dom-for="accept" aria-live="polite"></div>
  <button type="submit" disabled="{$isSubmitting}">Abschicken</button>
</form>
