const packages = [
  "cli",
  "html-loader",
  "menu",
  "pandoc",
  "router",
  "snowpack-template",
  "core",
  "typedoc-theme",
];

module.exports = {
  path: ".",
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
    ...packages.map((dir) => ({
      filename: `${dir}/package.json`,
      updater: require("./dependencies-updater"),
    })),
  ],
  "tag-prefix": "daucus@v",
  releaseCommitMessageFormat: "chore: daucus@{{currentTag}}",
};
