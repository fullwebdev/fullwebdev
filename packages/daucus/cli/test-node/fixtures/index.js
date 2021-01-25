import HTML from "node-html-parser";
import { esmDirName } from "../../src/system/path.js";
import { dirname, resolve } from "path";
import { WorkSpace as DaucusWorkspace } from "../../src/config/workspace.js";
import { readFileSync } from "fs";
import { DaucusCLI } from "../../src/cli/DaucusCLI.js";
import globby from "globby";

/** @typedef {"default" | "js-config"} fixtureId */

/**
 * @type {{[key: fixtureId]: string}}
 */
export const configs = {
  default: resolve(esmDirName(import.meta), "default", "daucus.config.json"),
  jsConfig: resolve(esmDirName(import.meta), "js-config", "daucus.config.js"),
  snarkdown: resolve(
    esmDirName(import.meta),
    "snarkdown",
    "daucus.config.json"
  ),
  "import-snippet": resolve(
    esmDirName(import.meta),
    "import-snippet",
    "daucus.config.json"
  ),
};

export const outputDirectory = (dir) => (relativePath) => {
  const path = resolve(dir, relativePath);
  const content = readFileSync(path, { encoding: "utf8" });
  return HTML.parse(content);
};

export async function workspaceInfos(workspace) {
  const config = await workspace.getConfig();
  return {
    config,
    output: {
      html: {
        list: () => globby("**/*.html", { cwd: config.output }),
        parse: outputDirectory(config.output),
      },
    },
  };
}

/**
 * @param {fixtureId} base
 * @returns {Promise<DaucusWorkspace & { __fx: { config: string, htmlOutput: (relativePath: string) => any}}>}
 */
export async function fixtureWorkspace(base) {
  return new DaucusWorkspace(base ? configs[base] : {});
}

export async function exec(args, from) {
  const [fixtureName, ...dirs] = from.split("/");
  const cmd = new DaucusCLI(args.split(" "), {
    cwd: resolve(dirname(configs[fixtureName]), ...dirs),
  });
  // TODO: capture logs
  await cmd.run();
  return cmd;
}

export function norm(str) {
  if (typeof str !== "string") {
    str = str.toString();
  }
  return str.replace(/\s+(?=<)/, "");
}
