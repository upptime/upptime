<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";

  export let number;

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
    incidents = incidents.map((incident, index) => {
      incident.showHeading =
        index === 0 ||
        new Date(incidents[index - 1].created_at).toLocaleDateString() !==
          new Date(incident.created_at).toLocaleDateString();
      return incident;
    });
    loading = false;
  });
</script>

<style>
  footer {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>Incident Details</title>
</svelte:head>

<h2>Past Incidents</h2>

<section>
  {#if loading}
    <Loading />
  {:else}
    {number}
    {#each incidents as incident}
      {#if incident.showHeading}
        <h3>{new Date(incident.created_at).toLocaleDateString()}</h3>
      {/if}
      <article class="down">
        <div class="f">
          <div>
            <h4>{incident.title.replace('🛑', '').replace('⚠️', '').trim()}</h4>
            <div>
              Resolved in {((new Date(incident.closed_at).getTime() - new Date(incident.created_at).getTime()) / 60000).toFixed(0)}
              minutes with {incident.comments} posts
            </div>
          </div>
          <div class="f r">
            <a href={`/${incident.number}`}>Incident report &rarr;</a>
          </div>
        </div>
      </article>
    {/each}
  {/if}
</section>

<footer>
  <a href="/">&larr; Back to all incidents</a>
</footer>
