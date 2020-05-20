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
  fs.readdirSync(dest).forEach((filename) => {
    const filepath = path.join(dest, filename);
    if (fs.lstatSync(filepath).isDirectory()) {
      fs.removeSync(filepath);
    }
  });

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

        const rslt = [];
        let materialCount = 0;
        for (const line of text.split("\n")) {
          if (line.match(lineRe)) {
            let rsltLine = line;
            if (line.startsWith("<<< ")) {
              const [full, snippetPath, filePath] = codeSampleRe.exec(line);
              rsltLine = `_[${filePath}](https://github.com/fullwebdev/fullwebdev/tree/master/packages/code-samples/${filePath}):_

<<< @/../packages/code-samples/${snippetPath}`;
              materialCount++;
            } else if (line.startsWith("![")) {
              // TODO: add link to image source on GitHub
              materialCount++;
            } else if (line.startsWith("##")) {
              rsltLine = line.slice(1);
            }
            rslt.push(rsltLine);
          }
        }

        if (materialCount > 0) {
          const relativePath = path.relative(srcRoot, source);
          const destFile = path.join(dest, relativePath);
          fs.ensureFileSync(destFile);
          fs.writeFileSync(destFile, rslt.join("\n\n").concat("\n"), {
            encoding: "utf8",
          });
        }
      });
    });
  });
}

filterFile();
