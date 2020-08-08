import { Octokit } from "@octokit/rest";
import slugify from "@sindresorhus/slugify";
import { readFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { Curl, CurlFeature } from "node-libcurl";
import { join } from "path";
import { generateSummary } from "./summary";

export const update = async () => {
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

  let hasDelta = false;
  for await (const url of config.sites) {
    const slug = slugify(url.replace(/(^\w+:|^)\/\//, ""));
    console.log("Checking", url);
    let currentStatus = "unknown";
    try {
      currentStatus =
        (await readFile(join(".", "history", `${slug}.yml`), "utf8"))
          .split("\n")
          .find((line) => line.toLocaleLowerCase().includes("status"))
          ?.split(":")[1]
          .trim() || "unknown";
    } catch (error) {}
    try {
      const result = await curl(url);
      console.log("Result", result);
      const responseTime = (result.totalTime * 1000).toFixed(0);
      const status =
        result.httpCode >= 400 || result.httpCode < 200 ? "down" : "up";
      const content = `- url: ${url}
- status: ${status}
- code: ${result.httpCode}
- responseTime: ${responseTime}
- lastUpdated: ${new Date().toISOString()}
`;

      const sha = (
        await octokit.repos.getContent({
          owner,
          repo,
          path: `history/${slug}.yml`,
        })
      ).data.sha;
      const fileUpdateResult = await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: `history/${slug}.yml`,
        message: `${status === "up" ? "✅" : "❌"} ${url} is ${status} (${
          result.httpCode
        } in ${responseTime}ms) [skip ci]`,
        content: Buffer.from(content).toString("base64"),
        sha,
      });

      if (currentStatus !== status) {
        hasDelta = true;

        const issues = await octokit.issues.list({
          owner,
          repo,
          labels: `status,${slug}`,
          state: "open",
          sort: "created",
          direction: "desc",
          per_page: 1,
        });

        // If the site was just recorded as down, open an issue
        if (status === "down") {
          if (!issues.data.length)
            await octokit.issues.create({
              owner,
              repo,
              title: `⚠️ ${url} is down`,
              body: `In ${fileUpdateResult.data.commit.sha.substr(
                0,
                7
              )}, ${url} was **down**:

- HTTP code: ${result.httpCode}
- Response time: ${responseTime} ms
`,
              assignees: config.assignees,
              labels: ["status", slug],
            });
        } else if (issues.data.length) {
          // If the site just came back up
          await octokit.issues.createComment({
            owner,
            repo,
            issue_number: issues.data[0].id,
            body: `${url} is back up in ${fileUpdateResult.data.commit.sha.substr(
              0,
              7
            )}.`,
          });
          await octokit.issues.update({
            owner,
            repo,
            issue_number: issues.data[0].id,
            state: "closed",
          });
        }
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  if (hasDelta) generateSummary();
};

const curl = (url: string): Promise<{ httpCode: number; totalTime: number }> =>
  new Promise((resolve, reject) => {
    const curl = new Curl();
    curl.enable(CurlFeature.Raw);
    curl.setOpt("URL", url);
    curl.setOpt("FOLLOWLOCATION", 1);
    curl.setOpt("MAXREDIRS", 3);
    curl.setOpt("USERAGENT", "Koj Bot");
    curl.setOpt("CONNECTTIMEOUT", 10);
    curl.setOpt("TIMEOUT", 30);
    curl.setOpt("HEADER", 1);
    curl.setOpt("VERBOSE", false);
    curl.setOpt("CUSTOMREQUEST", "GET");
    curl.on("error", () => {
      curl.close();
      return reject();
    });
    curl.on("end", () => {
      let httpCode = 0;
      let totalTime = 0;
      try {
        httpCode = Number(curl.getInfo("RESPONSE_CODE"));
        totalTime = Number(curl.getInfo("TOTAL_TIME"));
      } catch (error) {
        curl.close();
        return reject(error);
      }
      return resolve({ httpCode, totalTime });
    });
    curl.perform();
  });

update();
