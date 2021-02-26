<script>
  import Card from './Card.svelte'
  import {update} from '../stores/store'

  export let column = []
  export let id
  export let title
</script>

<div class="col" {id}>
  <header>
    <h2>
      <input type="text" bind:value={$title} on:change={(e) => update(id, e.target.value)}/>
    </h2>
    <button class="delete">
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
  <button>&plus; Add Card</button>
  <article>
    <!-- {#each column as card} -->
    <!-- cards -->
    <Card />
    <Card />
    <Card />
    <!-- {/each} -->
  </article>
</div>

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

  section :global(.col) + :global(.col) {
    margin-left: var(--lg);
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
  .col {
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
</style>

