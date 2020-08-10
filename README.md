# ⬆️ Up.js

Up.js is the open-source uptime monitor and status page, powered entirely by GitHub Actions and Issues.

Live status: <!--live status--> **🟩 All systems operational**

## ⭐ How it works

- Every 5 minutes, a GitHub Actions workflow tries to visit our websites
- If your site is not online, an issue is opened and `CODEOWNERS` are tagged
- You can add incident details as comments, and issues are auto-closed when your site is back up
- Four times a day, the response time is recorded commited for git history
- This README shows the status summary and average response time
- A static site built with Svelte/Sapper uses the GitHub API to show real-time status

## 📈 Status

<!--start: status pages-->

| URL | Status | History | Response Time | Uptime |
| --- | ------ | ------- | ------------- | ------ |
| [Koj.co](https://koj.co) | 🟩 Up | [koj-co.yml](https://github.com/koj-co/status/commits/master/history/koj-co.yml) | <img alt="Response time graph" src="./history/koj-co.png" height="20"> 335ms | 100.00%
| [Koj CDN](https://kojcdn.com) | 🟩 Up | [koj-cdn.yml](https://github.com/koj-co/status/commits/master/history/koj-cdn.yml) | <img alt="Response time graph" src="./history/koj-cdn.png" height="20"> 535ms | 100.00%
| [URL Shortener](https://go.koj.co) | 🟩 Up | [url-shortener.yml](https://github.com/koj-co/status/commits/master/history/url-shortener.yml) | <img alt="Response time graph" src="./history/url-shortener.png" height="20"> 129ms | 100.00%
| [Koj Status](https://status.koj.co) | 🟩 Up | [koj-status.yml](https://github.com/koj-co/status/commits/master/history/koj-status.yml) | <img alt="Response time graph" src="./history/koj-status.png" height="20"> 139ms | 100.00%
| [Koj Analytics](https://analytics.koj.co) | 🟩 Up | [koj-analytics.yml](https://github.com/koj-co/status/commits/master/history/koj-analytics.yml) | <img alt="Response time graph" src="./history/koj-analytics.png" height="20"> 282ms | 100.00%
| [Koj API](https://api.koj.co) | 🟩 Up | [koj-api.yml](https://github.com/koj-co/status/commits/master/history/koj-api.yml) | <img alt="Response time graph" src="./history/koj-api.png" height="20"> 279ms | 100.00%

<!--end: status pages-->

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)
