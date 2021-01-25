import { promises as asyncFs } from "fs";
import * as path from "path";
import { loadCompiler } from "../compilers/load.js";
import rimraf from "rimraf";
import globby from "globby";
import { ensureDirSync, ensureDir } from "../system/path.js";
import { dirname } from "path";

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
    const projects = params.project
      ? [[params.project, this.config.projects[params.project]]]
      : Object.entries(this.config.projects);

    for (const [name, project] of projects) {
      await this._compileProject(project);
    }
    ///////////// TODO-HERE ////////
    // copy js files
    // build menu
  }

  async _compileProject(project) {
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
        return asyncFs.writeFile(destFilePath, html, {
          encoding: "utf8",
        });
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
        return compiler(md, root);
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
}
