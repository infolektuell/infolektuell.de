<script lang="ts">
import type { SelectQuestion, Choice, Level } from '@entities/quiz'
import type { QuizStore } from './stores.ts'
import Option from './Option.svelte'
import FeedbackMessage from './FeedbackMessage.svelte'
export let question: SelectQuestion
export let questionId: number
export let results: QuizStore
let selected: Choice[] = []
let remaining = question.amount
let finished = false
let level: Level
const toggle = (e: CustomEvent<{ choice: Choice; selected: boolean }>) => {
  if (finished) {
    return
  }
  if (e.detail.selected) {
    selected = [...selected, e.detail.choice]
    remaining -= 1
  } else {
    selected = selected.filter((x) => x !== e.detail.choice)
    remaining += 1
  }
  if (remaining === 0) {
    const levels = selected.map((c) => c.level)
    if (levels.every((l) => l === 'right')) {
      level = 'right'
    } else if (levels.some((l) => l === 'neutral')) {
      level = 'neutral'
    } else {
      level = 'wrong'
    }
    results.finish(level)
  }
}
$: finished = questionId < $results.length
</script>

<div class="block">
  {#each question.choices as choice}
    <Option {choice} {finished} on:toggle="{toggle}" />
  {/each}
</div>
{#if !finished && question.amount > 1}
  <FeedbackMessage level="info"
    ><p>Bitte {question.amount} Antworten auswählen ({remaining} verbleibend).</p></FeedbackMessage
  >
{/if}
