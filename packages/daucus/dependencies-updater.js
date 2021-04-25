/* eslint-disable func-names, import/no-extraneous-dependencies */
const stringifyPackage = require("stringify-package");
const detectIndent = require("detect-indent");
const detectNewline = require("detect-newline");

module.exports.readVersion = function (contents) {
  return JSON.parse(contents).version;
};

module.exports.writeVersion = function (contents, version) {
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
