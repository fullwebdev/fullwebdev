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
  .option("-s, --sources <glob...>", "source files");

program.parse(process.argv);

const rootDir = path.resolve(program.root);
const outputDir = program.out;
const src =
  program.sources && program.sources.length > 0
    ? program.sources
    : [rootDir + "/**/*.md"];
fs.ensureDirSync(outputDir);

watchOrBuild(program.watch, path.resolve(program.root), program.out, src).then(
  console.log.bind(console),
  console.error.bind(console)
);

copy(
  path.resolve(program.root),
  "./**/*.js",
  path.resolve(program.out),
  program.watch
);
