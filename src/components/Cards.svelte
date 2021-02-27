<script>
  import Card from './Card.svelte'
  import { dndzone } from 'svelte-dnd-action'

  export let column
  export let colIdx

  function handleDndConsiderCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
    function handleDndFinalizeCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
</script>


<article 
  use:dndzone={{items: column.cards }}
  on:consider={(e) => handleDndConsiderCards(column.id)}
  on:finalize={(e) => handleDndFinalizeCards(column.id, e)}>
  {#each column.cards as card, cardIdx (card.id)}
    <Card {colIdx} {card} {cardIdx}/>
  {/each}
</article>
