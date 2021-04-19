import { promises as asyncFs } from "fs";
import { extname, dirname, basename, relative, resolve, join } from "path";
import HTMLMin from "html-minifier";
import globby from "globby";
import { ensureDir } from "../fs/path.js";
import { createRouteFor } from "../routing/routes.js";
import { loadCompiler } from "./load.js";
import { writeCompiledFile } from "../fs/write.js";
import { ProjectRoutesConfigBuilder } from "../routing/route-config.js";
import { i18nSubdirs } from "./i18n.js";

/**
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {(filePath: string, nbrOfFiles: number) => any} FileProcessedCallback
 * @typedef {import('./compiler').Compiler} Compiler
 * @typedef {import('../routing/Route').Route} Route
 * @typedef {import('./compiler').FunctionCompiler} FunctionCompiler
 * @typedef {import('../routing/Route').ProjectRoutesConfig} ProjectRoutesConfig
 * @typedef {import('./language-code').LanguageCode} LanguageCode
 * @typedef {import('./language-code').LanguageCodeOrDefault} LanguageCodeOrDefault
 * @typedef {import('../routing/Route').I18NProjectRoutesConfig} I18NProjectRoutesConfig
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
 * @param {string} projectName
 * @param {ProjectConfig} projectConfig
 * @param {string} outputDir - absolute path to the global output directory
 * @param {HTMLMin.Options} htmlMinifierOptions - options for html-minifier
 * @param {boolean} i18n - detect different languages for internationalisation
 * @param {FileProcessedCallback} fileProcessedCallback - this function will
be called after each file has been processed

 * @returns {Promise<ProjectRoutesConfig | I18NProjectRoutesConfig>} - routes configuration object for the project
 */
export async function buildProject(
  projectName,
  projectConfig,
  outputDir,
  htmlMinifierOptions,
  i18n,
  fileProcessedCallback
) {
  /** @type {FunctionCompiler} */
  let compiler;
  if (typeof projectConfig.compiler === "function") {
    compiler = projectConfig.compiler;
  } else {
    compiler = await loadCompiler(projectConfig.compiler);
  }

  /** @type {Array<LanguageCode | "">} */
  let langs = [""];
  if (i18n) {
    const langSubdirs = await i18nSubdirs(projectConfig.root);
    langs = langSubdirs.length > 0 ? langSubdirs : [""];
  }

  const projectsRoutesConfigByLang = await Promise.all(
    langs.map(async (lang) => {
      const root = lang ? join(projectConfig.root, lang) : projectConfig.root;
      const paths = await globby(projectConfig.src, {
        absolute: true,
        ignore: ["**/node_modules/**"],
        cwd: root,
      });

      const projectOutDir = lang
        ? resolve(outputDir, projectName, lang)
        : resolve(outputDir, projectName);

      await ensureDir(projectOutDir);

      const routesConfigBuilder = new ProjectRoutesConfigBuilder(projectName);

      await Promise.all(
        paths.map(async (filePath) => {
          const relativeFilePath = relative(root, filePath);

          const html =
            (await compileFile(
              compiler,
              filePath,
              root,
              htmlMinifierOptions
            )) || "";

          const relativeOutputFilePath = join(
            dirname(relativeFilePath),
            // TODO: allow other extensions
            `${basename(relativeFilePath, ".md")}.html`
          );

          await writeCompiledFile(projectOutDir, relativeOutputFilePath, html);

          const [routeKey, route] = createRouteFor(
            html,
            relativeOutputFilePath,
            projectConfig.usePathAsTitle
          );

          routesConfigBuilder.push(routeKey, route);

          fileProcessedCallback(
            relative(projectConfig.root, filePath),
            paths.length
          );
        })
      );

      routesConfigBuilder.complete(htmlMinifierOptions);
      /** @type {[LanguageCodeOrDefault, ProjectRoutesConfig]} */
      const config = [lang || "__", routesConfigBuilder.config];
      return config;
    })
  );

  if (i18n) {
    /** @type {I18NProjectRoutesConfig} */
    const config = {};
    for (const [lang, langConfig] of projectsRoutesConfigByLang) {
      config[lang] = langConfig;
    }
    return config;
  }

  return projectsRoutesConfigByLang[0][1];
}
