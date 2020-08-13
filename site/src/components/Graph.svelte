<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";
  import config from "../data/config.json";
  import Line from "svelte-chartjs/src/Line.svelte";

  export let slug;
  let loading = true;
  const octokit = new Octokit({
    userAgent: config["user-agent"],
  });
  const owner = config.owner;
  const repo = config.repo;
  let commits = [];
  let labels = [];
  let data = [];

  onMount(async () => {
    commits = (
      await octokit.repos.listCommits({
        owner,
        repo,
        path: `history/${slug}.yml`,
        per_page: 28,
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
      .filter((commit) => commit.commit.message.includes("ms) [skip ci]"))
      .map((commit) =>
        parseInt(commit.commit.message.split(" in ")[1].split("ms")[0])
      );
    labels = commits
      .filter((commit) => commit.commit.message.includes("ms) [skip ci]"))
      .map((commit) => new Date(commit.commit.committer.date).toLocaleString());
    loading = false;
  });
</script>

<style>

</style>

<section>
  {#if loading}
    <Loading />
  {:else if data.length}
    <h2>{config.i18n.sevelDayResponseTime}</h2>
    <Line
      data={{ labels, datasets: [{ label: config.i18n.responseTimeMs, backgroundColor: '#89e0cf', borderColor: '#1abc9c', data }] }}
      width={800}
      height={400}
      options={{ responsive: true, maintainAspectRatio: true, scales: { xAxes: [{ display: false, gridLines: { display: false } }] } }} />
  {/if}
</section>
