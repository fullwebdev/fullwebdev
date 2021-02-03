/**
 * this script was originally made by the modernweb-dev community
 * (especially Thomas Allmer aka daKmoR) under MIT License
 *
 * go check the original source file
 * https://github.com/open-wc/open-wc/blob/c9dc557f/scripts/generate-ts-configs.mjs
 * along with https://open-wc.org & https://modern-web.dev
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { packages } from "../workspace-packages.mjs";
import merge from "deepmerge";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TSCONFIG_COMMENT = `// Don't edit this file directly. It is generated by /${path.relative(
  path.dirname(__dirname),
  __filename
)}\n\n`;

const packagesRoot = path.join(__dirname, "..", "packages");

const packageJSONMap = new Map();
const packageDirnameMap = new Map();
const internalDependencyMap = new Map();

// collect package json for all packages
packages.forEach((pkg) => {
  const packageJSONPath = path.join(
    packagesRoot,
    pkg.scope,
    pkg.name,
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
  packageDirnameMap.set(packageName, [pkg.scope, pkg.name]);
  packageJSONMap.set(packageName, packageJSONData);
});

// collect initial cross package dependencies info
packageDirnameMap.forEach(([, _packageDirname], packageName) => {
  const { dependencies, devDependencies } = packageJSONMap.get(packageName);

  const internalDependencies = [
    ...(dependencies ? Object.keys(dependencies) : []),
    ...(devDependencies ? Object.keys(devDependencies) : []),
  ].filter((dep) => packageDirnameMap.has(dep));

  internalDependencyMap.set(packageName, internalDependencies);
});

function resolveInternalDependencies(dependencies) {
  const childDeps = [];

  for (const idep of dependencies) {
    const deps = internalDependencyMap.get(idep);
    const res = resolveInternalDependencies(deps);
    for (const jdep of res) {
      childDeps.push(jdep);
    }
  }
  const resolved = childDeps.concat(dependencies);
  // remove all duplicated after the first appearance
  return resolved.filter((item, idx) => resolved.indexOf(item) === idx);
}

packageDirnameMap.forEach(([packageDirScope, packageDirname], packageName) => {
  const pkg = packages.find((pkg) => pkg.name === packageDirname);
  const pkgDir = path.join(packagesRoot, packageDirScope, packageDirname);

  const tsconfigPath = path.join(pkgDir, "tsconfig.json");

  let tsConfigOverride = {};
  const tsConfigOverridePath = path.join(pkgDir, "tsconfig.override.json");

  if (fs.existsSync(tsConfigOverridePath)) {
    tsConfigOverride = JSON.parse(fs.readFileSync(tsConfigOverridePath));
  }
  const overwriteMerge = (destinationArray, sourceArray) => sourceArray;

  const internalDependencies = resolveInternalDependencies(
    internalDependencyMap.get(packageName)
  );
  const tsconfigData = merge(
    {
      extends: `${packageDirScope ? "../" : ""}../../tsconfig.${
        pkg.environment === "browser" ? "browser" : "node"
      }-base.json`,
      compilerOptions: {
        // module: pkg.environment === "browser" ? "ESNext" : "commonjs",
        module: "ESNext",
        outDir: "./types",
        rootDir: ".",
        composite: true,
        allowJs: true,
        checkJs: pkg.type === "js" ? true : undefined,
        emitDeclarationOnly: pkg.type === "js" ? true : undefined,
      },
      references: internalDependencies.map((dep) => {
        const [depDirScope, depDirName] = packageDirnameMap.get(dep);
        if (depDirScope) {
          return {
            path: `../../${depDirScope}/${depDirName}/tsconfig.json`,
          };
        }
        return {
          path: `../${depDirName}/tsconfig.json`,
        };
      }),
      include: ['src', '*.js'],
      exclude: ["dist", "types"],
    },
    tsConfigOverride,
    { arrayMerge: overwriteMerge }
  );
  fs.writeFileSync(
    tsconfigPath,
    TSCONFIG_COMMENT + JSON.stringify(tsconfigData, null, "  ")
  );
});

const projectLevelTsconfigPath = path.join(__dirname, "..", "tsconfig.json");

const projectLevelTsconfigData = {
  extends: "./tsconfig.node-base.json",
  files: [],
  references: resolveInternalDependencies(
    Array.from(packageDirnameMap.keys())
  ).map((packageName) => {
    const [depDirScope, depDirName] = packageDirnameMap.get(packageName);
    if (depDirScope) {
      return {
        path: `./packages/${depDirScope}/${depDirName}/tsconfig.json`,
      };
    }
    return {
      path: `./packages/${depDirName}/tsconfig.json`,
    };
  }),
};

fs.writeFileSync(
  projectLevelTsconfigPath,
  TSCONFIG_COMMENT + JSON.stringify(projectLevelTsconfigData, null, "  ")
);
