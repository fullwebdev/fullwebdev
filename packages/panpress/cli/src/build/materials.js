const fs = require("fs");
const path = require("path");
const { getConfig } = require("../utils/config");

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

  for (const line of markdown.split("\n")) {
    if (line.match(lineRe)) {
      let rsltLine = {
        fr: "",
        en: "",
      };

      if (line.startsWith("<<< ")) {
        let [full, packageName, snippetPath, filePath] = codeSampleRe.exec(
          line
        );
        const submoduleRepo = getConfig().repository.submodules[packageName];
        const baseUrl = [
          (submoduleRepo && submoduleRepo.url) || getConfig().repository.url,
          "tree",
          (submoduleRepo && submoduleRepo.branch) ||
            getConfig().repository.branch,
        ].join("/");

        let path = filePath;
        if (!submoduleRepo) {
          filePath = `packages/${packageName}/${filePath}`;
        }

        // FIXME: path to submodules
        rsltLine.en = rsltLine.fr = `
<<< @/../${packageName}/${snippetPath}

<p class="code-caption">
Cf. ${packageName}: <a href="${baseUrl}/${filePath}" target="_blank" rel="noopener noreferrer" aria-label="open on Github">${path}</a>
</p>
`;
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

  return Object.entries(rslt)
    .filter(([lang]) => materialCount[lang] > 0)
    .map(([lang, lines]) => [lang, lines.join("\n\n").concat("\n")]);
}

module.exports = { extractMaterials };
