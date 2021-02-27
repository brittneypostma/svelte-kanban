<script>
  import { flip } from 'svelte/animate'
  import Column from './Column.svelte'
  import {store} from '../stores/store.js'
</script>

{#each $store as column, idx (column.id)}
  <div animate:flip={{duration:200}}>
    <Column {column} idx={idx}/>
  </div>
{/each}

<style>
  div {
    margin-right: var(--lg);
    height: 100%;
  }
</style>