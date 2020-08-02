const fs = require("fs-extra");
const { writeFile } = require("fs").promises;
const path = require("path");
const { spawn, spawnSync } = require("child_process");
const { program } = require("commander");
const chokidar = require("chokidar");

program
  .option("-w, --watch", "watch mode")
  .option(
    "-s, --source <path>",
    "source directory",
    path.join(process.cwd(), "pages")
  )
  .option(
    "-o, --out <path>",
    "output directory",
    path.join(process.cwd(), "pages")
  );

program.parse(process.argv);

const sourceDir = program.source;
const outputDir = program.out;
fs.ensureDirSync(outputDir);

/**
 * @param {string[]} args
 *
 * @returns {Promise<{output: string, errors: string}>}
 */
function pandoc(...args) {
  return new Promise((resolve) => {
    const pandocProcess = spawn("pandoc", args);

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

// from Vuepress
// https://github.com/vuejs/vuepress/blob/369c315/packages/%40vuepress/plugin-last-updated/index.js#L22-L32
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

async function buildFile(filePath) {
  const { output, errors } = await pandoc(
    "-f",
    "markdown+emoji",
    filePath,
    "-t",
    "html"
  );

  if (errors) {
    console.error(`${filePath}: ${errors}`);
    return;
  }

  const cleanOutput = output
    .replace(/>\s+</g, "><")
    .replace(/\n/g, "")
    .replace(/`/g, "\\`");

  const lastUpdateTimeStamp = getGitLastUpdatedTimeStamp(filePath);

  const [, lang] = /\/(en|fr)/.exec(filePath);

  let lastUpdate;
  if (lastUpdateTimeStamp) {
    lastUpdate = new Date(lastUpdateTimeStamp).toLocaleString(lang || "en");
  }

  const relativeRoot = path.relative(sourceDir, filePath);

  // TODO: minification
  const js = `
import {html} from "lit-html";
export default () => html\`
<main class="page">
${cleanOutput}
<footer class="page-edit">
  <div class="edit-link">
    <a
      href="https://github.com/fullwebdev/fullwebdev/edit/master/docs/pages/${relativeRoot}"
      target="_blank" rel="noopener noreferrer"
      >${
        lang === "fr"
          ? "Éditer cette page sur GitHub"
          : "Edit this page on GitHub"
      }</a>
  </div>
  ${
    lastUpdate
      ? `<div class="last-updated"><span class="prefix">${
          lang === "fr" ? "Dernière mise-à-jour" : "Last Updated"
        }:</span> <span class="time">${lastUpdate}</span></div>`
      : ""
  }
</footer>
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
  await writeFile(destFilePath, js, {
    encoding: "utf8",
  });
}

/**
 * @param {string} srcDir
 */
async function buildDir(srcDir) {
  fs.readdirSync(srcDir).forEach(async (fileName) => {
    const filePath = path.join(srcDir, fileName);
    const stat = await fs.lstat(filePath);
    if (stat.isDirectory()) {
      await buildDir(filePath);
    } else if (stat.isFile() && path.extname(filePath) === ".md") {
      await buildFile(filePath);
    }
  });
}

if (program.watch) {
  const watcher = chokidar.watch(`${sourceDir}/**/*.md`);
  const log = console.log.bind(console);
  watcher
    .on("ready", () => log("Initial scan complete. Ready for changes"))
    .on("add", (filePath) => {
      log(`File ${path.relative(process.cwd(), filePath)} has been added`);
      buildFile(filePath);
    })
    .on("change", (filePath) => {
      log(`File ${path.relative(process.cwd(), filePath)} has been changed`);
      buildFile(filePath);
    })
    .on("unlink", (filePath) => {
      // TODO
    })
    .on("error", (error) => log(`Watcher error: ${error}`));
} else {
  buildDir(sourceDir);
}
