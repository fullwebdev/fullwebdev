const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");
const { copy } = require("./build/copy");
const { watchOrBuild } = require("./build/build-views");
const { generateAll } = require("./generate");
const { execFile, execFileSync } = require("child_process");
const rimraf = require("rimraf");

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
  .option("--skip-views", "don't re-build views")
  .option("--skip-routes", "don't re-build routes")
  .option("--skip-build", "don't build the app for production")
  .option("--docs-only", "don't build external views")
  .option("-s, --start", "start an HTTP server after build")
  .option("-v, --verbose", "log everything");

program.parse(process.argv);

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

async function cli() {
  const rootDir = path.resolve(__dirname, "..", "pages");
  const outputDir = path.resolve(__dirname, "..", "views");

  if (!program.skipViews) {
    rimraf.sync(outputDir, { disableGlob: true });
    fs.ensureDirSync(outputDir);
    console.debug(`[clear] ${outputDir}`);

    const livreRoot = path.resolve(
      __dirname,
      "..",
      "..",
      "packages",
      "livre-fr",
      "src"
    );

    if (!fs.existsSync(livreRoot) && !program.docsOnly) {
      throw new Error(`can't access to ${livreRoot}`);
    }

    console.debug(`[build] ${rootDir}/**/*.md`);
    await watchOrBuild(program.watch, rootDir, outputDir, ["**/*.md"]);

    // TODO: watch mode
    console.debug(`[copy] ${rootDir}/**/*.js`);
    await copy(rootDir, "./**/*.js", outputDir, program.watch);

    if (!program.docsOnly) {
      console.debug(`[build] ${livreRoot}/[0-9]-**/!(TITLE).md`);
      await watchOrBuild(
        program.watch,
        livreRoot,
        path.join(outputDir, "LANG", "02-fundamentals", "02-materials"),
        ["[0-9]-**/!(TITLE).md"],
        path.resolve(livreRoot, ".."),
        true
      );
    }
  }

  if (!program.skipRoutes) {
    console.debug(`[generate] routes`);
    await generateAll();
  }

  if (!program.skipBuild) {
    console.debug(`[build] snowpack build`);
    execFileSync(
      path.resolve(__dirname, "..", "node_modules", ".bin", "snowpack"),
      ["build"],
      { cwd: path.resolve(__dirname, ".."), encoding: "utf-8" }
    );
  }

  if (program.start) {
    if (program.skipBuild) {
      console.debug(`[start] snowpack dev server`);
      execFile(
        path.resolve(__dirname, "..", "node_modules", ".bin", "snowpack"),
        ["dev"],
        { cwd: path.resolve(__dirname, ".."), encoding: "utf-8" }
      );
    } else {
      console.debug(`[start] local-web-server on dist/`);
      const LocalWebServer = require("local-web-server");
      const ws = LocalWebServer.create({
        port: 8080,
        directory: path.resolve(__dirname, "..", "dist"),
        // FIXME: spa mode (ws --spa index.html)
      });
    }
  }

  console.debug(`DONE`);
}

cli();
