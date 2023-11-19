import { type Readable, writable, derived } from 'svelte/store'
import type { Level } from '@entities/quiz'

export type QuizStore = Readable<Level[]> & {
  reset: () => void
  finish: (level: Level) => void
}

export const createQuizResults = function (): QuizStore {
  const { subscribe, update, set } = writable<Level[]>([])
  return {
    subscribe,
    reset: () => {
      set([])
    },
    finish: (level: Level) => {
      update((results) => {
        results.push(level)
        return results
      })
    },
  }
}

export const createProgress = (store: QuizStore) => {
  return derived(store, (val) => val.length)
}
