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

  let readmeContent = await readFile(join(".", "README.md"), "utf8");

  const startText = readmeContent.split("<!--start: status pages-->")[0];
  const endText = readmeContent.split("<!--end: status pages-->")[1];

  const pageStatuses: Array<{
    url: string;
    status: string;
    slug: string;
    time: number;
  }> = [];

  let allUp = true;
  for await (const url of config.sites) {
    const slug = slugify(url.replace(/(^\w+:|^)\/\//, ""));
    const history = await octokit.repos.listCommits({
      owner,
      repo,
      path: `history/${slug}.yml`,
      per_page: 100,
    });
    if (!history.data.length) continue;
    const averageTime =
      history.data
        .filter(
          (item) =>
            item.commit.message.includes(" in ") &&
            Number(item.commit.message.split(" in ")[1].split("ms")[0]) !== 0
        )
        .map((item) =>
          Number(item.commit.message.split(" in ")[1].split("ms")[0])
        )
        .reduce((p, c) => p + c, 0) / history.data.length;
    const status = history.data[0].commit.message.split(" ")[0].includes("✅")
      ? "up"
      : "down";
    pageStatuses.push({
      url,
      slug,
      status,
      time: Math.floor(averageTime),
    });
    if (status === "down") allUp = false;
  }

  readmeContent = `${startText}<!--start: status pages-->

| URL | Status | History | Response Time |
| --- | ------ | ------- | ------------- |
${pageStatuses
  .map(
    (page) =>
      `| ${page.url} | ![](https://via.placeholder.com/10/${
        page.status === "up" ? "2ecc71" : "e74c3c"
      }/000000?text=+) ${page.status.toLocaleUpperCase()} | [${
        page.slug
      }.yml](https://github.com/${owner}/${repo}/commits/master/history/${
        page.slug
      }.yml) | ${page.time}ms |`
  )
  .join("\n")}

<!--end: status pages-->${endText}`;

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
    message: ":pencil: Update summary in README [skip ci]",
    content: Buffer.from(readmeContent).toString("base64"),
    sha,
  });
};
