import rimraf from "rimraf";
// @ts-ignore no definition available
import Gauge from "gauge";
import { ensureDirSync } from "../fs/path.js";
import { writeJSObject } from "../fs/write.js";
import { buildProject } from "../compilers/build.js";

/**
 * @typedef {import('../config/DaucusConfig').DaucusConfig} DaucusConfig
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {import('../config/WorkSpace').WorkSpace} WorkSpace
 * @typedef {import('../routing/Route').ProjectRoutesConfig} ProjectRoutesConfig
 * @typedef {import('../routing/Route').RoutesConfig} RoutesConfig
 */

export class BuildCommand {
  static options = [
    {
      name: "project",
      type: String,
      defaultOption: true,
      description: "project to build (default: all)",
    },
  ];

  /**
   * @param {WorkSpace} workspace
   */
  constructor(workspace) {
    this.workspace = workspace;
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
   * @param {{ project?: string }} [params] command parameters
   */
  async run(params = {}) {
    const config = await this.workspace.getConfig();
    this.config = config;

    this.clear();

    if (
      params.project &&
      !Object.keys(config.projects).includes(params.project)
    ) {
      throw new Error(`no configuration found for project ${params.project}`);
    }

    /**
     * @type {Array<[string, ProjectConfig]>}
     */
    const projects = params.project
      ? [[params.project, config.projects[params.project]]]
      : Object.entries(config.projects);

    console.log("compiling projects");
    this._logCompileProgress("init...");

    /** @type {RoutesConfig} */
    const routes = {};
    await Promise.all(
      projects.map(async ([projectName, projectConfig]) => {
        routes[projectName] = await buildProject(
          projectName,
          {
            compiler: config.defaultCompiler,
            ...projectConfig,
          },
          config.output,
          config.htmlMinifierOptions,
          config.i18n,
          (filePath, nbrOfFiles) => {
            this._logCompileProgress(
              `[${projectName}] ${filePath}`,
              1 / projects.length / nbrOfFiles
            );
          }
        );
      })
    );

    await writeJSObject(this.config.output, "routes.js", routes);
    this._closeLogProgress();
    // TODO: copy js files
  }

  clear() {
    if (this.config) {
      rimraf.sync(this.config.output, { disableGlob: true });
      ensureDirSync(this.config.output);
    }
  }

  /**
   * @param {string} msg
   */
  _logCompileProgress(msg, step = 0) {
    this._compileLog.progress += step;
    this._compileLog.gauge.show(
      `${Math.round(this._compileLog.progress * 100)}% - ${msg}`,
      this._compileLog.progress
    );
  }

  _closeLogProgress() {
    this._compileLog.gauge.disable();
    this._compileLog.progress = 0;
    console.log("done ✓");
  }
}
