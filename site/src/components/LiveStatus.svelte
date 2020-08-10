<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";
  import config from "../data/config.json";

  let loading = true;
  const octokit = new Octokit({
    userAgent: config["user-agent"],
  });
  const owner = config.owner;
  const repo = config.repo;
  let sites = [];

  onMount(async () => {
    sites = JSON.parse(
      atob(
        (
          await octokit.repos.getContent({
            owner,
            repo,
            path: "history/summary.json",
          })
        ).data.content.replace(/\n/g, "")
      )
    );
    loading = false;
  });
</script>

<style>
  article {
    background-size: contain;
    background-position: top right;
    background-repeat: no-repeat;
  }
</style>

<h2>Live Status</h2>
<section>
  {#if loading}
    <Loading />
  {:else if sites.length}
    {#each sites as site}
      <article
        class={site.status}
        style={`background-image: url("https://raw.githubusercontent.com/koj-co/upptime/master/graphs/google.png`}>
        <h4>{site.name}</h4>
        <div>Overall uptime: {site.uptime}%</div>
        <div>Average response time: {site.time}ms</div>
      </article>
    {/each}
  {/if}
</section>
