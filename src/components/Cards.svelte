<script>
  import Card from './Card.svelte'

  export let column
  export let colIdx
</script>


<article>
  {#each column.cards as card, cardIdx (card.id)}
    <Card {column} {colIdx} {card} {cardIdx}/>
  {/each}
</article>
