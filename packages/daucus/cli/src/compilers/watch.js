import * as chokidar from "chokidar";
import * as path from "path";
import { updateFileJSObject } from "../fs/write.js";
import {
  buildProject,
  compileAndWriteFile,
  getProjectOutDir,
} from "./build.js";
import { getLangFromPath } from "./i18n.js";

/**
 * Rebuild project files on change
 *
 * @param {string} projectName - name of the project to watch
 * @param {import("./compiler.js").FunctionCompiler} compiler - function compiler to use
 * @param {import("../config/DaucusConfig.js").ProjectConfig} projectConfig - configuration for the watched project
 * @param {import('../config/DaucusConfig.js').WorkspaceConfig} workspaceConfig - global Daucus Workspace configuration
 * @param {(message?: any, ...optionalParams: any[]) => void } log - logging function
 */
export function watchProject(
  compiler,
  projectName,
  projectConfig,
  workspaceConfig,
  log = console.log.bind(console)
) {
  const watcher = chokidar.watch(projectConfig.src, {
    cwd: projectConfig.root,
    ignored: projectConfig.exclude || ["**/node_modules/**"],
  });

  watcher.on("ready", () => {
    log("watching for file changes...");
  });

  watcher.on("change", async (relativeFilePath) => {
    const filePath = path.resolve(projectConfig.root, relativeFilePath);
    log(`[${projectName}] ${relativeFilePath} changed`);
    const lang = getLangFromPath(filePath, projectConfig.root);
    const projectOutDir = await getProjectOutDir(
      lang,
      projectName,
      workspaceConfig.output
    );
    await compileAndWriteFile(
      compiler,
      filePath,
      lang,
      projectName,
      projectConfig,
      projectOutDir,
      workspaceConfig.htmlMinifierOptions
    );
    log(`[${projectName}] ${relativeFilePath} compiled ✓`);
  });

  const rebuildProject = async (/** @type {string} */ relativeFilePath) => {
    log(`[${projectName}] ${relativeFilePath} added`);
    log(`rebuilding project...`);

    try {
      const route = await buildProject(
        compiler,
        projectName,
        projectConfig,
        workspaceConfig
      );
      await updateFileJSObject(
        workspaceConfig.output,
        "routes.js",
        projectName,
        route,
        "routes",
        "import('@daucus/core').I18NRoutesConfig"
      );
    } catch (err) {
      log(`build of ${projectName} failed`);
      log(err);
    }
  };

  watcher.on("add", rebuildProject);
  watcher.on("unlink", rebuildProject);

  return watcher;
}
