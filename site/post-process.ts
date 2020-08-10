import fs from "fs";
import { join } from "path";

export const postProcess = () => {
  const configFile = fs.readFileSync(join(".", ".statusrc.yml")).toString();
  const cnameLine = configFile
    .split("\n")
    .find((line) => line.includes("cname:"));
  if (cnameLine) {
    fs.writeFileSync(
      join(".", "site", "__export__", "CNAME"),
      cnameLine.split("cname:")[1].trim()
    );
  }
};

postProcess();
