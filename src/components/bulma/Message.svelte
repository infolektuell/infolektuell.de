<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { slide } from 'svelte/transition'
export let color = 'primary'
export let title: string
export let closable = true
let visible = true
const dispatch = createEventDispatcher<{ close: null }>()
const handleClose = () => {
  dispatch('close')
  visible = false
}
</script>

{#if !closable || visible}
  <div transition:slide class="{`message is-${color}`}">
    <div class="message-header">
      <p>{title}</p>
      {#if closable}
        <button type="button" class="delete" aria-label="Entfernen" on:click="{handleClose}"></button>
      {/if}
    </div>
    <div class="message-body">
      <slot />
    </div>
  </div>
{/if}
