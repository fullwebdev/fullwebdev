/* eslint-disable func-names, import/no-extraneous-dependencies */
const stringifyPackage = require("stringify-package");

module.exports.readVersion = function (contents) {
  return JSON.parse(contents).version;
};

module.exports.writeVersion = async function (contents, version) {
  const detectIndent = await import("detect-indent");
  const detectNewline = await import("detect-newline");

  const json = JSON.parse(contents);
  const { indent } = detectIndent(contents);
  const newline = detectNewline(contents);
  json.version = version;

  ["dependencies", "devDependencies", "peerDependencies"].forEach((entry) => {
    if (json[entry]) {
      Object.keys(json[entry]).forEach((key) => {
        if (key.startsWith("@daucus/")) {
          json[entry][key] = `~${version}`;
        }
      });
    }
  });

  return stringifyPackage(json, indent, newline);
};
