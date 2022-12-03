import typedoc from "typedoc";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import ts from "typescript";
import { packages as packagesConfig } from "../workspace-packages.mjs";
// eslint-disable-next-line import/no-relative-packages
import { DaucusMarkdownTheme } from "../packages/daucus/typedoc-theme/dist/theme.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, "..");

let packages = new Map();

// collect package json for all packages
packagesConfig.forEach((config) => {
  const projectRoot = config.root ?? "packages";
  const packageJSONPath = path.join(
    repoRoot,
    projectRoot,
    config.scope,
    config.name,
    "package.json"
  );

  if (!fs.existsSync(packageJSONPath)) {
    console.error();
    console.error(`Could not find package.json: ${packageJSONPath}`);
    console.error();
    process.exit(1);
  }

  const packageJSONData = JSON.parse(
    fs.readFileSync(packageJSONPath).toString()
  );

  const packageName = packageJSONData.name;
  packages.set(packageName, {
    config,
    root: path.join(repoRoot, projectRoot, config.scope, config.name),
  });
});

const cmdArgs = process.argv.slice(2);

if (cmdArgs[0]) {
  if (!packages.has(cmdArgs[0])) {
    console.error(`can't find any ${cmdArgs[0]} project`);
    process.exit(1);
  }
  packages = new Map([[cmdArgs[0], packages.get(cmdArgs[0])]]);
}

packages.forEach(async ({ root }, name) => {
  console.log(`\ntypedocs: ${name}\n`);

  const app = new typedoc.Application();

  app.options.addReader(new typedoc.TSConfigReader());

  // workaroud: typedef transpile to aliases
  let index = path.join(root, "index.d.ts");

  if (!fs.existsSync(index)) {
    index = path.join(root, "index.doc.d.ts");
    if (!fs.existsSync(index)) {
      index = path.join(root, "types", "index.d.ts");
      if (!fs.existsSync(index)) {
        console.error(`can't find ${path.relative(process.cwd(), index)}`);
      }
    }
  }

  const tsconfig = path.join(root, "tsconfig.doc.json");

  if (!fs.existsSync(index)) {
    console.error(`can't find ${path.relative(process.cwd(), index)}`);
  }

  const theme = "daucus"
  app.renderer.defineTheme(theme, DaucusMarkdownTheme);

  app.bootstrap({
    excludeExternals: true,
    // excludeNotDocumented: true,
    excludeInternal: true,
    excludePrivate: true,
    entryPoints: [index],
    hideBreadcrumbs: true,
    categorizeByGroup: false,
    hideInPageTOC: true,
    publicPath: `${path.join(
      path.relative(path.join(repoRoot, "packages"), root),
      "API"
    )}/`,
    tsconfig,
    theme,
    readme: "none",
    plugin: "typedoc-plugin-markdown",
    name: "API",
    namedAnchors: true,
  });

  const project = app.convert();
  const outDir = path.join(root, "API");

  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }
  fs.mkdirSync(outDir);

  if (project) {
    await app.generateDocs(project, outDir);
  } else {
    throw new Error(`Error creating the TypeScript API docs for ${name}.`);
  }
});
