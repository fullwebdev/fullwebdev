import { promises as asyncFs } from "fs";
import { extname, dirname, basename, relative, resolve, join } from "path";
import HTMLMin from "html-minifier";
import { globby } from "globby";
import { ensureDir } from "../fs/path.js";
import { createRouteFor } from "../routing/routes.js";
import { loadCompiler } from "./load.js";
import { writeCompiledFile } from "../fs/write.js";
import { ProjectRoutesConfigBuilder } from "../routing/route-config.js";
import { i18nSubdirs } from "./i18n.js";
import { isAbsoluteUrl } from "../utils/urls.js";
import { posixVPath } from "../fs/vpath.js";

/**
 * @typedef {import('../config/DaucusConfig').ProjectConfig} ProjectConfig
 * @typedef {(filePath: string, nbrOfFiles: number) => any} FileProcessedCallback
 * @typedef {import('./compiler').Compiler} Compiler
 * @typedef {import('@daucus/core').Route} Route
 * @typedef {import('./compiler').FunctionCompiler} FunctionCompiler
 * @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig
 * @typedef {import('@daucus/core').LanguageCode} LanguageCode
 * @typedef {import('@daucus/core').LanguageCodeOrDefault} LanguageCodeOrDefault
 * @typedef {import('@daucus/core').I18NProjectRoutesConfig} I18NProjectRoutesConfig
 */

/**
 * Get a function compiler from a project configuration
 *
 * @param {ProjectConfig} projectConfig
 */
export async function compilerFromConfig(projectConfig) {
  /** @type {FunctionCompiler} */
  let compiler;
  if (typeof projectConfig.compiler === "function") {
    compiler = projectConfig.compiler;
  } else {
    compiler = await loadCompiler(projectConfig.compiler);
  }

  return compiler;
}

/**
 * Get the FS path to the directory where compiled file should be created
 *
 * @param {LanguageCode | ""} lang - language code
 * @param {string} projectName - name of the associated project
 * @param {string} workspaceOutDir - path to the output directory configured for this Daucus workspace (WorkspaceConfig.root)
 */
export async function getProjectOutDir(lang, projectName, workspaceOutDir) {
  const projectOutDir = lang
    ? resolve(workspaceOutDir, projectName, lang)
    : resolve(workspaceOutDir, projectName);

  await ensureDir(projectOutDir);

  return projectOutDir;
}

/**
 * @param {ProjectConfig} projectConfig
 * @param {LanguageCode | "" } lang
 */
export function getCompilationRootDir(projectConfig, lang) {
  return lang ? join(projectConfig.root, lang) : projectConfig.root;
}

/**
 * compiler a single source file to HTML
 * for now, this function only support markdown sources
 *
 * @param {FunctionCompiler} compiler
 * @param {import('./compiler').CompilerParams} params
 *
 * @returns {Promise<string | null>} - html string
 */
