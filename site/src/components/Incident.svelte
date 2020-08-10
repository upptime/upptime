<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";

  export let number;

  let loading = true;
  let loadingIncident = true;

  const octokit = new Octokit({
    userAgent: "KojBot",
  });
  const owner = "koj-co";
  const repo = "status";
  let comments = [];
  let incident = {};

  onMount(async () => {
    incident = (
      await octokit.issues.get({
        owner,
        repo,
        issue_number: number,
        sort: "created",
        direction: "desc",
      })
    ).data;
    loadingIncident = false;
    comments = (
      await octokit.issues.listComments({
        owner,
        repo,
        issue_number: number,
        sort: "created",
        direction: "desc",
      })
    ).data;
    loading = false;
  });
</script>

<style>
  footer {
    margin-top: 2rem;
  }
  header {
    margin-bottom: 1.5rem;
  }
</style>

<svelte:head>
  <title>Incident #{number} Details</title>
</svelte:head>

<h2>
  {#if loadingIncident}Incident Details{:else}{incident.title}{/if}
</h2>

<section>
  {#if loading}
    <Loading />
  {:else}
    <header>
      <div>Opened at {new Date(incident.created_at).toLocaleString()}</div>
      {#if incident.closed_at}
        <div>Closed at {new Date(incident.closed_at).toLocaleString()}</div>
      {/if}
    </header>
    {#each comments as comment}
      <article>
        {comment.body}
        <div>
          Posted at
          <a href={comment.html_url}>
            {new Date(comment.created_at).toLocaleString()}
          </a>
          by
          <a href={comment.user.html_url}>@{comment.user.login}</a>
        </div>
      </article>
    {/each}
  {/if}
</section>

<footer>
  <a href="/">&larr; Back to all comments</a>
</footer>
