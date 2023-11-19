<script lang="ts">
import type { InputQuestion, Level } from '@entities/quiz'
import type { QuizStore } from './stores'
import FeedbackMessage from './FeedbackMessage.svelte'
export let question: InputQuestion
export let results: QuizStore
export let questionId: number
const inputName = `q${questionId}`
const inputId = inputName + 'Input'
const { input, trials, feedback } = question
let response: number | string
let remaining = trials
let level: Level
let finished = false
const submit = () => {
  if (finished) {
    return
  }
  const correct = response === input.value
  level = correct ? 'right' : 'wrong'
  remaining -= 1
  if (correct || remaining === 0) {
    results.finish(level)
  }
}
$: finished = questionId < $results.length
</script>

<form class="box" on:submit|preventDefault="{submit}">
  <div class="field">
    <label class="label" for="{inputId}">Antwort</label>
    <div class="control">
      {#if input.type === 'number'}
        <input
          type="number"
          name="{inputName}"
          id="{inputId}"
          min="{input.min}"
          max="{input.max}"
          step="{input.step}"
          readonly="{finished}"
          bind:value="{response}"
        />
      {:else}
        <input
          type="text"
          name="{inputName}"
          id="{inputId}"
          minlength="{input.minlength}"
          maxlength="{input.maxlength}"
          readonly="{finished}"
          bind:value="{response}"
        />
      {/if}
    </div>
    {#if !finished && remaining < trials}
      <p class="help">Verbleibende Versuche: {remaining}</p>
    {/if}
  </div>
  {#if !finished}
    <div class="field">
      <div class="control">
        <button type="submit" class="button is-primary">Antwort Prüfen</button>
      </div>
    </div>
  {/if}
</form>
{#if finished}
  <FeedbackMessage {level}>{@html feedback}</FeedbackMessage>
{/if}
