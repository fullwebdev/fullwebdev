import { promises as asyncFs } from "fs";
import * as path from "path";
import { loadCompiler } from "../compilers/load.js";
import rimraf from "rimraf";
import globby from "globby";
import { ensureDirSync, ensureDir } from "../system/path.js";
import { dirname, relative, resolve } from "path";
import Gauge from "gauge";
import HTMLMin from "html-minifier";
import { createRouteFor } from "../routing/routes.js";

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
      await this._buildProject(name, project);
    }
    this._closeLogProgress();
    ///////////// TODO-HERE ////////
    // copy js files
  }

  async _buildProject(name, project) {
    const paths = await globby(project.src, {
      absolute: true,
      cwd: project.root,
    });

    const outDir = resolve(
      this.root,
      this.config.output,
      path.basename(project.root)
    );

    await ensureDir(outDir);

    const compiler = await this.getCompilerFor(project);

    // TODO : typing
    const routes = { children: {} };
    await Promise.all(
      paths.map(async (filePath) => {
        const relativeFilePath = path.relative(project.root, filePath);

        const html = await this._compileFile(compiler, filePath, project.root);

        const relativeOutputFilePath = path.join(
          path.dirname(relativeFilePath),
          // TODO: allow other extensions
          path.basename(relativeFilePath, ".md") + ".html"
        );

        await this._saveCompiledFile(outDir, relativeOutputFilePath, html);

        const [routeKey, route] = createRouteFor(
          html,
          relativeOutputFilePath,
          project.root
        );

        const routeParents = route.path.split("/").filter((p) => p);
        if (routeKey) {
          routeParents.pop();
        }

        let acc = routes;
        routeParents.forEach((elmt, i) => {
          if (!acc.children) {
            acc.children = {};
          }
          if (!acc.children[elmt]) {
            acc.children[elmt] = {};
          }
          acc = acc.children[elmt];
        });

        if (routeKey) {
          if (!acc.children) {
            acc.children = {};
          }
          acc.children[routeKey] = route;
        } else {
          Object.assign(acc, route);
        }

        this._logCompileProgress(
          `[${name}] ${relative(project.root, filePath)}`,
          1 / this.projects.length / paths.length
        );
      })
    );

    await this._saveProjectRoutes(outDir, routes);
  }

  async _saveProjectRoutes(dir, routes) {
    const content = `export default ${JSON.stringify(routes, null, 2)}`;
    await asyncFs.writeFile(path.resolve(dir, "routes.js"), content, {
      encoding: "utf8",
    });
  }

  async _saveCompiledFile(dir, relativeOutputFilePath, html) {
    if (!html) {
      console.warn(`ignoring empty file ${relativeOutputFilePath}`);
      return;
    }
    const destFilePath = path.resolve(dir, relativeOutputFilePath);
    await ensureDir(dirname(destFilePath));
    return asyncFs.writeFile(destFilePath, html, {
      encoding: "utf8",
    });
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
        return;
      }
      try {
        // TODO: allow other extensions
        const html = await compiler(md, root);
        if (!html) {
          return;
        }
        return HTMLMin.minify(html, this.config.htmlMinifierOptions);
      } catch (e) {
        console.warn(`failed conversion of ${filePath} to html:`);
        console.warn(e.message);
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
