import rimraf from "rimraf";
// @ts-ignore no definition available
import Gauge from "gauge";
import * as chokidar from "chokidar";
import * as path from "path";
import { ensureDirSync } from "../fs/path.js";
import { writeJSObject } from "../fs/write.js";
import {
  buildProject,
  compileAndWriteFile,
  compilerFromConfig,
  getProjectOutDir,
} from "../compilers/build.js";
import { getLangFromPath } from "../compilers/i18n.js";
import { watchProject } from "../compilers/watch.js";

/**
 * @typedef {import('../config/DaucusConfig').WorkspaceConfig} DaucusConfig
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {import('../config/WorkSpace').WorkSpace} WorkSpace
 * @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig
 * @typedef {import('@daucus/core').RoutesConfig} RoutesConfig
 * @typedef {import('./AbstractCommand').Command<BuildCommandOptions>} BuildCommandInterface
 * @typedef {import('./AbstractCommand').CommandConstructor<BuildCommandOptions>} BuildCommandConstructor
 *
 * @typedef {import('./build.options').BuildCommandOptions} BuildCommandOptions
 */

/**
 * @implements BuildCommandInterface
 * @type BuildCommandConstructor
 */
export class BuildCommand {
  static help = "generate static assets";

  static synopsis = "[project]";

  static options = [
    {
      name: "project",
      type: String,
      defaultOption: true,
      description: "Project to build (default: all).",
    },
    {
      name: "watch",
      type: Boolean,
      description: "Run build when files change.",
    },
  ];

  /**
   * @param {WorkSpace} workspace
   */
  constructor(workspace) {
    this.workspace = workspace;
    /** @private */
    this._compileLog = {
      gauge: new Gauge(process.stdout, {
        updateInterval: 50,
        theme: "colorASCII",
        cleanupOnExit: true,
      }),
      progress: 0,
    };
  }

  /**
   * @param {BuildCommandOptions} [params] command parameters
   *
   * @returns {Promise<Map<string, chokidar.FSWatcher> | undefined>}
   */
  async run(params = {}) {
    const workspaceConfig = await this.workspace.getConfig();
    this.config = workspaceConfig;

    this.clear();

    if (
      params.project &&
      !Object.keys(workspaceConfig.projects).includes(params.project)
    ) {
      throw new Error(`no configuration found for project ${params.project}`);
    }

    /**
     * @type {Array<[string, ProjectConfig]>}
     */
    const projects = params.project
      ? [[params.project, workspaceConfig.projects[params.project]]]
      : Object.entries(workspaceConfig.projects);

    console.log("compiling projects");
    this._logCompileProgress("init...");

    /** @type {RoutesConfig} */
    const routes = {};
    const mayberWatchers = await Promise.all(
      projects.map(async ([projectName, staticProjectConfig]) => {
        /** @type {ProjectConfig} */
        const projectConfig = {
          compiler: workspaceConfig.defaultCompiler,
          compilerOptions: workspaceConfig.defaultCompilerOptions,
          ...staticProjectConfig,
        };

        const compiler = await compilerFromConfig(projectConfig);

        routes[projectName] = await buildProject(
          compiler,
          projectName,
          projectConfig,
          workspaceConfig,
          (filePath, nbrOfFiles) => {
            this._logCompileProgress(
              `[${projectName}] ${filePath}`,
              1 / projects.length / nbrOfFiles
            );
          }
        );

        let watcher = null;
        if (params.watch) {
          watcher = watchProject(
            compiler,
            projectName,
            projectConfig,
            workspaceConfig
          );
          /** @type {[string, chokidar.FSWatcher]} */
          const rslt = [projectName, watcher];
          return rslt;
        }
      })
    );

    await writeJSObject(
      this.config.output,
      "routes.js",
      routes,
      "routes",
      "import('@daucus/core').I18NRoutesConfig"
    );
    this._closeLogProgress();
    // TODO: copy js files

    if (params.watch) {
      // @ts-ignore type enforced using params.watch
      return new Map(mayberWatchers);
    }
  }

  clear() {
    if (this.config) {
      rimraf.sync(this.config.output, { disableGlob: true });
      ensureDirSync(this.config.output);
    }
  }

  /**
   * @param {string} msg
   * @private
   */
  _logCompileProgress(msg, step = 0) {
    this._compileLog.progress += step;
    this._compileLog.gauge.show(
      `${Math.round(this._compileLog.progress * 100)}% - ${msg}`,
      this._compileLog.progress
    );
  }

  /**
   * @private
   */
  _closeLogProgress() {
    this._compileLog.gauge.disable();
    this._compileLog.progress = 0;
    console.log("done ✓");
  }
}
