#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const codeSampleRe = /^<<< @\/\.\.\/([\w-]+)\/(([^#]*)(?:#.*)?)$/;

//const lineRe = /^(<<< @|#|!\[)/;
const lineRe = /^(<<< @|## |!\[|<!--en:)/;

const ignoredDir = [".vuepress", "refs", "pages"];

function filterFile() {
  const srcRoot = path.join(__dirname, "..", "packages", "livre-fr", "src");

  const dest = {
    fr: path.join(__dirname, "..", "docs", "pages", "fr", "material"),
    en: path.join(__dirname, "..", "docs", "pages", "en", "material"),
  };

  for (const lang in dest) {
    fs.readdirSync(dest[lang]).forEach((filename) => {
      const filepath = path.join(dest[lang], filename);
      if (fs.lstatSync(filepath).isDirectory()) {
        fs.removeSync(filepath);
      }
    });
  }

  const chapters = fs
    .readdirSync(srcRoot)
    .filter(
      (file) =>
        fs.lstatSync(path.join(srcRoot, file)).isDirectory() &&
        !ignoredDir.includes(path.basename(file))
    );

  console.log(chapters);

  chapters.forEach((chapterName) => {
    const chapter = path.join(srcRoot, chapterName);
    const sources = fs
      .readdirSync(chapter)
      .filter((file) => file !== "TITLE.md");

    console.log(sources);

    sources.forEach((sourceName) => {
      const source = path.join(chapter, sourceName);
      const text = fs.readFileSync(source, { encoding: "utf8" });

      const rslt = {
        fr: [],
        en: [],
      };

      const materialCount = {
        fr: 0,
        en: 0,
      };

      for (const line of text.split("\n")) {
        if (line.match(lineRe)) {
          let rsltLine = {
            fr: "",
            en: "",
          };

          if (line.startsWith("<<< ")) {
            const [full, package, snippetPath, filePath] = codeSampleRe.exec(
              line
            );
            // FIXME: path to submodules
            rsltLine.en = rsltLine.fr = `_[${filePath}](https://github.com/fullwebdev/fullwebdev/tree/master/packages/${package}/${filePath}):_

<<< @/../packages/${package}/${snippetPath}`;
            materialCount.fr++;
            materialCount.en++;
          } else if (line.startsWith("![")) {
            // TODO: add link to image source on GitHub
            rsltLine.fr = line;
            materialCount.fr++;
          } else if (line.startsWith("##")) {
            rsltLine.fr = line.slice(1);
          } else if (line.startsWith("<!--en: ")) {
            const [full, content] = /^<!--en: (.*)-->$/.exec(line);
            rsltLine.en = `# ${content}`;
          }

          for (const lang in rslt) {
            if (rsltLine[lang]) {
              rslt[lang].push(rsltLine[lang]);
            }
          }
        }
      }

      for (const lang in dest) {
        if (materialCount[lang] > 0) {
          const relativePath = path.relative(srcRoot, source);
          const destFile = path.join(dest[lang], relativePath);
          console.log(destFile);
          fs.ensureFileSync(destFile);
          fs.writeFileSync(destFile, rslt[lang].join("\n\n").concat("\n"), {
            encoding: "utf8",
          });
        }
      }
    });
  });
}

filterFile();
