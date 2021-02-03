import { loadCompiler } from "../compilers/load.js";
import rimraf from "rimraf";
import { ensureDirSync } from "../fs/path.js";
import { writeJSObject } from "../fs/write.js";
import Gauge from "gauge";
import { buildProject } from "../compilers/build.js";

/**
 * @typedef {import('../../types/DaucusConfig').DaucusConfig} DaucusConfig
 * @typedef {import('../../types/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {import('../../types/WorkSpace').WorkSpace} WorkSpace
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
    this.config = await this.workspace.getConfig();

    this.clear();

    if (
      params.project &&
      !Object.keys(this.config.projects).includes(params.project)
    ) {
      throw new Error(`no configuration found for project ${params.project}`);
    }

    /**
     * @type {Array<[string, ProjectConfig]>}
     */
    this.projects = params.project
      ? [[params.project, this.config.projects[params.project]]]
      : Object.entries(this.config.projects);

    console.log("compiling projects");
    this._logCompileProgress("init...");
    const routes = {};
    for (const [projectName, projectConfig] of this.projects) {
      routes[projectName] = await buildProject(
        projectName,
        {
          compiler: this.config.defaultCompiler,
          ...projectConfig,
        },
        this.config.output,
        this.config.htmlMinifierOptions,
        (filePath, nbrOfFiles) => {
          this._logCompileProgress(
            `[${projectName}] ${filePath}`,
            1 / this.projects.length / nbrOfFiles
          );
        }
      );
    }
    await writeJSObject(this.config.output, "routes.js", routes);
    this._closeLogProgress();
    ///////////// TODO-HERE ////////
    // copy js files
  }

  clear() {
    rimraf.sync(this.config.output, { disableGlob: true });
    ensureDirSync(this.config.output);
  }

  async getCompilerFor(project) {
    const compilerFromConfig = project?.compiler || this.config.defaultCompiler;

    if (typeof compilerFromConfig === "function") {
      return compilerFromConfig;
    }

    return loadCompiler(compilerFromConfig);
  }

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
