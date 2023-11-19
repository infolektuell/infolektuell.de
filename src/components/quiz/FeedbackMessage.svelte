<script lang="ts">
import { slide } from 'svelte/transition'
import { type Level, levelConfig } from './constants'
export let level: Level
const config = levelConfig(level)
export let symbol = config.symbol
export let color = config.color
export let title = config.title
</script>

<section transition:slide class="{`message is-${color}`}">
  <header class="message-header">
    <p>{`${symbol} ${title}`}</p>
  </header>
  <div class="message-body"><div class="content"><slot /></div></div>
</section>
