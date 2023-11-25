<script lang="ts">
export let label = 'Navigation'
let isExpanded = false
const toggleMenu = function () {
  isExpanded = !isExpanded
}
</script>

<nav class="navbar is-info" aria-label="{label}">
  <div class="container">
  <div class="navbar-brand">
    <slot name="brand" />
    <button
      aria-expanded="{isExpanded}"
      aria-controls="navMenu"
      aria-label="Menü"
      class="navbar-burger"
      class:is-active="{isExpanded}"
      data-target="navMenu"
      on:click="{toggleMenu}"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
  <div class="navbar-menu" id="navMenu" class:is-active="{isExpanded}">
    {#if $$slots.start}
      <div class="navbar-start">
        <slot name="start" />
      </div>
    {/if}
    {#if $$slots.end}
      <div class="navbar-end">
        <slot name="end" />
      </div>
    {/if}
  </div>
  </div>
</nav>
