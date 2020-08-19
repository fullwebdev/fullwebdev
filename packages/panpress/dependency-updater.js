const stringifyPackage = require("stringify-package");
const detectIndent = require("detect-indent");
const detectNewline = require("detect-newline");

module.exports.readVersion = function (contents) {
  return JSON.parse(contents).devDependencies["@panpress/cli"];
};

module.exports.writeVersion = function (contents, version) {
  const json = JSON.parse(contents);
  let indent = detectIndent(contents).indent;
  let newline = detectNewline(contents);
  json.version = version;
  json.devDependencies["@panpress/cli"] = version;
  return stringifyPackage(json, indent, newline);
};
