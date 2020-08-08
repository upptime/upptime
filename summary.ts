import { Octokit } from "@octokit/rest";
import slugify from "@sindresorhus/slugify";
import { readFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";

export const generateSummary = async () => {
  const config = safeLoad(
    await readFile(join(".", ".statusrc.yml"), "utf8")
  ) as {
    sites: string[];
    owner: string;
    repo: string;
    userAgent?: string;
    PAT?: string;
    assignees?: string[];
  };
  const owner = config.owner;
  const repo = config.repo;

  const octokit = new Octokit({
    auth: config.PAT || process.env.GH_PAT || process.env.GITHUB_TOKEN,
    userAgent: config.userAgent || process.env.USER_AGENT || "KojBot",
  });

  // Check if all sites are up
  const issues = await octokit.issues.list({
    owner,
    repo,
    labels: "status",
    state: "open",
    sort: "created",
    direction: "desc",
    per_page: 1,
  });
  const allUp = issues.data.length === 0;

  let readmeContent = await readFile(join(".", "README.md"), "utf8");

  // Add live status line
  readmeContent = readmeContent
    .split("\n")
    .map((line) => {
      if (line.includes("<!--live status-->")) {
        line = `Live status: <!--live status--> ![](https://via.placeholder.com/10/${
          allUp ? "2ecc71" : "e74c3c"
        }/000000?text=+) **${allUp ? "All systems operational" : "Outage"}**`;
      }
      return line;
    })
    .join("\n");

  const startText = readmeContent.split("<!--start: status pages-->")[0];
  const endText = readmeContent.split("<!--end: status pages-->")[1];

  const pageStatuses: Array<{
    url: string;
    status: string;
    slug: string;
    time: number;
  }> = [];

  for await (const url of config.sites) {
    const slug = slugify(url.replace(/(^\w+:|^)\/\//, ""));
    const history = octokit.repos.listCommits({
      owner,
      repo,
      path: `history/${slug}.yml`,
      per_page: 100,
    });
  }

  readmeContent = `${startText}<!--start: status pages-->

| URL | Status | History | Response Time |
| --- | ------ | ------- | ------------- |
| https://koj.co | ![](https://via.placeholder.com/10/2ecc71/000000?text=+) Up | [koj-co.yml](./history/koj-co.yml) | 231ms |

<!--end: status pages-->${endText}`;

  const sha = (
    await octokit.repos.getContent({
      owner,
      repo,
      path: "README.md",
    })
  ).data.sha;
  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: "README.md",
    message: ":pencil: Update summary in README",
    content: Buffer.from(readmeContent).toString("base64"),
    sha,
  });
};
