<script lang="ts">
import { type Level, levelConfig } from './constants'
export let level: Level
const config = levelConfig(level)
export let symbol = config.symbol
export let color = config.color
</script>

<span class="{`tag is-${color}`}">{symbol}</span>
