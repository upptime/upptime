# ⬆️ Koj Status

This repository uses GitHub Actions as an uptime monitor to track the status of Koj websites.

Live status: <!--live status--> **🟥 Outage**

## ⭐ How it works

- Every 5 minutes, a GitHub Actions workflow tries to visit our websites
- It records the response time and commits it for git history
- If a site is down, an issue is opened and `CODEOWNERS` are tagged
- This README shows the status summary and average response time
- Our static status site uses the GitHub API to generate our status site

If you want your own GitHub Actions-powered uptime monitor, [use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) or fork this repository, change the `./statusrc.yml` file with the URLs to visit, and enable Actions.

## 📈 Status

<!--start: status pages-->

| URL | Status | History | Response Time | Uptime |
| --- | ------ | ------- | ------------- | ------ |
| https://koj.co | 🟩 Up | [koj-co.yml](https://github.com/koj-co/status/commits/master/history/koj-co.yml) | <img alt="Response time graph" src="./history/koj-co.png" height="20"> 320ms | 100.00%
| https://example.koj.co | 🟥 Down | [example-koj-co.yml](https://github.com/koj-co/status/commits/master/history/example-koj-co.yml) | <img alt="Response time graph" src="./history/example-koj-co.png" height="20"> 134ms | 99.95%
| https://kojcdn.com | 🟩 Up | [kojcdn-com.yml](https://github.com/koj-co/status/commits/master/history/kojcdn-com.yml) | <img alt="Response time graph" src="./history/kojcdn-com.png" height="20"> 506ms | 100.00%
| https://go.koj.co | 🟩 Up | [go-koj-co.yml](https://github.com/koj-co/status/commits/master/history/go-koj-co.yml) | <img alt="Response time graph" src="./history/go-koj-co.png" height="20"> 232ms | 100.00%
| https://status.koj.co | 🟩 Up | [status-koj-co.yml](https://github.com/koj-co/status/commits/master/history/status-koj-co.yml) | <img alt="Response time graph" src="./history/status-koj-co.png" height="20"> 221ms | 100.00%
| https://analytics.koj.co | 🟩 Up | [analytics-koj-co.yml](https://github.com/koj-co/status/commits/master/history/analytics-koj-co.yml) | <img alt="Response time graph" src="./history/analytics-koj-co.png" height="20"> 257ms | 100.00%
| https://api.koj.co | 🟩 Up | [api-koj-co.yml](https://github.com/koj-co/status/commits/master/history/api-koj-co.yml) | <img alt="Response time graph" src="./history/api-koj-co.png" height="20"> 262ms | 100.00%

<!--end: status pages-->

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)
