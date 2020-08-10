<script>
  import ActiveIncidents from "../components/ActiveIncidents.svelte";
  import Incidents from "../components/Incidents.svelte";
  import config from "../data/config.json";
</script>

<svelte:head>
  <title>Koj Status</title>
</svelte:head>
{JSON.stringify(config)}
<ActiveIncidents />
<Incidents />
