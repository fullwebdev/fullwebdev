const { writeFile } = require("fs").promises;
const path = require("path");
const { spawn, spawnSync } = require("child_process");
const fs = require("fs-extra");
const globby = require("globby");
const chokidar = require("chokidar");

/**
 * @param {string[]} args
 *
 * @returns {Promise<{output: string, errors: string}>}
 */
function pandoc(args, cwd) {
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

    pandocProcess.on("close", (code) => {
      resolve({ output, errors });
    });
  });
}

/**
 * @param {string} filePath
 *
 * from Vuepress
 * https://github.com/vuejs/vuepress/blob/369c315/packages/%40vuepress/plugin-last-updated/index.js#L22-L32
 */
function getGitLastUpdatedTimeStamp(filePath) {
  let lastUpdated;
  try {
    lastUpdated =
      parseInt(
        spawnSync(
          "git",
          ["log", "-1", "--format=%at", path.basename(filePath)],
          { cwd: path.dirname(filePath) }
        ).stdout.toString("utf-8")
      ) * 1000;
  } catch (e) {
    /* do not handle for now */
  }
  return lastUpdated;
}

/**
 * @param {string} filePath
 * @param {string} root
 * @param {string} outputDir
 * @param {string} [cwd]
 */
async function buildFile(filePath, root, outputDir, footer = true, cwd) {
  filePath = path.resolve(root, filePath);
  cwd = cwd || root;
  const { output, errors } = await pandoc(
    [
      "-f",
      "markdown+emoji",
      filePath,
      "-t",
      "html",
      "-F",
      "pandoc-import-code",
    ],
    cwd
  );

  if (errors) {
    console.error(`${filePath}: ${errors}`);
    return;
  }

  const cleanOutput = output
    .replace(/>\s+</g, "><")
    .replace(/\n/g, "")
    .replace(/`/g, "\\`");
  const relativeRoot = path.relative(root, filePath);

  let footerTemplate = "";

  if (footer) {
    const lastUpdateTimeStamp = getGitLastUpdatedTimeStamp(filePath);

    const langExecution = /\/(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)\//.exec(
      filePath
    );
    const lang = (langExecution && langExecution[1]) || "en";

    let lastUpdate;
    if (lastUpdateTimeStamp) {
      lastUpdate = new Date(lastUpdateTimeStamp).toLocaleString(lang);
    }

    footerTemplate = /* HTML */ `
      <footer class="page-edit">
        <div class="edit-link">
          <a
            href="https://github.com/fullwebdev/fullwebdev/edit/master/docs/pages/${relativeRoot}"
            target="_blank"
            rel="noopener noreferrer"
            >${lang === "fr"
              ? "Éditer cette page sur GitHub"
              : "Edit this page on GitHub"}</a
          >
        </div>
        ${lastUpdate
          ? `<div class="last-updated"><span class="prefix">${
              lang === "fr" ? "Dernière mise-à-jour" : "Last Updated"
            }:</span> <span class="time">${lastUpdate}</span></div>`
          : ""}
      </footer>
    `;
  }

  // TODO: minification
  const js = `
import {html} from "lit-html";
export default () => html\`
<main class="page">
${cleanOutput}${footerTemplate}
</main>\`;
`;

  const destFilePath = path
    .join(outputDir, relativeRoot)
    .replace(/README\.md/, "index.md")
    .split(".")
    .slice(0, -1)
    .join(".")
    .concat(".js");
  await fs.createFile(destFilePath);
  console.log(destFilePath);
  await writeFile(destFilePath, js, {
    encoding: "utf8",
  });
}

/**
 * @param {string[]} globs
 * @param {string} root
 * @param {string} outputDir
 * @param {string} [cwd]
 */
async function buildDirs(globs, root, outputDir, cwd) {
  const paths = await globby(globs, { absolute: true, cwd: root });
  return Promise.all(
    paths.map(async (filePath) => {
      const stat = await fs.lstat(filePath);
      if (stat.isFile() && path.extname(filePath) === ".md") {
        console.log(`build: ${filePath}`);
        await buildFile(filePath, root, outputDir, true, cwd);
      } else {
        console.warn(`wrong file: `);
      }
    })
  );
}

/**
 * @param {string} rootDir
 * @param {string} outputDir
 * @param {string[]} src
 * @param {string} [cwd]
 */
async function watchOrBuild(watch = false, rootDir, outputDir, src, cwd) {
  if (watch) {
    console.log(`watching ${src}`);
    const watcher = chokidar.watch(src, { cwd: rootDir });
    const log = console.log.bind(console);
    watcher
      .on("ready", () => log("Initial scan complete. Ready for changes"))
      .on("add", (filePath) => {
        log(`File ${path.relative(process.cwd(), filePath)} has been added`);
        buildFile(filePath, rootDir, outputDir, true, cwd);
      })
      .on("change", (filePath) => {
        log(`File ${path.relative(process.cwd(), filePath)} has been changed`);
        buildFile(filePath, rootDir, outputDir, true, cwd);
      })
      .on("unlink", (filePath) => {
        // TODO
      })
      .on("error", (error) => log(`Watcher error: ${error}`));
  } else {
    console.log("build mode");
    await buildDirs(src, rootDir, outputDir, cwd);
  }
}

module.exports = { buildDirs, buildFile, watchOrBuild };
