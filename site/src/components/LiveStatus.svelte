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

<h2>{config.i18n.liveStatus}</h2>
<section>
  {#if loading}
    <Loading />
  {:else if sites.length}
    {#each sites as site}
      <article
        class={`${site.status} link`}
        style={`background-image: url("https://raw.githubusercontent.com/${owner}/${repo}/master/graphs/${site.slug}.png`}>
        <h4>
          <a href={`/history/${site.slug}`}>{site.name}</a>
        </h4>
        <div>
          {@html config.i18n.overallUptime.replace(/\$UPTIME/g, site.uptime)}
        </div>
        <div>
          {@html config.i18n.averageResponseTime.replace(/\$TIME/g, site.time)}
        </div>
      </article>
    {/each}
  {/if}
</section>
