<script lang="ts">
import { createEventDispatcher } from 'svelte'
import type { Choice } from '@entities/quiz'
import FeedbackMessage from '@components/quiz/FeedbackMessage.svelte'
const dispatch = createEventDispatcher<{
  toggle: { choice: Choice; selected: boolean }
}>()
export let choice: Choice
const { text, level, category, feedback } = choice
export let finished: boolean
export let selected = false
const toggle = () => {
  selected = !selected
  dispatch('toggle', { choice, selected })
}
</script>

<h3 class="block">
  <button type="button" class="button is-link" class:is-active="{selected}" aria-pressed="{selected}" on:click="{toggle}"
    >{text}</button
  >
</h3>
{#if finished && selected}
  <FeedbackMessage title="{category}" {level}>{@html feedback}</FeedbackMessage>
{/if}
