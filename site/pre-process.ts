import { readFile, writeJson, ensureDir } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";

export const preProcess = async () => {
  const i18n = safeLoad(await readFile(join(".", "i18n.yml"), "utf8")) as {
    [index: string]: string;
  };

  const config = safeLoad(
    await readFile(join("..", ".upptimerc.yml"), "utf8")
  ) as {
    logoUrl?: string;
    name?: string;
    introTitle?: string;
    introMessage?: string;
    i18n?: { [index: string]: string };
  };
  config.i18n = { ...i18n, ...config.i18n };
  await ensureDir(join(".", "src", "data"));
  await writeJson(join(".", "src", "data", "config.json"), config);
};

preProcess();
