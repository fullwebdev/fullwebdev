import { promises as asyncFs } from "fs";
import { extname, dirname, basename, relative, resolve, join } from "path";
import HTMLMin from "html-minifier";
import globby from "globby";
import { ensureDir } from "../fs/path.js";
import { createRouteFor } from "../routing/routes.js";
import { loadCompiler } from "./load.js";
import { writeCompiledFile } from "../fs/write.js";
import { ProjectRoutesConfigBuilder } from "../routing/route-config.js";

/**
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {(filePath: string, nbrOfFiles: number) => any} FileProcessedCallback
 * @typedef {import('./compiler').Compiler} Compiler
 * @typedef {import('../routing/Route').Route} Route
 * @typedef {import('./compiler').FunctionCompiler} FunctionCompiler
 * @typedef {import('../routing/Route').ProjectRoutesConfig} RoutesConfig
 */

/**
 * compiler a single source file to HTML
 * for now, this function only support markdown sources
 *
 * @param {FunctionCompiler} compiler
 * @param {string} filePath - path to source file
 * @param {string} root - path to root source directory
 * @param {HTMLMin.Options} htmlMinifierOptions
 *
 * @returns {Promise<string | null>} - html string
 */
export async function compileFile(
  compiler,
  filePath,
  root,
  htmlMinifierOptions
) {
  const stat = await asyncFs.lstat(filePath);
  // TODO: allow other extensions
  if (stat.isFile() && extname(filePath) === ".md") {
    /**
     * @type {string}
     */
    const md = await asyncFs.readFile(filePath, { encoding: "utf8" });
    if (!md) {
      return null;
    }
    try {
      // TODO: allow other extensions & better compatibility with other compilers
      const html = await compiler(md, root);
      if (!html) {
        return null;
      }
      return HTMLMin.minify(html, htmlMinifierOptions);
    } catch (e) {
      console.warn(`failed conversion of ${filePath} to html:`);
      console.warn(e.message);
      return null;
    }
  } else {
    console.warn(`could not read ${filePath}`);
  }
  return null;
}

/**
 * compile a Daucus Project and generate its routes configuration object
 * for now, only markdown source files can be used
 *
 * @param {string} projectName
 * @param {ProjectConfig} projectConfig
 * @param {string} outputDir - absolute path to the global output directory
 * @param {HTMLMin.Options} htmlMinifierOptions - options for html-minifier
 * @param {FileProcessedCallback} fileProcessedCallback - this function will
 *  be called after each file has been processed
 *
 * @returns {Promise<RoutesConfig>} - routes configuration object for the project
 */
export async function buildProject(
  projectName,
  projectConfig,
  outputDir,
  htmlMinifierOptions,
  fileProcessedCallback
) {
  const paths = await globby(projectConfig.src, {
    absolute: true,
    cwd: projectConfig.root,
  });

  const projectOutDir = resolve(outputDir, projectName);

  await ensureDir(projectOutDir);

  /** @type {FunctionCompiler} */
  let compiler;
  if (typeof projectConfig.compiler === "function") {
    compiler = projectConfig.compiler;
  } else {
    compiler = await loadCompiler(projectConfig.compiler);
  }

  const routesConfigBuilder = new ProjectRoutesConfigBuilder(projectName);
  await Promise.all(
    paths.map(async (filePath) => {
      const relativeFilePath = relative(projectConfig.root, filePath);

      const html =
        (await compileFile(
          compiler,
          filePath,
          projectConfig.root,
          htmlMinifierOptions
        )) || "";

      const relativeOutputFilePath = join(
        dirname(relativeFilePath),
        // TODO: allow other extensions
        `${basename(relativeFilePath, ".md")}.html`
      );

      await writeCompiledFile(projectOutDir, relativeOutputFilePath, html);

      const [routeKey, route] = createRouteFor(html, relativeOutputFilePath);

      routesConfigBuilder.push(routeKey, route);

      fileProcessedCallback(
        relative(projectConfig.root, filePath),
        paths.length
      );
    })
  );
  routesConfigBuilder.complete(htmlMinifierOptions);
  return routesConfigBuilder.config;
}
