import { compilerFromConfig } from "../compilers/build.js";
import { watchProject } from "../compilers/watch.js";

/**
 * @typedef {import('../config/DaucusConfig').WorkspaceConfig} DaucusConfig
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {import('../config/WorkSpace').WorkSpace} WorkSpace
 * @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig
 * @typedef {import('@daucus/core').RoutesConfig} RoutesConfig
 * @typedef {import('./AbstractCommand').Command<WatchCommandOptions>} WatchCommandInterface
 * @typedef {import('./AbstractCommand').CommandConstructor<WatchCommandOptions>} WatchCommandConstructor
 *
 * @typedef {import('./watch.options').WatchCommandOptions} WatchCommandOptions
 */

/**
 * @implements WatchCommandInterface
 * @type WatchCommandConstructor
 */
export class WatchCommand {
  static help = `Compile a source file when it changes`;

  static description = `The "watch" command doesn't create or update the routes configuration.
It only recompile files AFTER they changed.
You still need to run the "build" command before anything.

The "watch" command should be used only if you need to perform some action between build and watch.
If you don't, just use "daucus build --watch" instead.`;

  static synopsis = "[project]";

  /** @type {import('./AbstractCommand').CommandOption[]} */
  static options = [
    {
      name: "project",
      type: String,
      defaultOption: true,
      description: "Project to watch (default: all).",
    },
  ];

  /**
   * @param {WorkSpace} workspace
   */
  constructor(workspace) {
    this.workspace = workspace;
  }

  /**
   * @param {WatchCommandOptions} [params] command parameters
   */
  async run(params = {}) {
    const workspaceConfig = await this.workspace.getConfig();
    this.config = workspaceConfig;

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

    const watchers = new Map(
      await Promise.all(
        projects.map(async ([projectName, staticProjectConfig]) => {
          /** @type {ProjectConfig} */
          const projectConfig = {
            compiler: workspaceConfig.defaultCompiler,
            compilerOptions: workspaceConfig.defaultCompilerOptions,
            ...staticProjectConfig,
          };

          const compiler = await compilerFromConfig(projectConfig);

          const watcher = watchProject(
            compiler,
            projectName,
            projectConfig,
            workspaceConfig
          );
          /** @type {[string, watcher]} */
          const rslt = [projectName, watcher];
          return rslt;
        })
      )
    );

    console.log("watching for file changes...");

    return watchers;
  }
}
