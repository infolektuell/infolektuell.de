import type { Action, ActionReturn } from 'svelte/action'

export type BrailleKeys = [string, string, string, string, string, string, string, string, string]
type Parameter = { keys: BrailleKeys }
type Attributes = {
  'on:input': (e: CustomEvent<string>) => void
}

const controls = new Set([
  'Enter',
  'Backspace',
  'Delete',
  'Tab',
  'Shift',
  'Home',
  'End',
  'Insert',
  'Control',
  'Alt',
  'Meta',
])

export function isNoChar(event: KeyboardEvent): boolean {
  return event.metaKey || event.ctrlKey || event.key.startsWith('Arrow') || controls.has(event.key)
}

export class Brailler {
  static BrailleDots = [0, 1 << 0, 1 << 1, 1 << 2, 1 << 3, 1 << 4, 1 << 5, 1 << 6, 1 << 7]
  private pressed = new Set<number>()
  private released = new Set<number>()

  write(): string | null {
    if (this.pressed.size > 0) {
      return null
    }
    let scalar = 10240
    for (const dot of this.released.values()) {
      scalar += Brailler.BrailleDots[dot]
    }
    this.pressed.clear()
    this.released.clear()
    return String.fromCharCode(scalar)
  }

  press(dot: number) {
    this.pressed.add(dot)
  }

  release(dot: number): string | null {
    if (!this.pressed.has(dot)) {
      return null
    }
    this.pressed.delete(dot)
    this.released.add(dot)
    return this.write()
  }
}

export const braille: Action<HTMLInputElement | HTMLTextAreaElement, Parameter, Attributes> = function (
  node: HTMLInputElement | HTMLTextAreaElement,
  parameter: Parameter = { keys: [' ', 'f', 'd', 's', 'j', 'k', 'l', 'a', 'ö'] },
): ActionReturn<Parameter, Attributes> {
  const keyDots = parameter.keys.reduce((ac, x, i) => ac.set(x, i), new Map<string, number>())
  const brailler = new Brailler()
  const handleKeydown = (event: KeyboardEvent) => {
    if (isNoChar(event)) {
      return
    }
    const dot = keyDots.get(event.key)
    if (!dot) {
      return
    }
    event.preventDefault()
    if (node.contains(event.target as HTMLElement)) {
      brailler.press(dot)
    }
  }

  const handleKeyup = (event: KeyboardEvent) => {
    if (isNoChar(event)) {
      return
    }
    const dot = keyDots.get(event.key)
    if (!dot) {
      return
    }
    event.preventDefault()
    if (node.contains(event.target as HTMLElement)) {
      const result = brailler.release(dot)
      if (result) {
        node.value += result
      }
    }
  }

  document.addEventListener('keydown', handleKeydown, true)
  document.addEventListener('keyup', handleKeyup, true)

  return {
    update(parameter: Parameter) {
      parameter.keys.forEach((key, i) => {
        keyDots.set(key, i)
      })
    },
    destroy() {
      document.removeEventListener('keyup', handleKeyup, true)
      document.removeEventListener('keydown', handleKeydown, true)
    },
  }
}
