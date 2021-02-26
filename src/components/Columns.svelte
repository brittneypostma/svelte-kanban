<script>
import App from '../App.svelte';

  import Column from './Column.svelte'
  import {store} from '../stores/store.js'
import Board from './Board.svelte';
</script>

{#each $store as column (column.id)}
  <Column {column} />
{/each}

