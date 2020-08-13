<script>
  import Loading from "../components/Loading.svelte";
  import { Octokit } from "@octokit/rest";
  import { onMount } from "svelte";
  import snarkdown from "snarkdown";
  import config from "../data/config.json";

  export let number;

  let md = snarkdown;
  let loading = true;
  let loadingIncident = true;

  const octokit = new Octokit({
    userAgent: config["user-agent"],
  });
  const owner = config.owner;
  const repo = config.repo;
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
      })
    ).data.reverse();
    loading = false;
  });
</script>

<style>
  footer {
    margin-top: 2rem;
  }
  p {
    margin-top: 0;
  }
  h2 {
    line-height: 1;
  }
  .r {
    text-align: right;
  }
</style>

<svelte:head>
  <title>{config.i18n.incidentTitle.replace('$NUMBER', number)}</title>
</svelte:head>

<h2>
  {#if loadingIncident}
    {config.i18n.incidentDetails}
  {:else}
    {incident.title}
    <span class={`tag ${incident.state}`}>
      {incident.state === 'closed' ? config.i18n.incidentFixed : config.i18n.incidentOngoing}
    </span>
  {/if}
</h2>

<section>
  {#if loading}
    <Loading />
  {:else}
    <div class="f">
      <dl>
        <dt>{config.i18n.incidentOpenedAt}</dt>
        <dd>{new Date(incident.created_at).toLocaleString()}</dd>
        {#if incident.closed_at}
          <dt>{config.i18n.incidentClosedAt}</dt>
          <dd>{new Date(incident.closed_at).toLocaleString()}</dd>
        {/if}
      </dl>
      <div class="r">
        <p>
          <a
            href={`https://github.com/${config.owner}/${config.repo}/issues/${number}`}>
            {config.i18n.incidentSubscribe}
          </a>
        </p>
        <p>
          <a
            href={`https://github.com/${config.owner}/${config.repo}/issues/${number}`}>
            {config.i18n.incidentViewOnGitHub}
          </a>
        </p>
      </div>
    </div>
    {#each comments as comment}
      <article>
        <p>
          {@html md(comment.body)}
        </p>
        <div>
          {@html config.i18n.incidentCommentSummary
            .replace(
              /\$DATE/,
              `<a href=${comment.html_url}>${new Date(
                comment.created_at
              ).toLocaleString()}</a>`
            )
            .replace(
              /\$AUTHOR/,
              `<a href=${comment.user.html_url}>@${comment.user.login}</a>`
            )}
        </div>
      </article>
    {/each}
  {/if}
</section>

<footer>
  <a href="/">{config.i18n.incidentBack}</a>
</footer>
