<script>
  import Loading from "../components/Loading.svelte";
  let loading = true;
</script>

<svelte:head>
  <title>Koj Status</title>
</svelte:head>

<h2>Past Incidents</h2>

{#if loading}
  <Loading />
{/if}

<section class="list">ok</section>
