import { readFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { Curl, CurlFeature } from "node-libcurl";
import { join } from "path";

export const update = async () => {
  const config = safeLoad(
    await readFile(join(".", ".statusrc.yml"), "utf8")
  ) as { sites: string[] };
  for await (const url of config.sites) {
    console.log("Checking", url);
    const result = await curlIt(url);
    console.log("Result", result);
  }
};

const curlIt = (
  url: string
): Promise<{ httpCode: number; totalTime: number }> =>
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
