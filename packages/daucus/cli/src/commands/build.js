import { promises as asyncFs } from "fs";
import * as path from "path";
import { loadCompiler } from "../compilers/load.js";
import rimraf from "rimraf";
import globby from "globby";
import { ensureDirSync, ensureDir } from "../system/path.js";
import { dirname, relative } from "path";
import Gauge from "gauge";
import HTMLMin from "html-minifier";

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
    for (const [name, project] of this.projects) {
      await this._compileProject(name, project);
    }
    this._closeLogProgress();
    ///////////// TODO-HERE ////////
    // copy js files
    // build menu
  }

  async _compileProject(name, project) {
    const paths = await globby(project.src, {
      absolute: true,
      cwd: project.root,
    });
    return Promise.all(
      paths.map(async (filePath) => {
        const compiler = await this.getCompilerFor(project);
        const html = await this._compileFile(compiler, filePath, project.root);
        const destFilePath = path.resolve(
          this.root,
          this.config.output,
          path.basename(project.root),
          path.relative(project.root, path.dirname(filePath)),
          // TODO: allow other extensions
          path.basename(filePath, ".md") + ".html"
        );
        await ensureDir(dirname(destFilePath));
        const rslt = await asyncFs.writeFile(destFilePath, html, {
          encoding: "utf8",
        });
        this._logCompileProgress(
          `[${name}] ${relative(project.root, filePath)}`,
          1 / this.projects.length / paths.length
        );
        return rslt;
      })
    );
  }

  async _compileFile(compiler, filePath, root) {
    const stat = await asyncFs.lstat(filePath);
    // TODO: allow other extensions
    if (stat.isFile() && path.extname(filePath) === ".md") {
      /**
       * @type {string}
       */
      let md = await asyncFs.readFile(filePath, { encoding: "utf8" });
      if (!md) {
        console.warn(`ignoring empty file ${filePath}`);
        return;
      }
      try {
        // TODO: allow other extensions
        // TODO: minify html
        const html = await compiler(md, root);
        return HTMLMin.minify(html, this.config.htmlMinifierOptions);
      } catch (e) {
        console.warn(`could not convert ${filePath} to html`);
        return;
      }
    } else {
      console.warn(`could not read ${filePath}`);
    }
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
