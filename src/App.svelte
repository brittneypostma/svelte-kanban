<script>
  import { store, addColumn, deleteColumn } from './stores/store'

  function getNewCard() {
    return {
      id: `_${Math.random().toString(35).substr(2, 9)}`,
      title: 'Card Title',
    }
  }

  function deleteCard() {
    // let cards = $store[0].cards
    if ($store.length > 1) {
      $store[0].cards = $store[0].cards.slice(0, -1)
    }
  }

  function addCard(idx) {
    $store[idx].cards = [getNewCard(), ...$store[idx].cards]
  }
  // $: console.log($store)
</script>

<section class="board">
  <button class="add" on:click="{addColumn}">&plus;</button>
  {#each $store as column, idx (column.id)}
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
      <article>
        {#each column.cards as card, cardIdx (card.id)}
          <section class="card">
            <header>
              <h3>
                <input type="text" bind:value="{column.cards[cardIdx].title}" />
              </h3>
              <button class="delete" on:click="{deleteCard}">
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
          </section>
        {/each}
      </article>
    </div>
  {/each}
</section>

<style>
  .add {
    font-size: var(--xl);
    margin-right: var(--lg);
  }
  .board {
    overflow-x: auto;
    padding: var(--base) 0;
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    width: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--accent);
  }

  .board :global(.col) + :global(.col) {
    margin-left: var(--lg);
  }
  /* *Chrome Scrollbar* */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  *::-webkit-scrollbar-track {
    background: var(--accent);
  }
  *::-webkit-scrollbar-thumb {
    background: var(--black);
  }
  *::-webkit-scrollbar-thumb:hover {
    --accent: hsl(calc(var(--h) - 175), var(--s), calc(var(--l) * 0.75), 100%);
    background: var(--accent);
  }

  .col {
    overflow-y: auto;
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

  header {
    display: flex;
    align-items: center;
  }
  header * + * {
    margin-left: var(--sm);
  }
  input {
    border-bottom: 4px solid var(--black);
  }
  .delete {
    background: var(--error);
    width: var(--xxxl);
    color: var(--white);
  }

  .card {
    background: var(--white);
    border-radius: var(--xs);
    color: var(--black);
    padding: var(--base);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.15);
  }

  .card {
    margin-bottom: 1rem;
  }
</style>
