<script lang="ts">
import { slide } from 'svelte/transition'
import type { Question } from '@entities/quiz'
import type { QuizStore } from './stores'
import LevelTag from './LevelTag.svelte'
import SelectQuestion from './SelectQuestion.svelte'
import InputQuestion from './InputQuestion.svelte'
export let question: Question
export let questionId: number
export let total: number
export let results: QuizStore
const headingID = `q${questionId}-heading`
const title = `Frage ${questionId + 1} von ${total}`
$: level = $results[questionId]
</script>

<section class="box" transition:slide aria-labelledby="{headingID}">
  <header class="title is-5">
    <h2>
      {#if level}
        <LevelTag {level} />
        <br />
      {/if}
      <span id="{headingID}">{title}</span>
    </h2>
  </header>
  <div class="content">
    {@html question.text}
  </div>
  {#if question.format === 'select'}
    <SelectQuestion {question} {questionId} {results} />
  {:else if question.format === 'input'}
    <InputQuestion {question} {questionId} {results} />
  {/if}
</section>
