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
  .option("-s, --start", "start an HTTP server after build");

program.parse(process.argv);

if (program.dev) {
  program.watch = program.skipBuild = program.start = true;
}

if (program.serve) {
  program.start = program.skipBuild = program.skipViews = program.skipRoutes = true;
}

async function cli() {
  const rootDir = path.resolve(__dirname, "..", "pages");
  const outputDir = path.resolve(__dirname, "..", "views");

  if (!program.skipViews) {
    rimraf.sync(outputDir, { disableGlob: true });
    fs.ensureDirSync(outputDir);

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

    await watchOrBuild(program.watch, rootDir, outputDir, ["**/*.md"]);

    // TODO: watch mode
    await copy(rootDir, "./**/*.js", outputDir, program.watch);

    if (!program.docsOnly) {
      await watchOrBuild(
        program.watch,
        livreRoot,
        path.join(outputDir, "LANG", "materials"),
        ["[0-9]-**/!(TITLE).md"],
        path.resolve(livreRoot, ".."),
        true
      );
    }
  }

  if (!program.skipRoutes) {
    await generateAll();
  }

  if (!program.skipBuild) {
    execFileSync(
      path.resolve(__dirname, "..", "node_modules", ".bin", "snowpack"),
      ["build"],
      { cwd: path.resolve(__dirname, ".."), encoding: "utf-8" }
    );
  }

  if (program.start) {
    if (program.skipBuild) {
      execFileSync(
        path.resolve(__dirname, "..", "node_modules", ".bin", "snowpack"),
        ["dev"],
        { cwd: path.resolve(__dirname, ".."), encoding: "utf-8" }
      );
    } else {
      const LocalWebServer = require("local-web-server");
      const ws = LocalWebServer.create({
        port: 8080,
        directory: path.resolve(__dirname, "..", "dist"),
        // FIXME: spa mode (ws --spa index.html)
      });
    }
  }
}

cli();
