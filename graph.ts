import { Octokit } from "@octokit/rest";
import slugify from "@sindresorhus/slugify";
import { readFile, writeFile, ensureDir } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";
import { CanvasRenderService } from "chartjs-node-canvas";

const canvasRenderService = new CanvasRenderService(600, 400);

export const generateGraphs = async () => {
  const config = safeLoad(
    await readFile(join(".", ".statusrc.yml"), "utf8")
  ) as {
    sites: { name: string; url: string }[];
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

  await ensureDir(join(".", "graphs"));

  for await (const site of config.sites) {
    const slug = slugify(site.name);
    const history = await octokit.repos.listCommits({
      owner,
      repo,
      path: `history/${slug}.yml`,
      per_page: 48,
    });
    if (!history.data.length) continue;
    const data: [number, string][] = history.data
      .filter(
        (item) =>
          item.commit.message.includes(" in ") &&
          Number(item.commit.message.split(" in ")[1].split("ms")[0]) !== 0
      )
      .map((item) => [
        Number(item.commit.message.split(" in ")[1].split("ms")[0]),
        String(item.commit.author.date),
      ]);
    const image = await canvasRenderService.renderToBuffer({
      type: "line",
      data: {
        labels: [1, ...data.map((item) => item[1])],
        datasets: [
          {
            backgroundColor: "#89e0cf",
            borderColor: "#1abc9c",
            data: [1, ...data.map((item) => item[0])],
          },
        ],
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    await writeFile(join(".", "graphs", `${slug}.png`), image);
  }
};

generateGraphs();
