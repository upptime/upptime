<script>
  import ActiveIncidents from "../components/ActiveIncidents.svelte";
  import LiveStatus from "../components/LiveStatus.svelte";
  import Incidents from "../components/Incidents.svelte";
  import config from "../data/config.json";
  import snarkdown from "snarkdown";

  let title = "Status";
  try {
    title = config["status-website"].name;
  } catch (error) {}
</script>

<style>
  p.lead {
    font-size: 110%;
  }
  header {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header>
  {#if config['status-website']}
    {#if config['status-website'].introTitle}
      <h1>
        {@html snarkdown(config['status-website'].introTitle)}
      </h1>
    {/if}
    {#if config['status-website'].introMessage}
      <p class="lead">
        {@html snarkdown(config['status-website'].introMessage)}
      </p>
    {/if}
  {/if}
</header>

<ActiveIncidents />
<LiveStatus />
<Incidents />
