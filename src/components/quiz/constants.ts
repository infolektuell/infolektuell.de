import type { Level as QuizLevel } from '@entities/quiz'
export type Level = QuizLevel | 'info'

export const LevelSymbol: Record<Level, string> = {
  right: '✔️',
  info: 'ℹ️',
  neutral: '⚠',
  wrong: '❌',
}

export const LevelColor: Record<Level, string> = {
  right: 'success',
  info: 'info',
  neutral: 'warning',
  wrong: 'danger',
}

export const LevelTitle: Record<Level, string> = {
  right: 'Richtig',
  info: 'Tipp',
  neutral: 'Achtung',
  wrong: 'Leider nicht richtig',
}

export const levelConfig = (level: Level) => ({
  symbol: LevelSymbol[level],
  color: LevelColor[level],
  title: LevelTitle[level],
})