export async function compileFile(compiler, params) {
  const { filePath } = params;
  let stat;
  try {
    stat = await asyncFs.lstat(filePath);
  } catch (err) {
    console.error(`can't find any ${filePath} file to compile`);
    return null;
  }
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
      const html = await compiler(md, params);
      if (!html) {
        return null;
      }
      return html;
    } catch (/** @type {any} */ e) {
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
 * Replace hyperlink URLs in an html file with absolute URLs pointing to the actual other files
 *
 * @param {string} html - HTML source code
 * @param {string} projectName - name of the project associated with this file
 * @param {string} routePath - path of the route associated with this file (as generated by Daucus)
 */
export function rewriteHTMLLinks(html, projectName, routePath) {
  return html.replace(
    /(<a [^>]*href=")([^"]*)("[^>]*>)/g,
    (matched, start, href, end) => {
      let newHref = href;
      if (
        href &&
        !isAbsoluteUrl(href) &&
        !href.startsWith(projectName) &&
        !href.startsWith("/") &&
        !href.startsWith("#")
      ) {
        newHref = posixVPath.removePrefixes(
          posixVPath
            .join(projectName, routePath, href)
            .replace(/(.*)\.md/, "$1")
        );
      }
      return start + newHref + end;
    }
  );
}

/**
 * Convert a source file to an output file according to the associated project configuration
 *
 * @param {import("./compiler").FunctionCompiler} compiler - compiler function to use
 * @param {string} filePath - path to the source file
 * @param {LanguageCode | ""} lang - language associated with this source file
 * @param {string} projectName - name of the Daucus project associated with this source file
 * @param {ProjectConfig} projectConfig - configuration for the project associated with this file
 * @param {string} projectOutDir - output directory for the releted Daucus project
 * @param {HTMLMin.Options} htmlMinifierOptions - options for html-minifier
 */
export async function compileAndWriteFile(
  compiler,
  filePath,
  lang,
  projectName,
  projectConfig,
  projectOutDir,
  htmlMinifierOptions
) {
  const root = getCompilationRootDir(projectConfig, lang);
  const relativeFilePath = relative(root, filePath);

  const { compilerOptions = {}, ...config } = projectConfig;

  let html =
    (await compileFile(compiler, {
      filePath,
      lang,
      root,
      project: { name: projectName, config },
      ...compilerOptions,
    })) || "";

  const relativeOutputFilePath = join(
    dirname(relativeFilePath),
    // TODO: allow other extensions
    `${basename(relativeFilePath, ".md")}.html`
  );

  const [routeKey, route] = createRouteFor(
    html,
    relativeOutputFilePath,
    projectConfig.usePathAsTitle
  );

  html = rewriteHTMLLinks(html, projectName, route.path);

  await writeCompiledFile(
    projectOutDir,
    relativeOutputFilePath,
    HTMLMin.minify(html, htmlMinifierOptions)
  );

  return {
    routeKey,
    route,
  };
}

/**
 * compile a Daucus Project and generate its routes configuration object
 * for now, only markdown source files can be used
 * @param {string} projectName
 * @param {ProjectConfig} projectConfig
 * @param {FileProcessedCallback} fileProcessedCallback - this function will
be called after each file has been processed
 * @returns {Promise<ProjectRoutesConfig | I18NProjectRoutesConfig>} - routes configuration object for the project
 * @param {FunctionCompiler} compiler
 * @param {import('../config/DaucusConfig').WorkspaceConfig} workspaceConfig
 */
export async function buildProject(
  compiler,
  projectName,
  projectConfig,
  workspaceConfig,
  fileProcessedCallback
) {
  /** @type {Array<LanguageCode | "">} */
  let langs = [""];
  if (workspaceConfig.i18n) {
    const langSubdirs = await i18nSubdirs(projectConfig.root);
    langs = langSubdirs.length > 0 ? langSubdirs : [""];
  }

  const projectsRoutesConfigByLang = await Promise.all(
    langs.map(async (lang) => {
      const paths = await globby(projectConfig.src, {
        absolute: true,
        ignore: projectConfig.exclude || ["**/node_modules/**"],
        cwd: getCompilationRootDir(projectConfig, lang),
      });

      const projectOutDir = await getProjectOutDir(
        lang,
        projectName,
        workspaceConfig.output
      );

      const routesConfigBuilder = new ProjectRoutesConfigBuilder(projectName);

      await Promise.all(
        paths.map(async (filePath) => {
          const { routeKey, route } = await compileAndWriteFile(
            compiler,
            filePath,
            lang,
            projectName,
            projectConfig,
            projectOutDir,
            workspaceConfig.htmlMinifierOptions
          );

          routesConfigBuilder.push(routeKey, route);

          fileProcessedCallback(
            relative(projectConfig.root, filePath),
            paths.length
          );
        })
      );

      routesConfigBuilder.complete(
        workspaceConfig.htmlMinifierOptions,
        projectConfig.reverseMenu
      );
      /** @type {[LanguageCodeOrDefault, ProjectRoutesConfig]} */
      const config = [lang || "__", routesConfigBuilder.config];
      return config;
    })
  );

  if (workspaceConfig.i18n) {
    /** @type {I18NProjectRoutesConfig} */
    const config = {};
    for (const [lang, langConfig] of projectsRoutesConfigByLang) {
      config[lang] = langConfig;
    }
    return config;
  }

  return projectsRoutesConfigByLang[0][1];
}
