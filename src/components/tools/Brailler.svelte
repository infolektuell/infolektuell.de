<script lang="ts">
  import { type BrailleKeys, braille, isNoChar, Brailler } from './braille'
  let keys: BrailleKeys = [' ', 'f', 'd', 's', 'j', 'k', 'l', 'a', 'ö']
  const dotFields = [7, 3, 2, 1, 0, 4, 5, 6, 8]
  const handleKeyup = (e: KeyboardEvent, index: number) => {
    if (isNoChar(e)) { return }
    e.preventDefault()
    keys[index] = e.key
    keys = keys
  }
  let value: string
</script>
<form class="columns">
  {#each dotFields as dot}
<div class="column">
  <div class="field">
    <label class="label" for={'dot' + dot + 'input'}><span class="braille">{String.fromCharCode(10240 + Brailler.BrailleDots[dot])}</span></label>
    <div class="control">
      <input class="input is-small" type="text" size="1" minlength="1" maxlength="1" name={'dot' + dot} id={'dot' + dot + 'input'} on:keyup={(e) => { handleKeyup(e, dot) }} value={keys[dot]}>
    </div>
  </div>
</div>
  {/each}
</form>
<div class="field">
  <div class="control">
    <textarea class="textarea" use:braille={{ keys }} bind:value></textarea>
  </div>
</div>
<style>
  form {
    width: fit-content
  }
  .braille {
    border-style: dashed;
    border-color: lightgray;
    border-width: thin;
    padding: 0;
  }
</style>
