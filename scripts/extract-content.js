#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const codeSampleRe = /^<<< @\/\.\.\/code-samples\/(([^#]*)(?:#.*)?)$/;

//const lineRe = /^(<<< @|#|!\[)/;
const lineRe = /^(<<< @|## |!\[)/;

const ignoredDir = [".vuepress", "refs", "0-introduction"];

function filterFile() {
  const srcRoot = path.join(__dirname, "..", "packages", "livre-fr", "src");

  const dest = path.join(__dirname, "..", "docs", "fr", "material");
  fs.mkdirpSync(dest);

  const parts = fs
    .readdirSync(srcRoot)
    .filter(
      (file) =>
        fs.lstatSync(path.join(srcRoot, file)).isDirectory() &&
        !ignoredDir.includes(path.basename(file))
    );

  parts.forEach((partName) => {
    const part = path.join(srcRoot, partName);
    const chapters = fs
      .readdirSync(part)
      .filter((file) => fs.lstatSync(path.join(part, file)).isDirectory());

    chapters.forEach((chapterName) => {
      const chapter = path.join(part, chapterName);
      const sources = fs
        .readdirSync(chapter)
        .filter((file) => file !== "TITLE.md");

      sources.forEach((sourceName) => {
        const source = path.join(chapter, sourceName);
        const text = fs.readFileSync(source, { encoding: "utf8" });
        const rslt = text
          .split("\n")
          .filter((line) => line.match(lineRe))
          .map((line) => {
            // TODO: remove titles and illustrations for en version
            const match = codeSampleRe.exec(line);
            if (!match) {
              if (line.startsWith("##")) {
                return line.slice(1);
              }
              // TODO: add link to image source on GitHub
              return line;
            }
            const [full, snippetPath, filePath] = match;
            return `_[${filePath}](https://github.com/fullwebdev/fullwebdev/tree/master/packages/code-samples/${filePath}):_

<<< @/../packages/code-samples/${snippetPath}`;
          })
          .join("\n\n")
          .concat("\n");

        const relativePath = path.relative(srcRoot, source);
        const destFile = path.join(dest, relativePath);
        fs.ensureFileSync(destFile);
        fs.writeFileSync(destFile, rslt, { encoding: "utf8" });
      });
    });
  });
}

filterFile();
