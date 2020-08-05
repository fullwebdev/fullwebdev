const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");
const { watchOrBuild } = require("./build-md");
const { copy } = require("./copy");

program
  .option("-w, --watch", "watch mode")
  .option(
    "-r, --root <path>",
    "source root directory",
    path.join(process.cwd(), "pages")
  )
  .option(
    "-o, --out <path>",
    "output root directory",
    path.join(process.cwd(), "views")
  )
  .option("-s, --sources <glob...>", "source files")
  .option("--materials", "build & include the instructional materials")
  .option("--livre", "build & include packages/livre-fr (restricted)");

program.parse(process.argv);

const rootDir = path.resolve(program.root);
const outputDir = path.resolve(program.out);
const src =
  program.sources && program.sources.length > 0 ? program.sources : ["**/*.md"];
fs.ensureDirSync(outputDir);

watchOrBuild(program.watch, rootDir, outputDir, src).then(
  console.log.bind(console),
  console.error.bind(console)
);

copy(
  path.resolve(program.root),
  "./**/*.js",
  path.resolve(program.out),
  program.watch
);

const livreRoot = path.resolve(
  rootDir,
  "..",
  "..",
  "packages",
  "livre-fr",
  "src"
);

if (fs.existsSync(livreRoot)) {
  if (program.livre) {
    watchOrBuild(
      program.watch,
      livreRoot,
      path.join(outputDir, "fr", "livre"),
      ["[0-9]-**/!(TITLE).md"],
      path.resolve(livreRoot, "..")
    );
  }

  if (program.materials) {
    watchOrBuild(
      program.watch,
      livreRoot,
      path.join(outputDir, "LANG", "materials"),
      ["[0-9]-**/!(TITLE).md"],
      path.resolve(livreRoot, ".."),
      true
    );
  }
}
