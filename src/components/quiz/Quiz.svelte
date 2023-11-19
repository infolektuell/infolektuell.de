<script lang="ts">
import type { Quiz } from '@entities/quiz'
import { createQuizResults, createProgress } from './stores'
import Question from './Question.svelte'
export let quiz: Quiz
const { title, intro, questions, outro } = quiz
const results = createQuizResults()
const progress = createProgress(results)
</script>

<article>
  <header class="title">
    <h1>{title}</h1>
  </header>
  <progress
    class="progress is-info"
    max="{questions.length}"
    value="{$progress}"
    aria-valuetext="{`${$progress} von ${questions.length} Fragen beantwortet`}"
    aria-label="Fortschritt"
  ></progress>
  <div class="content">
    {@html intro}
  </div>
  <hr />
  {#each questions as question, questionId}
    {#if questionId <= $progress}
      <Question {question} {questionId} {results} total="{questions.length}" />
      <hr />
    {/if}
  {:else}
    <p class="content">Keine Fragen, Euer Ehren?</p>
  {/each}
  {#if $progress === questions.length}
    <div class="content">
      {@html outro}
    </div>
  {/if}
</article>
