import HTML from "node-html-parser";
import { esmDirName } from "../../src/system/path.js";
import { dirname, relative, resolve } from "path";
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
      routes: async (project = "default") => {
        const projectRoot = relative(
          workspace.root,
          wpConfig.projects[project].root
        );
        const configPath = resolve(wpConfig.output, projectRoot, "routes.js");
        const config = (await import(configPath)).default;
        const snapshotPath = resolve(
          workspace.root,
          "_snapshots_",
          projectRoot,
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

export function norm(str) {
  if (typeof str !== "string") {
    str = str.toString();
  }
  return str.replace(/\s+(?=<)/, "");
}
