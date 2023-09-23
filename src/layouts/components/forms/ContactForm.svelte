<script lang="ts">
import { createForm } from 'felte'
import { z } from 'zod'
import { validateSchema } from './felte-validator-zod'
import reporter from '@felte/reporter-dom'
import providers from '@config/providers'
import { formsparkData, formsparkSubmit } from './formspark'
import { formErrorMap } from './error-map'
const contactFormData = formsparkData.extend({
  name: z.string().nonempty(),
  contact: z.object({
    email: z.string().email(),
    phone: z.string(),
  }),
  message: z.string().nonempty(),
  accept: z.boolean().refine((val) => val, { message: 'Bitte akzeptieren Sie die Datenschutzbedingungen' }),
})
type ContactFormData = z.infer<typeof contactFormData>
enum SubmitState {
  Unsubmitted,
  Success,
  Failure,
}

const { form, isSubmitting, isValid, reset } = createForm<ContactFormData>({
  onSubmit: async (values) => {
    return await formsparkSubmit(providers.formspark.forms.contact.id, values)
  },
  onSuccess: () => {
    submitState = SubmitState.Success
  },
  onError: () => {
    submitState = SubmitState.Failure
  },
  validate: validateSchema(contactFormData, formErrorMap),
  initialValues: {
    accept: false,
  },
  extend: [reporter({ single: true })],
})
let submitState = SubmitState.Unsubmitted
const resetSubmitState = function () {
  reset()
  submitState = SubmitState.Unsubmitted
}
$: isSubmittable = $isValid && !$isSubmitting
</script>

<form use:form>
  <input type="hidden" name="_email.from" value="infolektuell.de" />
  <input type="hidden" name="_email.subject" value="Neue Kontaktanfrage" />
  <label for="inputMessage">Was kann ich für Sie tun?</label>
  <textarea required name="message" id="inputMessage" rows="5" placeholder="Ihre Nachricht"></textarea>
  <div data-felte-reporter-dom-for="message" aria-live="polite"></div>
  <label for="inputName">Name</label>
  <input type="text" required name="name" id="inputName" placeholder="Alex Meyer" aria-describedby="name-validation" />
  <div id="name-validation" data-felte-reporter-dom-for="name" aria-live="polite"></div>
  <label for="inputEmail">Email-Adresse</label>
  <input type="email" required name="contact.email" id="inputEmail" placeholder="beispiel@beispiel.de" />
  <div data-felte-reporter-dom-for="contact.email" aria-live="polite"></div>
  <label for="inputPhone">Telefonnummer für Rückfragen (Optional)</label>
  <input type="tel" name="contact.phone" id="inputPhone" placeholder="01234 56789" />
  <div data-felte-reporter-dom-for="contact.phone" aria-live="polite"></div>
  <input type="checkbox" required name="accept" id="acceptInput" />
  <label for="acceptInput"
    >Hiermit akzeptiere ich die Verarbeitung meiner Angaben gemäß der <a href="/privacy">Datenschutzbedingungen</a
    >.</label
  >
  <div data-felte-reporter-dom-for="accept" aria-live="polite"></div>
  {#if submitState === SubmitState.Unsubmitted}
    <button type="submit" disabled="{!isSubmittable}">Absenden</button>
  {:else if submitState === SubmitState.Success}
    <p>
      Vielen Dank. Ihre Anfrage ist eingegangen und ich werde mich innerhalb der nächsten zwei Werktage bei Ihnen
      melden.
    </p>
    <button type="reset" on:click="{resetSubmitState}">Neue Anfrage</button>
  {:else if submitState === SubmitState.Failure}
    <p>Beim Absenden ist ein Fehler aufgetreten.</p>
    <button type="submit" disabled="{!isSubmittable}">Noch einmal versuchen</button>
  {/if}
</form>
