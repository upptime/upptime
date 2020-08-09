# ⬆️ Koj Status

This repository uses GitHub Actions as an uptime monitor to track the status of Koj websites.

Live status: <!--live status--> ![](https://via.placeholder.com/10/e74c3c/000000?text=+) **Outage**

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
| https://koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [koj-co.yml](https://github.com/koj-co/status/commits/master/history/koj-co.yml) | <img alt="Response time graph" src="./history/koj-co.png" height="20"> 326ms | 0.00
| https://example.koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [example-koj-co.yml](https://github.com/koj-co/status/commits/master/history/example-koj-co.yml) | <img alt="Response time graph" src="./history/example-koj-co.png" height="20"> 129ms | 691153.24
| https://kojcdn.com | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [kojcdn-com.yml](https://github.com/koj-co/status/commits/master/history/kojcdn-com.yml) | <img alt="Response time graph" src="./history/kojcdn-com.png" height="20"> 517ms | 0.00
| https://go.koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [go-koj-co.yml](https://github.com/koj-co/status/commits/master/history/go-koj-co.yml) | <img alt="Response time graph" src="./history/go-koj-co.png" height="20"> 245ms | 0.00
| https://status.koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [status-koj-co.yml](https://github.com/koj-co/status/commits/master/history/status-koj-co.yml) | <img alt="Response time graph" src="./history/status-koj-co.png" height="20"> 231ms | 0.00
| https://analytics.koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [analytics-koj-co.yml](https://github.com/koj-co/status/commits/master/history/analytics-koj-co.yml) | <img alt="Response time graph" src="./history/analytics-koj-co.png" height="20"> 265ms | 0.00
| https://api.koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [api-koj-co.yml](https://github.com/koj-co/status/commits/master/history/api-koj-co.yml) | <img alt="Response time graph" src="./history/api-koj-co.png" height="20"> 270ms | 0.00

<!--end: status pages-->

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)
