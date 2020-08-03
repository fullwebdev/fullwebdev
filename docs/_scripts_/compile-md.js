const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");
const { watchOrBuild } = require("./build-md");
const globby = require("globby");

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

async function copyJsViews(root, out) {
  const paths = await globby("./**/*.js", { absolute: true, cwd: root });
  return Promise.all(
    paths.map(async (filePath) => {
      const stat = await fs.lstat(filePath);
      if (stat.isFile() && path.extname(filePath) === ".js") {
        console.log(`copy: ${filePath}`);
        await fs.copy(filePath, path.join(out, path.relative(root, filePath)));
      } else {
        console.warn(`wrong file: ${filePath}`);
      }
    })
  );
}

//TODO: watch
copyJsViews(path.resolve(program.root), path.resolve(program.out));
