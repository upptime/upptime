import { readFile, writeFile, copyFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";

export const preProcess = async () => {
  const config = safeLoad(
    await readFile(join("..", ".upptimerc.yml"), "utf8")
  ) as {
    "status-website"?: {
      cname?: string;
    };
  };
  if (config["status-website"]?.cname)
    await writeFile(
      join(".", "__sapper__", "export", "CNAME"),
      config["status-website"]?.cname
    );
  await copyFile(
    join(".", "__sapper__", "export", "service-worker-index.html"),
    join(".", "__sapper__", "export", "404.html")
  );
};

preProcess();
