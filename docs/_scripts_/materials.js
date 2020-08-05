const fs = require('fs');
const path = require('path');

const codeSampleRe = /^<<< @\/\.\.\/([\w-]+)\/(([^#]*)(?:#.*)?)$/;

//const lineRe = /^(<<< @|#|!\[)/;
const lineRe = /^(<<< @|## |!\[|<!--en:)/;

/**
 * @param {string} markdown
 */
function extractMaterials(markdown) {
  const rslt = {
    fr: [],
    en: [],
  };

  const materialCount = {
    fr: 0,
    en: 0,
  };

  for (const line of markdown.split('\n')) {
    if (line.match(lineRe)) {
      let rsltLine = {
        fr: '',
        en: '',
      };

      if (line.startsWith('<<< ')) {
        const [full, packageName, snippetPath, filePath] = codeSampleRe.exec(line);
        // FIXME: path to submodules
        rsltLine.en = rsltLine.fr = `_[${filePath}](https://github.com/fullwebdev/fullwebdev/tree/master/packages/${packageName}/${filePath}):_

<<< @/../${packageName}/${snippetPath}`;
        materialCount.fr++;
        materialCount.en++;
      } else if (line.startsWith('![')) {
        // TODO: add link to image source on GitHub
        rsltLine.fr = line;
        materialCount.fr++;
      } else if (line.startsWith('##')) {
        rsltLine.fr = line.slice(1);
      } else if (line.startsWith('<!--en: ')) {
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

  return Object.entries(rslt).filter(([lang]) => materialCount[lang] > 0).map(([lang, lines]) => [lang, lines.join("\n\n").concat("\n")]);
}

module.exports = { extractMaterials };
