import HTML from "node-html-parser";
import { dirname, resolve } from "path";
import { readFileSync } from "fs";
import { globby } from "globby";
import { esmDirName } from "../../src/fs/path.js";
import { WorkSpace as DaucusWorkspace } from "../../src/config/workspace.js";
import { DaucusCLI } from "../../src/cli/DaucusCLI.js";

/** @typedef {"default" | "js-config"} fixtureId */

/**
 * @type {{[key: fixtureId]: string}}
 */
export const configs = {
  default: resolve(esmDirName(import.meta), "default", "daucus.config.json"),
  reverse: resolve(esmDirName(import.meta), "reverse", "daucus.config.json"),
  i18n: resolve(esmDirName(import.meta), "i18n", "daucus.config.json"),
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

/**
 *
 * @param {DaucusWorkspace} workspace
 */
export async function workspaceInfos(workspace) {
  const wpConfig = await workspace.getConfig();
  return {
    config: wpConfig,
    output: {
      html: {
        list: async () =>
          (await globby("**/*.html", { cwd: wpConfig.output })).sort(),
        parse: (relativePath) => {
          const path = resolve(wpConfig.output, relativePath);
          const content = readFileSync(path, { encoding: "utf8" });
          return HTML.parse(content);
        },
      },
      routes: async () => {
        const configPath = resolve(wpConfig.output, "routes.js");
        const config = (await import(configPath)).default;
        const snapshotPath = resolve(
          workspace.root,
          "_snapshots_",
          "routes.js"
        );
        const snapshot = (await import(snapshotPath)).default;
        return { config, snapshot };
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

export function norm(param) {
  let str = param;
  if (typeof str !== "string") {
    str = str.toString();
  }
  return str.replace(/\s+(?=<)/, "");
}
