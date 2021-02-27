<script>
  import { store, deleteColumn } from '../stores/store'
  import Cards from './Cards.svelte'

  function getNewCard() {
    return {
      id: `_${Math.random().toString(35).substr(2, 9)}`,
      title: 'Card Title',
    }
  }

  function addCard(idx) {
    $store[idx].cards = [getNewCard(), ...$store[idx].cards]
  }

  export let column
  export let idx
</script>

<div class="col" id="{column.id}" idx="{idx}">
  <header>
    <h2><input bind:value="{column.title}" /></h2>

    <button class="delete" on:click="{deleteColumn(column.id)}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
    </button>
  </header>
  <button on:click="{addCard(idx)}">&plus; Add Card</button>
  <Cards column="{column}" colIdx={idx} />
</div>

<style>
  .col {
    height: 100%;
    min-width: 300px;
    background: var(--accent);
    color: var(--white);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--base);
    align-items: start;
    align-content: flex-start;
    border-radius: var(--lg);
    padding: var(--base);
    box-shadow: var(--shadow);
  }
</style>
