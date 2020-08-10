<script>
  import Nav from "../components/Nav.svelte";
  import config from "../data/config.json";
  export let segment;
</script>

<style>
  footer {
    text-align: center;
    opacity: 0.75;
    margin-top: 3rem;
  }
</style>

<Nav {segment} />

<main class="container">
  <slot />
</main>

<footer>
  <p>
    This page is
    <a href={`https://github.com/${config.owner}/${config.repo}`}>
      open source
    </a>
    and powered by
    <a href="https://upptime.js.org">Upptime</a>
  </p>
</footer>
