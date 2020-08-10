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

<h2>{config.i18n.pastIncidents}</h2>

<section>
  {#if loading}
    <Loading />
  {:else}
    {#each incidents as incident}
      {#if incident.showHeading}
        <h3>{new Date(incident.created_at).toLocaleDateString()}</h3>
      {/if}
      <article class="down">
        <div class="f">
          <div>
            <h4>{incident.title.replace('🛑', '').replace('⚠️', '').trim()}</h4>
            <div>
              {@html config.i18n.pastIncidentsResolved
                .replace(
                  /\$MINUTES/g,
                  (
                    (new Date(incident.closed_at).getTime() -
                      new Date(incident.created_at).getTime()) /
                    60000
                  ).toFixed(0)
                )
                .replace(/\$POSTS/g, incident.comments)}
            </div>
          </div>
          <div class="f r">
            <a href={`/${incident.number}`}>{config.i18n.incidentReport}</a>
          </div>
        </div>
      </article>
    {/each}
  {/if}
</section>
