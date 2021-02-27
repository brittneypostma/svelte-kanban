<script>
  import { flip } from 'svelte/animate'
  import Column from './Column.svelte'
  import {store} from '../stores/store.js'
  
  import {drag} from '../actions/drag'

  console.log(drag($store))
</script>

{#each $store as column, idx (column.id)}
  <div class="col" id="{column.id}" idx="{idx}" animate:flip={{duration: 300}}>
    <Column {column} idx={idx}/>
  </div>
{/each}

<style>
  div {
    margin-right: var(--lg);
    height: 100%;
    box-shadow: var(--shadow);
    border-radius: var(--lg);
    cursor: move;
  }

  
  .col {
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

  /* .dragging {
    filter: brightness(1.1);
    box-shadow:  0 0 0 5px var(--secondary);
    border-radius: var(--lg);
  } */
</style>