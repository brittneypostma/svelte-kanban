<script>
  import { flip } from 'svelte/animate'
  import Column from './Column.svelte'
  import { store } from '../stores/store.js'

  import { dndzone } from 'svelte-dnd-action'
  function handleDndConsiderColumns(e) {
    $store = e.detail.items
  }
  function handleDndFinalizeColumns(e) {
    $store = e.detail.items
  }
</script>

<div
  use:dndzone="{{ items: $store, type: 'columns' }}"
  on:consider="{handleDndConsiderColumns}"
  on:finalize="{handleDndFinalizeColumns}"
>
  {#each $store as column, idx (column.id)}
    <section
      class="col"
      id="{column.id}"
      idx="{idx}"
      animate:flip="{{ duration: 300 }}"
    >
      <Column column="{column}" idx="{idx}" />
    </section>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  section {
    margin-right: var(--lg);
    height: 100%;
    box-shadow: var(--shadow);
    border-radius: var(--lg);
    display: grid;
    grid-template-rows: auto auto auto 1fr;
  }

  .col {
    user-select: none;
    border-radius: var(--lg);
    height: 100%;
    min-width: 300px;
    background: var(--accent);
    color: var(--white);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--base);
    align-items: start;
    align-content: flex-start;
    padding: var(--base);
  }

  :global(.dragged) {
    pointer-events: none;
    z-index: 100;
  }

  :global(.droptarget) {
    background: red;
  }

  /* .dragging {
    filter: brightness(1.1);
    box-shadow:  0 0 0 5px var(--secondary);
    border-radius: var(--lg);
  } */
</style>
