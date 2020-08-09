import { Octokit } from "@octokit/rest";
import snarkdown from "snarkdown";
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
            (issue) => `<a href="${issue.html_url}"><article class="down">
      <h3>${issue.title}</h3>
      <div><time>${new Date(
        issue.created_at
      ).toLocaleDateString()}</time>, resolved in ${millisToMinutesAndSeconds(
              new Date(issue.closed_at).getTime() -
                new Date(issue.created_at).getTime()
            )}</div>
    </article></a>`
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
            (issue) => `<a href="${issue.html_url}"><article>
      <h3>${issue.title}</h3>
      <div><time>${new Date(issue.created_at).toLocaleDateString()}</time></div>
    </article></a>`
          )
          .join("");
      }
      if (!incidents.data.length)
        container.parentElement.setAttribute("hidden", "hidden");
    })
    .catch(console.log);
};

const liveStatus = () => {
  octokit.repos
    .getContent({
      owner,
      repo,
      path: "README.md",
    })
    .then((content) => {
      const text = atob(content.data.content)
        .split("<!--start: status pages-->")[1]
        .split("<!--end: status pages-->")[0];
      const container = document.querySelector("#live-status > div");
      if (container) {
        container.innerHTML = text
          .split("\n")
          .filter(
            (line) =>
              line.startsWith("| ") &&
              (line.includes(" Up ") || line.includes(" Down "))
          )
          .map(
            (line) => `<article class="${line
              .split("| ")[2]
              .trim()
              .split(" ")[1]
              .toLocaleLowerCase()}">
      <img class="graph" alt="Response time graph" src="https://raw.githubusercontent.com/koj-co/status/master/history/${
        line.split("| ")[3].trim().split("[")[1].split("]")[0].split(".")[0]
      }.png">
      <h3>${snarkdown(line.split("| ")[1].trim())}</h3>
      <div>Uptime: ${line.split("| ")[5].trim()}</div>
      <div>Response time: ${
        line.split("| ")[4].trim().split(">")[1].split("ms")[0]
      }ms</div>
      <div><a href="https://github.com/koj-co/status/commits/master/history/${
        line.split("| ")[3].trim().split("[")[1].split("]")[0]
      }">History</a></div>
    </article>`
          )
          .join("");
      }
      if (!content.data.content)
        container.parentElement.setAttribute("hidden", "hidden");
    });
};

const start = () => {
  pastIncidents();
  currentIncidents();
  liveStatus();
};

start();

setInterval(start, 60000);
