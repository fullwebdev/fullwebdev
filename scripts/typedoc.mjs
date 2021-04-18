import typedoc from "typedoc";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import ts from 'typescript';
import { packages as packagesConfig } from "../workspace-packages.mjs";

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
  packages.set(packageName, { config, root: path.join(
    repoRoot,
    projectRoot,
    config.scope,
    config.name,
  )});
});

const cmdArgs = process.argv.slice(2);

if (cmdArgs[0]) {
  if (!packages.has(cmdArgs[0])) {
    console.error(`can't find any ${cmdArgs[0]} project`);
    process.exit(1);
  }
  packages = new Map([[cmdArgs[0], packages.get(cmdArgs[0])]])
}

packages.forEach(async ({ root }, name) => {
  console.log(`\ntypedocs: ${name}\n`);

  const app = new typedoc.Application();

  app.options.addReader(new typedoc.TSConfigReader());

  const index = path.join(root, "index.js");

  if (!fs.existsSync(index)) {
    console.error(`can't find ${path.relative(process.cwd(), index)}`)
  }

  const tsconfig = path.join(root, "tsconfig.json");

  if (!fs.existsSync(index)) {
    console.error(`can't find ${path.relative(process.cwd(), index)}`)
  }

  app.bootstrap({
    excludeExternals: true,
    // excludeNotDocumented: true,
    excludeInternal: true,
    entryPoints: [index],
    tsconfig,
    plugin: 'typedoc-plugin-markdown',
    name
  })

  const program = ts.createProgram(
    app.options.getFileNames(),
    app.options.getCompilerOptions()
  );

  const project = app.converter.convert(
    app.expandInputFiles(app.options.getValue('entryPoints')),
    program
  );

  const outDir = path.join(root, "typedocs");

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




