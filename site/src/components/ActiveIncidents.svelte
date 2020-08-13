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
  let incidents = [];

  onMount(async () => {
    incidents = (
      await octokit.issues.listForRepo({
        owner,
        repo,
        state: "open",
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
  section {
    margin-bottom: 2rem;
  }
  article {
    background-color: #ffdce3;
  }
  article.good {
    background-color: #dcffeb;
    color: #003300;
  }
</style>

{#if !incidents.length && !loading}
  <article class="good">✅ &nbsp; {config.i18n.allSystemsOperational}</article>
{/if}

<section>
  {#if loading}
    <Loading />
  {:else if incidents.length}
    <h2>{config.i18n.activeIncidents}</h2>
    {#each incidents as incident}
      <article class="down link">
        <div class="f">
          <div>
            <h4>{incident.title.replace('🛑', '').replace('⚠️', '').trim()}</h4>
            <div>
              {config.i18n.activeIncidentSummary
                .replace(
                  /\$DATE/g,
                  new Date(incident.created_at).toLocaleString()
                )
                .replace(/\$POSTS/g, incident.comments)}
            </div>
          </div>
          <div class="f r">
            <a href={`/incident/${incident.number}`}>
              {config.i18n.incidentReport.replace(/\$NUMBER/g, incident.number)}
            </a>
          </div>
        </div>
      </article>
    {/each}
  {/if}
</section>
