import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  userAgent: "KojBot",
});

const owner = "koj-co";
const repo = "status";

const millisToMinutesAndSeconds = (millis: number) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const pastIncidents = () => {
  octokit.issues
    .listForRepo({
      owner,
      repo,
      state: "closed",
      filter: "all",
      sort: "created",
      direction: "desc",
      labels: "status",
    })
    .then((incidents) => {
      const container = document.querySelector("#past-incidents > div");
      if (container) {
        container.innerHTML = incidents.data
          .map(
            (issue) => `<article>
      <h3>${issue.title}</h3>
      <div><time>${new Date(issue.created_at).toLocaleDateString()}</time></div>
      <div>Resolved in ${millisToMinutesAndSeconds(
        new Date(issue.closed_at).getTime() -
          new Date(issue.created_at).getTime()
      )}</div>
    </article>`
          )
          .join("");
        if (!incidents.data.length)
          container.parentElement.setAttribute("hidden", "hidden");
      }
    })
    .catch(console.log);
};

const currentIncidents = () => {
  octokit.issues
    .listForRepo({
      owner,
      repo,
      state: "open",
      filter: "all",
      sort: "created",
      direction: "desc",
      labels: "status",
    })
    .then((incidents) => {
      const container = document.querySelector("#current-incidents > div");
      if (container) {
        container.innerHTML = incidents.data
          .map(
            (issue) => `<article>
      <h3>${issue.title}</h3>
      <div><time>${new Date(issue.created_at).toLocaleDateString()}</time></div>
    </article>`
          )
          .join("");
      }
      if (!incidents.data.length)
        container.parentElement.setAttribute("hidden", "hidden");
    })
    .catch(console.log);
};
pastIncidents();
currentIncidents();
