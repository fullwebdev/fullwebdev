const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");
const { copy } = require("./src/build/copy");
const { watchOrBuild } = require("./src/build/build-views");
const { generateAll } = require("./src/generate");
const rimraf = require("rimraf");
const { readConfig, getConfig } = require("./src/utils/config");
const { snowpackSync, snowpack } = require("./src/utils/snowpack");

async function cli() {
  program
    .option(
      "-d, --dev",
      "develop locally (alias for --watch --skip-build --start)"
    )
    .option(
      "--serve",
      "only start an HTTP server (alias for --start --skip-build --skip-views --skip-routes)"
    )
    .option("-w, --watch", "watch mode")
    .option(
      "-c, --config <path>",
      "path to configuration file",
      "panpress.json"
    )
    .option("--skip-views", "don't re-build views")
    .option("--skip-routes", "don't re-build routes")
    .option("--skip-build", "don't build the app for production")
    .option("-l, --local", "don't build additionnal pages")
    .option("-s, --start", "start an HTTP server after build")
    .option("-r, --reload", "clear the local cache")
    .option("-v, --verbose", "log everything");
  // TODO: environment option
  // .option('-e, --env', "environment", "prod");

  program.parse(process.argv);

  const configFile = path.resolve(process.cwd(), program.config);
  readConfig(configFile);

  global.console.debug = (...args) => {
    if (program.verbose) {
      console.log(...args);
    }
  };

  if (program.dev) {
    console.debug(`DEV mode`);
    program.watch = program.skipBuild = program.start = true;
  }

  if (program.serve) {
    console.debug(`SERVE mode`);
    program.start = program.skipBuild = program.skipViews = program.skipRoutes = true;
  }

  console.debug(program);

  // TODO: allow to use the cli from a subdirectory
  const root = path.join(process.cwd());

  const rootDir = path.resolve(root, "pages");
  const outputDir = path.resolve(root, "app", "views");

  if (!program.skipViews) {
    rimraf.sync(outputDir, { disableGlob: true });
    fs.ensureDirSync(outputDir);
    console.debug(`[clear] ${outputDir}`);

    console.debug(`[build] ${rootDir}/**/*.md`);
    await watchOrBuild(program.watch, rootDir, outputDir, ["**/*.md"]);

    // TODO: watch mode
    console.debug(`[copy] ${rootDir}/**/*.js`);
    await copy(rootDir, "./**/*.js", outputDir, program.watch);

    if (!program.local) {
      for (const { src, dest, extract, base } of getConfig().additionnalPages) {
        // FIXME: make generic
        const srcGLob = "[0-9]-**/!(TITLE).md";
        console.debug(`[build] ${src}/${srcGLob}`);
        await watchOrBuild(
          program.watch,
          src,
          path.join(outputDir, "LANG", dest),
          [srcGLob],
          base || src,
          extract
        );
      }
    }
  }

  if (!program.skipRoutes) {
    console.debug(`[generate] routes`);
    await generateAll(root, program.reload);
  }

  if (!program.skipBuild) {
    console.debug(`[build] snowpack build`);
    snowpackSync(["build", ...(program.reload ? ["--reload"] : [])], root);
  }

  if (program.start) {
    if (program.skipBuild) {
      console.debug(`[start] snowpack dev server`);
      snowpack(["dev", ...(program.reload ? ["--reload"] : [])], root);
    } else {
      console.debug(`[start] local-web-server on dist/`);
      const LocalWebServer = require("local-web-server");
      const ws = LocalWebServer.create({
        // @ts-ignore
        port: 8080,
        directory: path.resolve(root, "dist"),
        // FIXME: spa mode (ws --spa index.html)
      });
    }
  }
}

module.exports = { cli };
