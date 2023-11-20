<script lang="ts">
import { onMount } from 'svelte'
import Botpoison from '@botpoison/browser'
import providers from '@config/providers.ts'
import Message from '../bulma/Message.svelte'
const FORMSPARK_ACTION_URL = `${providers.formspark.endpoint}/${providers.formspark.forms.contact.id}`
let botpoison: Botpoison
onMount(() => {
  botpoison = new Botpoison({ publicKey: providers.botpoison.publicKey })
})
type FormData = {
  message: string
  name: string
  email: string
  phone?: string
  accept: boolean
}
let formData: FormData
let submitting = false
let submissions: FormData[] = []
let failed = false
const initializeForm = () => {
  formData = {
    message: '',
    name: '',
    email: '',
    phone: '',
    accept: false,
  }
}
initializeForm()
const addSubmission = (data: FormData) => {
  submissions = [data, ...submissions]
}
const removeSubmission = (index: number) => {
  submissions = [...submissions.slice(0, index), ...submissions.slice(index + 1)]
}
const submit = async () => {
  submitting = true
  try {
    const { solution } = await botpoison.challenge()
    const body = {
      _botpoison: solution,
      ...formData,
    }
    const response = await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      addSubmission(body)
      failed = false
      initializeForm()
    } else {
      failed = true
    }
  } catch {
    failed = true
  } finally {
    submitting = false
  }
}
</script>

<form on:submit|preventDefault="{submit}">
  <input type="hidden" name="_email.from" value="infolektuell.de" />
  <input type="hidden" name="_email.subject" value="Neue Kontaktanfrage" />
  <div class="field">
    <label class="label" for="inputMessage">Was kann ich für Sie tun?</label>
    <div class="control">
      <textarea
        class="textarea"
        required
        id="inputMessage"
        rows="5"
        placeholder="Ihre Nachricht"
        bind:value="{formData.message}"
      ></textarea>
    </div>
  </div>
  <div class="field">
    <label class="label" for="inputName">Name</label>
    <div class="control">
      <input class="input" type="text" required id="inputName" bind:value="{formData.name}" />
    </div>
  </div>
  <div class="field">
    <label class="label" for="inputEmail">Email-Adresse</label>
    <div class="control" class:has-icons-left="{$$slots.emailIcon}">
      <input class="input" type="email" required id="inputEmail" bind:value="{formData.email}" />
      {#if $$slots.emailIcon}
        <span class="icon is-small is-left"><slot name="emailIcon" /></span>
      {/if}
    </div>
  </div>
  <div class="field">
    <label class="label" for="inputPhone">Telefonnummer für Rückfragen (Optional)</label>
    <div class="control" class:has-icons-left="{$$slots.phoneIcon}">
      <input class="input" type="tel" id="inputPhone" bind:value="{formData.phone}" placeholder="01234 56789" />
      {#if $$slots.phoneIcon}
        <span class="icon is-small is-left"><slot name="phoneIcon" /></span>
      {/if}
    </div>
  </div>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" required id="acceptInput" bind:checked="{formData.accept}" />
        Hiermit akzeptiere ich die Verarbeitung meiner Angaben gemäß der <a href="/privacy">Datenschutzbedingungen</a>.
      </label>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-primary" class:is-loading="{submitting}" type="submit" disabled="{submitting}"
        >Absenden</button
      >
    </div>
  </div>
</form>
{#each submissions as submission, index}
  <Message
    color="success"
    title="Vielen Dank"
    on:close="{() => {
      removeSubmission(index)
    }}"
  >
    <p>Die folgende Nachricht wurde versendet:</p>
    <div class="control">
      <input type="text" readonly value="{submission.name}" />
    </div>
    <div class="control">
      <textarea class="textarea" readonly>{submission.message}</textarea>
    </div>
  </Message>
{/each}
{#if failed}
  <Message
    color="danger"
    title="Fehler"
    on:close="{() => {
      failed = false
    }}"
  >
    <p>Beim Absenden Ihrer Nachricht ist etwas schiefgegangen.</p>
  </Message>
{/if}
