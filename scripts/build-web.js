const { watchOrBuild } = require("./docs/build-md");
const { program } = require("commander");
const path = require("path");

program
  .option("-w, --watch", "watch mode")
  .option("--livre", "inclure le livre");

program.parse(process.argv);

(() => {
  watchOrBuild(
    program.watch,
    path.resolve("./packages/code-samples/src/"),
    path.resolve("./build/packages/code-samples/"),
    ["README.md"]
  );
  if (program.livre) {
    watchOrBuild(
      program.watch,
      path.resolve("./packages/livre-fr/src/"),
      path.resolve("./build/pages/fr/livre/"),
      ["[0-9]-**/!(TITLE).md"],
      path.resolve("./packages/livre-fr/")
    );
  }
})();
