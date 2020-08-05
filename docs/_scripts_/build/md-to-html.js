const { spawn } = require("child_process");
const { Readable } = require("stream");
const { extractMaterials } = require("./materials");
const path = require("path");
const fs = require("fs-extra");
const { relativeToRepoRoot, fromRepoRoot } = require("./repo-utils");

/**
 * @param {string[]} args
 * @param {string} cwd
 * @param {string} [src]
 *
 * @returns {Promise<{output: string; errors: string;}>}
 */
function pandoc(args, cwd, src) {
  return new Promise((resolve) => {
    const pandocProcess = spawn("pandoc", args, { cwd });

    let output = "";
    let errors = "";

    pandocProcess.stdout.setEncoding("utf8");
    pandocProcess.stdout.on("data", (data) => {
      output += data;
    });

    pandocProcess.stderr.setEncoding("utf8");
    pandocProcess.stderr.on("data", (data) => {
      errors += data;
    });

    if (src) {
      const srcStream = Readable.from([src]);

      srcStream.pipe(pandocProcess.stdin);
    }

    pandocProcess.on("close", (code) => {
      resolve({ output, errors });
    });
  });
}

/**
 * @param {string} filePath
 * @param {string} root
 * @param {string} [cwd]
 */
async function mdToHTMLByLang(filePath, root, cwd, extract = false) {
  cwd = cwd || root;
  filePath = path.resolve(root, filePath);

  /**
   * @type {string}
   */
  let originalContent = fs.readFileSync(filePath, { encoding: "utf8" });
  if (!originalContent) {
    console.log(`can't read ${filePath} for materials extraction`);
    return;
  }

  let contentByLang = [["all", originalContent]];
  if (extract) {
    contentByLang = extractMaterials(originalContent);
  }

  return Promise.all(
    contentByLang.map(async ([lang, content]) => {
      const { output, errors } = await pandoc(
        [
          "-f",
          "markdown+emoji",
          "-t",
          "html",
          "-F",
          "pandoc-import-code",
          "--lua-filter",
          fromRepoRoot("scripts", "pandoc-filters", "standard-code.lua"),
          "--no-highlight",
        ],
        cwd,
        content
      );

      if (errors) {
        console.warn(
          [
            relativeToRepoRoot(filePath),
            extract ? "direct" : "extracted",
            `from: ${relativeToRepoRoot(cwd)}`,
          ].join(" - ")
        );
        console.warn(errors);
      }

      return [lang, output];
    })
  );
}

module.exports = { mdToHTMLByLang };
