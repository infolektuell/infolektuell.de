<script lang="ts">
export let label = 'Navigation'
export let site = ''
let isExpanded = false
const toggleMenu = function () {
  isExpanded = !isExpanded
}
</script>

<nav class="navbar" aria-label="{label}">
  <div class="navbar-brand">
    <a class="navbar-item" href="{site}">
      <slot name="logo" />
    </a>
    <button
      aria-expanded="{isExpanded}"
      aria-label="menu"
      class="navbar-burger"
      data-target="navMenu"
      on:click="{toggleMenu}"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
  <div class="navbar-menu" id="navMenu" class:isActive="{isExpanded}">
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
</nav>
