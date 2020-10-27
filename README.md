# [![Upptime](./assets/logo.svg)](https://upptime.js.org)

Upptime (https://upptime.js.org) is the open-source uptime monitor and status page, powered entirely by GitHub Actions and Issues.

[![Static Site CI](https://github.com/koj-co/upptime/workflows/Static%20Site%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Static+Site+CI%22)
[![Graphs CI](https://github.com/koj-co/upptime/workflows/Graphs%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Graphs+CI%22)
[![Response Time CI](https://github.com/koj-co/upptime/workflows/Response%20Time%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Response+Time+CI%22)
[![Summary CI](https://github.com/koj-co/upptime/workflows/Summary%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Summary+CI%22)
[![Uptime CI](https://github.com/koj-co/upptime/workflows/Uptime%20CI/badge.svg)](https://github.com/koj-co/upptime/actions?query=workflow%3A%22Uptime+CI%22)

## [📈 Live Status](https://upptime.js.org): <!--live status--> **🟨 Partial outage**

<!--start: status pages-->
| URL | Status | History | Response Time | Uptime |
| --- | ------ | ------- | ------------- | ------ |
| [Google](https://www.google.com) | 🟩 Up | [google.yml](https://github.com/koj-co/upptime/commits/master/history/google.yml) | <img alt="Response time graph" src="./graphs/google.png" height="20"> 85ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fuptime.json)
| [Wikipedia](https://en.wikipedia.org) | 🟩 Up | [wikipedia.yml](https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml) | <img alt="Response time graph" src="./graphs/wikipedia.png" height="20"> 177ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fwikipedia%2Fuptime.json)
| [Internet Archive](https://archive.org) | 🟩 Up | [internet-archive.yml](https://github.com/koj-co/upptime/commits/master/history/internet-archive.yml) | <img alt="Response time graph" src="./graphs/internet-archive.png" height="20"> 461ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Finternet-archive%2Fuptime.json)
| [Hacker News](https://news.ycombinator.com) | 🟩 Up | [hacker-news.yml](https://github.com/koj-co/upptime/commits/master/history/hacker-news.yml) | <img alt="Response time graph" src="./graphs/hacker-news.png" height="20"> 319ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fhacker-news%2Fuptime.json)
| [Broken Site](https://thissitedoesnotexist.com) | 🟥 Down | [broken-site.yml](https://github.com/koj-co/upptime/commits/master/history/broken-site.yml) | <img alt="Response time graph" src="./graphs/broken-site.png" height="20"> 0ms | ![Uptime 0.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fbroken-site%2Fuptime.json)
| Secret Site | 🟩 Up | [secret-site.yml](https://github.com/koj-co/upptime/commits/master/history/secret-site.yml) | <img alt="Response time graph" src="./graphs/secret-site.png" height="20"> 51ms | ![Uptime 100.00%](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fsecret-site%2Fuptime.json)
<!--end: status pages-->

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

[![Screenshot of status website](./assets/screenshot-status.png)](https://upptime.js.org)

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

## 👩‍💻 Getting started

1. Create a new repository [using this template](https://github.com/koj-co/upptime/generate)
2. Update the [`.upptimerc.yml`](./.upptimerc.yml) file with your configuration
3. Enable publishing the `gh-pages` branch for your status website and add a `GH_PAT`

### Concepts

#### Issues as incidents

When the GitHub Actions workflow detects that one of your URLs is down, it automatically opens a GitHub issue ([example issue #15](https://github.com/koj-co/upptime/issues/15)). You can add incident reports to this issue by adding comments. When your site comes back up, the issue will be closed automatically as well.

<table>
  <tr>
    <td>
      <img alt="Screenshot of GitHub issue" src="./assets/screenshot-issue.png">
    </td>
    <td>
      <img alt="Screenshot of incident page" src="./assets/screenshot-incident.png">
    </td>
  </tr>
</table>

#### Commits for response time

Four times per day, another workflow runs and records the response time of your websites. This data is commited to GitHub, so it's available in the commit history of each file ([example commit history](https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml)). Then, the GitHub API is used to graph the response time history of each endpoint and to track when a site went down.

<table>
  <tr>
    <td>
      <img alt="Screenshot of GitHub commits" src="./assets/screenshot-history.png">
    </td>
    <td>
      <img alt="Screenshot of live status" src="./assets/screenshot-live-status.png">
    </td>
  </tr>
</table>

### Configuration

- [Repository](#repository)
- [Endpoints](#endpoints)
- [User agent](#user-agent)
- [Notifications](#notifications)
- [Assignees](#assignees)
- [Branding](#branding)
- [Intro text](#intro-text)
- [Site deployment](#site-deployment)
- [Internationalization](#internationalization)

The [`.upptimerc.yml`](./.upptimerc.yml) file is used as the central configuration for Upptime, with this syntax:

```yaml
owner: koj-co # GitHub username
repo: upptime # GitHub repository name
user-agent: koj-co
sites: # List of endpoints to track
  - name: Google
    url: https://www.google.com
assignees: # Users to assign downtime issues (optional)
  - AnandChowdhary
status-website: # Status website (optional)
  cname: upptime.js.org # Custom domain CNAME
  name: Upptime # Status website title
```

#### Repository

A GitHub repository is used as the "source of truth" for your uptime logs, and the static site uses the GitHub API and fetches data from this repository.

After you've created a new repository using this template (see [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)), specify the username and repository name in the configuration:

```yaml
owner: koj-co
repo: upptime
```

#### Endpoints

You can track as many websites as you like. Add the names and URLs of your endpoints in the `sites` key:

```yaml
sites:
  - name: Google
    url: https://www.google.com
  - name: DuckDuckGo
    url: https://duckduckgo.com
```

To make `POST` requests (or any other HTTP verb), you can add the `method` key:

```yaml
sites:
  - name: POST to Google
    url: https://www.google.com
    method: POST
  - name: DELETE Example
    url: https://example.com
    method: DELETE
```

If you don't want to show a URL publicly, you can use repository secrets (see [Creating and storing encrypted secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)). Instead of the plain text URL, add the name of the secret prefixed with a `$` character:

```yaml
- name: Secret Site
  url: $SECRET_SITE
```

In the above example, a secret named `SECRET_SITE` (without the `$`) is stored in the repository. Note that you'll also have to add this secret as an environment variable in each workflow file in [`.github/workflows`](./.github/workflows):

```yaml
# Example: .github/workflows/graphs.yml
# ...
- name: Run script
  run: npm run graphs
  env:
    SECRET_SITE: ${{ secrets.SECRET_SITE }} # Add your repository secret
```

#### User agent

Requests made to the GitHub API must include a valid `User-Agent` header (see [User Agent required](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#user-agent-required)). It is recommended to use your GitHub username here:

```yaml
user-agent: your-github-username
```

#### Notifications

You can add services to send downtime notifications to. Currently, only Slack notifications are supported.

##### Slack

Use `slack` as the `type` and provide a Slack channel ID as `channel` in the configuration.

```yaml
notifications:
  - type: slack
    channel: C01XQ3U9M9P
```

A Slack App has to be registered and installed prior to usage, with the scope `chat:write` (see [chat.postMessage](https://api.slack.com/methods/chat.postMessage) docs), and the environment variable `SLACK_APP_ACCESS_TOKEN` should be set with the Slack Bot User OAuth Access Token. You can use GitHub Secrets to add it.

#### Assignees

You can add members of your team to be assigned to every downtime issue:

```yaml
assignees:
  - AnandChowdhary
  - CarloBadini
```

If you want particular users to be assigned per-site, you can add `assignees` under each entry in `sites`:

```yaml
sites:
  - name: Google
    url: https://www.google.com
    assignees:
      - AnandChowdhary
```

#### Branding

A static website with PWA is also generated, and you can customize the logo and name in the navbar:

```yaml
status-website:
  name: Upptime
  logoUrl: https://example.com/image.jpg
```

If you want to add a custom domain, you can add the `cname` key:

```yaml
status-website:
  name: Upptime
  logoUrl: https://example.com/image.jpg
  cname: upptime.js.org # Custom CNAME
```

#### Intro text

Optionally, you can add some introductory text to the website. You can use Markdown:

```yaml
status-website:
  introTitle: "**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub."
  introMessage: This is a sample status page which uses **real-time** data from our [Github repository](https://github.com/koj-co/upptime). No server required — just GitHub Actions, Issues, and Pages.
```

#### Site deployment

Because GitHub Pages does not support the default `GITHUB_TOKEN` available to workflows, you'll have to set a secret `GH_PAT` with a Personal Access Token. For more info, see: https://github.com/maxheld83/ghpages#secrets.

#### Internationalization

Though our status page is in English, you can use any language with Upptime by supplying the required strings. The list of all required strings is available in [`site/i18n.yml`](./site/i18n.yml), and you can add them under the `i18n` key in the configuration file:

```yaml
i18n:
  activeIncidents: Incidentes activos
  allSystemsOperational: Todos los sistemas están operativos
  # ...
```

### Updating

This template is updated from time to time, so you can use the [`update-template`](https://github.com/koj-co/update-template) command to sync the changes from this GitHub repository template:

```bash
npm run update-template
```

### Badges

You can use the [Shields.io](https://shields.io) service with the API endpoint generated by your repository's `api` directory. For example, the URL https://raw.githubusercontent.com/koj-co/upptime/master/api/google/uptime.json has the following JSON schema:

```json
{
  "schemaVersion": 1,
  "label": "uptime",
  "message": "100%",
  "color": "brightgreen"
}
```

This translates to this badge: ![Uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fuptime.json)

```md
![Uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fuptime.json)
```

Similarly, response time badges are available: ![Response time](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fresponse-time.json)

```md
![Uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkoj-co%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fresponse-time.json)
```

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
