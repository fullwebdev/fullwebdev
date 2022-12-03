/* eslint-disable */
const fs = require("fs-extra");
const path = require("path");
const markedSync = require("marked");
const cheerio = require("cheerio");
const createCodelabIndex = require("./createCodelabIndex");

const outputDir = path.join(__dirname, "dist");
const args = process.argv.slice(2);

/**
 * @param {string} src
 * @returns {Promise<string>}
 */
function mdToHtml(src) {
  return new Promise((resolve, reject) => {
    markedSync(src, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function createCodelab(file) {
  const markdownContent = await fs.readFile(file, "utf-8");
  const htmlContent = await mdToHtml(markdownContent);
  const html = cheerio.load(`<div id="content">${htmlContent}</div>`);

  let heading;
  const steps = [];
  let currentStep;

  // cheerio syntax is weird ¯\_(ツ)_/¯
  // loop over all markdown nodes, h1 becomes page title and each h2
  // denotes a codelab section
  html("#content")
    .children()
    .each((i, e) => {
      if (e.tagName === "h1") {
        heading = html(e).text();
      } else if (e.tagName === "h2") {
        currentStep = { heading: html(e), nodes: html("<div></div>") };
        steps.push(currentStep);
      } else if (currentStep) {
        currentStep.nodes.append(html(e));
      }
    });

  if (!heading) {
    throw new Error(`Codelab ${file} does not contain an h1 (#).`);
  }

  return createCodelabIndex({
    heading,
    steps: steps.map((step) => ({
      heading: step.heading.text(),
      html: step.nodes.html(),
    })),
  });
}

async function main() {
  const srcDir = __dirname;

  const codelabs = [];

  // read all codelab files
  for (const dirname of await fs.readdir(srcDir)) {
    const dir = path.join(srcDir, dirname);
    if (!dir.startsWith(".") && (await fs.stat(dir)).isDirectory()) {
      for (const filename of await fs.readdir(dir)) {
        if (filename.endsWith(".md")) {
          const file = path.join(dir, filename);
          if ((await fs.stat(file)).isFile()) {
            const assetsDir = path.join(dir, "assets");

            // turn codelab markdown into html
            codelabs.push({
              file: path.join(dirname, filename.replace(".md", ".html")),
              assetsDir,
              html: await createCodelab(file),
            });
          }
        }
      }
    }
  }

  // do not clear output directory - as it's pre populated by vuepress
  // await fs.remove(outputDir);
  await fs.ensureDir(outputDir);

  // write codelabs
  for (const codelab of codelabs) {
    const outputPath = path.join(outputDir, codelab.file);
    const outputAssetDir = path.join(path.dirname(outputPath), "assets");

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, codelab.html);

    if (await fs.pathExists(codelab.assetsDir)) {
      await fs.copy(codelab.assetsDir, outputAssetDir);
    }
  }
}

if (args[0] === "--watch") {
  const chokidar = require("chokidar");
  console.log("initial build...");
  main();
  console.log("done ✔️\n");
  chokidar
    .watch("./*/*.md", { ignored: ["./dist", "./node_modules"] })
    .on("change", (event, path) => {
      console.log(`${path} changed. Rebuilding...`);
      main();
    })
    .on("ready", () => {
      console.log("watching html files...");
    });
} else {
  main();
}
