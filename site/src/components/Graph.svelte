<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";
  import config from "../data/config.json";
import Number from "../routes/history/[number].svelte";

  export let slug;
  let loading = true;
  const octokit = new Octokit({
    userAgent: config["user-agent"],
  });
  const owner = config.owner;
  const repo = config.repo;
  let commits = [];
  let data = [];

  onMount(async () => {
    commits = (
      await octokit.repos.listCommits({
        owner,
        repo,
        path: `history/${slug}.yml`
      })
    ).data;
    commits = commits.map((commit, index) => {
      commit.showHeading =
        index === 0 ||
        new Date(commits[index - 1].created_at).toLocaleDateString() !==
          new Date(commit.created_at).toLocaleDateString();
      return commit;
    });
    data = commits
      .filter(commit => commit.commit.message.includes("ms) [skip ci]"))
      .map((commit) => parseInt(commit.commit.message.split(" in ")[1].split("ms")[0]));
    loading = false;
  });
</script>

<style>
</style>

<section>
  {#if loading}
    <Loading />
  {:else if data.length}
    {#each data as item}
      {JSON.stringify(item)}
    {/each}
  {/if}
</section>
