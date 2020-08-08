# ⬆️ Koj Status

This repository uses GitHub Actions as an uptime monitor to track the status of Koj websites.

Live status: <!--live status--> ![](https://via.placeholder.com/10/2ecc71/000000?text=+) **All systems operational**

## ⭐ How it works

- Every 5 minutes, a GitHub Actions workflow tries to visit our websites
- It records the response time and commits it for git history
- If a site is down, an issue is opened and `CODEOWNERS` are tagged
- This README shows the status summary and average response time
- Our static status site uses the GitHub API to generate our status site

If you want your own GitHub Actions-powered uptime monitor, [use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) or fork this repository, change the `./statusrc.yml` file with the URLs to visit, and enable Actions.

## 📈 Status

<!--start: status pages-->

| URL | Status | History | Response Time |
| --- | ------ | ------- | ------------- |
| https://koj.co | ![](https://via.placeholder.com/10/e74c3c/000000?text=+) DOWN | [koj-co.yml](./history/koj-co.yml) | 171.33333333333334ms |

<!--end: status pages-->

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- Data in the `./history` directory: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)
