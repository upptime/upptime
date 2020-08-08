import { readFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";

export const update = async () => {
  const config = safeLoad(
    await readFile(join(".", ".statusrc.yml"), "utf8")
  ) as { sites: string[] };
  for await (const url of config.sites) {
    console.log("Checking", url);
  }
};

update();
