import * as chokidar from "chokidar";
import * as path from "path";
import { compileAndWriteFile, getProjectOutDir } from "./build.js";
import { getLangFromPath } from "./i18n.js";

/**
 * Rebuild project files on change
 *
 * @param {string} projectName - name of the project to watch
 * @param {import("./compiler.js").FunctionCompiler} compiler - function compiler to use
 * @param {import("../config/DaucusConfig.js").ProjectConfig} projectConfig - configuration for the watched project
 * @param {{ output: string; htmlMinifierOptions: import("html-minifier").Options; }} workspaceConfig - global Daucus Workspace configuration
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

  return watcher;
}
