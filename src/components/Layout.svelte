<main>
  <slot />
</main>
<footer class="text-center">
  &copy; Brittney Postma {new Date().getFullYear()}
</footer>

<style>
  :global(body) {
    min-height: 100vh;
    display: grid;
    grid-template: 1fr auto / minmax(0, 1fr);
  }
  footer {
    padding: var(--sm);
  }
</style>