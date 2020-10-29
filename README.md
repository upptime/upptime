# [![Upptime](https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/logo.svg)](https://upptime.js.org)

<!--start: description-->
Upptime (https://upptime.js.org) is the open-source uptime monitor and status page, powered entirely by GitHub Actions and Issues.
<!--end: description-->

[![Uptime CI](https://github.com/koj-co/upptime/workflows/Uptime%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Uptime+CI%22)
[![Response Time CI](https://github.com/koj-co/upptime/workflows/Response%20Time%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Response+Time+CI%22)
[![Graphs CI](https://github.com/koj-co/upptime/workflows/Graphs%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Graphs+CI%22)
[![Static Site CI](https://github.com/koj-co/upptime/workflows/Static%20Site%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Static+Site+CI%22)
[![Summary CI](https://github.com/koj-co/upptime/workflows/Summary%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Summary+CI%22)

## [📈 Live Status](https://demo.upptime.js.org): <!--live status--> **🟨 Partial outage**

<!--start: status pages-->
| URL | Status | History | Response Time | Uptime |
| --- | ------ | ------- | ------------- | ------ |
| [Google](https://www.google.com) | 🟩 Up | [google.yml](https://github.com/koj-co/upptime/commits/master/history/google.yml) | <img alt="Response time graph" src="./graphs/google.png" height="20"> 85ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fuptime.json)
| [Wikipedia](https://en.wikipedia.org) | 🟩 Up | [wikipedia.yml](https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml) | <img alt="Response time graph" src="./graphs/wikipedia.png" height="20"> 172ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fwikipedia%2Fuptime.json)
| [Internet Archive](https://archive.org) | 🟩 Up | [internet-archive.yml](https://github.com/koj-co/upptime/commits/master/history/internet-archive.yml) | <img alt="Response time graph" src="./graphs/internet-archive.png" height="20"> 457ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Finternet-archive%2Fuptime.json)
| [Hacker News](https://news.ycombinator.com) | 🟩 Up | [hacker-news.yml](https://github.com/koj-co/upptime/commits/master/history/hacker-news.yml) | <img alt="Response time graph" src="./graphs/hacker-news.png" height="20"> 323ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fhacker-news%2Fuptime.json)
| [Broken Site](https://thissitedoesnotexist.com) | 🟥 Down | [broken-site.yml](https://github.com/koj-co/upptime/commits/master/history/broken-site.yml) | <img alt="Response time graph" src="./graphs/broken-site.png" height="20"> 0ms | ![Uptime 0.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fbroken-site%2Fuptime.json)
| Secret Site | 🟩 Up | [secret-site.yml](https://github.com/koj-co/upptime/commits/master/history/secret-site.yml) | <img alt="Response time graph" src="./graphs/secret-site.png" height="20"> 52ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fsecret-site%2Fuptime.json)
<!--end: status pages-->

<!--start: docs-->
## ⭐ How it works

- GitHub Actions is used as an uptime monitor
  - Every 5 minutes, a workflow visits your website to make sure it's up
  - Response time is recorded every 6 hours and committed to git
  - Graphs of response time are generated every day
- GitHub Issues are used for incident reports
  - An issue is opened if an endpoint is down
  - People from your team are assigned to the issue
  - Incidents reports are posted as issue comments
  - Issues are locked so non-members cannot comment on them
  - Issues are closed automatically when your site comes back up
  - Slack notifications are sent on updates
- GitHub Pages are used for the status website
  - A simple, beautiful, and accessible PWA is generated
  - Built with Svelte and Sapper
  - Fetches data from this repository using the GitHub API

[![Screenshot of status website](https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-status.png)](https://upptime.js.org)

## 💝 Who's using Upptime

<!-- prettier-ignore -->
<table>
  <tr>
    <td>
      <table>
        <tr>
          <td><a href="https://github.com/ShulertApp"><img src="https://avatars3.githubusercontent.com/u/64801699?v=4" height="50px" alt=""/></a></td>
          <td><a href="https://status.shulert.com"><strong>Shulert</strong><br><code>status.shulert.com</code></a></td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td><a href="https://github.com/koj-co"><img src="https://avatars3.githubusercontent.com/u/65495851?v=4" height="50px" alt=""/></a></td>
          <td><a href="https://status.koj.co"><strong>Koj</strong><br><code>status.koj.co</code></a></td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td><a href="https://github.com/wakatime"><img src="https://avatars3.githubusercontent.com/u/4814844?v=4" height="50px" alt=""/></a></td>
          <td><a href="https://status.wakatime.com"><strong>Wakatime</strong><br><code>status.wakatime.com</code></a></td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td><a href="https://github.com/stethoscope-js"><img src="https://avatars3.githubusercontent.com/u/71249357?v=4" height="50px" alt=""/></a></td>
          <td><a href="https://stethoscope.js.org/status/"><strong>Stethoscope</strong><br><code>stethoscope.js.org/status</code></a></td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td><a href="https://github.com/coinsambacom"><img src="https://avatars3.githubusercontent.com/u/69856662?v=4" height="50px" alt=""/></a></td>
          <td><a href="https://status.coinsamba.com/"><strong>Coinsamba</strong><br><code>https://status.coinsamba.com/</code></a></td>
        </tr>
      </table>
    </td>
  </tr>
</table>

[You too? Open a PR!](https://github.com/koj-co/upptime/edit/master/README.md)

## 👩‍💻 [Documentation](https://upptime.js.org)

1. [How it works](https://upptime.js.org/docs)
1. [Getting started](https://upptime.js.org/docs/get-started)
1. [Configuration](https://upptime.js.org/docs/configuration)
1. [Triggers](https://upptime.js.org/docs/triggers)
1. [Notifications](https://upptime.js.org/docs/notifications)
1. [Badges](https://upptime.js.org/docs/badges)
1. [Packages](https://upptime.js.org/docs/packages)
1. [Contributing](https://upptime.js.org/docs/contributing)

### Concepts

#### Issues as incidents

When the GitHub Actions workflow detects that one of your URLs is down, it automatically opens a GitHub issue ([example issue #15](https://github.com/koj-co/upptime/issues/15)). You can add incident reports to this issue by adding comments. When your site comes back up, the issue will be closed automatically as well.

<table>
  <tr>
    <td>
      <img alt="Screenshot of GitHub issue" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-issue.png">
    </td>
    <td>
      <img alt="Screenshot of incident page" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-incident.png">
    </td>
  </tr>
</table>

#### Commits for response time

Four times per day, another workflow runs and records the response time of your websites. This data is commited to GitHub, so it's available in the commit history of each file ([example commit history](https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml)). Then, the GitHub API is used to graph the response time history of each endpoint and to track when a site went down.

<table>
  <tr>
    <td>
      <img alt="Screenshot of GitHub commits" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-history.png">
    </td>
    <td>
      <img alt="Screenshot of live status" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-live-status.png">
    </td>
  </tr>
</table>
<!--end: docs-->

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)

<!--start: logo-->
<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
<!--end: logo-->
