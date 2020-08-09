<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";

  let loading = true;
  const octokit = new Octokit({
    userAgent: "KojBot",
  });
  const owner = "koj-co";
  const repo = "status";
  let incidents = [];

  onMount(async () => {
    incidents = (
      await octokit.issues.listForRepo({
        owner,
        repo,
        state: "closed",
        filter: "all",
        sort: "created",
        direction: "desc",
        labels: "status",
      })
    ).data;
    loading = false;
  });
</script>

<svelte:head>
  <title>Koj Status</title>
</svelte:head>

<h2>Past Incidents</h2>

<section>
  {#if loading}
    <Loading />
  {:else}
    {#each incidents as incident}
      <h3>{new Date(incident.created_at).toLocaleDateString()}</h3>
      <article class="down">
        <h4>{incident.title.replace('🛑', '').replace('⚠️', '').trim()}</h4>
        <div>
          Resolved in {((new Date(incident.closed_at).getTime() - new Date(incident.created_at).getTime()) / 60000).toFixed(0)}
          minutes with {incident.comments} posts
        </div>
      </article>
    {/each}
  {/if}
</section>
