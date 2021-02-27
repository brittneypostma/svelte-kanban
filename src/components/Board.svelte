<script>
  import { store, addColumn } from '../stores/store'
  
  import { dndzone } from 'svelte-dnd-action'

  $: handleDndConsiderColumns = (e) => {
    $store = e.detail.items
  }
  $: handleDndFinalizeColumns = (e) => {
    $store = e.detail.items
  }
</script>

<section>
  <button class="add" on:click="{addColumn}">&plus;</button>
  <section
    use:dndzone="{{ items: $store, type: 'columns' }}"
    on:consider="{handleDndConsiderColumns}"
    on:finalize="{handleDndFinalizeColumns}"
  >
    <slot />
  </section>
</section>

<style>
  .add {
    font-size: var(--xl);
    margin-right: var(--lg);
  }
  section {
    overflow-x: auto;
    padding: var(--base) 0;
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    width: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--primary);
  }
  /* *Chrome Scrollbar* */
  section::-webkit-scrollbar {
    height: 8px;
  }
  section::-webkit-scrollbar-track {
    background: var(--primary);
  }
  section::-webkit-scrollbar-thumb {
    background: var(--accent);
  }
  section::-webkit-scrollbar-thumb:hover {
    --accent: hsl(calc(var(--h) - 175), var(--s), calc(var(--l) * 0.75), 100%);
    background: var(--accent);
  }
</style>
