#!/usr/bin/env node

/**
 * alternative to git apply for diff files
 * 
 * Usage: apply-patch path/to/file.patch
 * 
 * derivative of apply-patch by David Pärsson, under MIT License
 * see https://github.com/davidparsson/apply-patch
 * 
 * patchs generated using :
 *   git diff <commit>^..<commit> file > <step>.diff
 *    (with some editions for compatibility)
 */

let diff = require(`diff`);
let fs = require(`fs`);

function applyPatch(patchFile) {
  let patch = fs.readFileSync(patchFile, `utf8`);

  let sourceFileMatch = /--- ([^ \n\r\t]+).*/.exec(patch);
  let sourceFile;
  if (sourceFileMatch && sourceFileMatch[1]) {
    sourceFile = sourceFileMatch[1];
  } else {
    throw Error(`Unable to find source file in '${patchFile}'`);
  }
  let destinationFileMatch = /\+\+\+ ([^ \n\r\t]+).*/.exec(patch);
  let destinationFile;
  if (destinationFileMatch && destinationFileMatch[1]) {
    destinationFile = destinationFileMatch[1];
  } else {
    throw Error(`Unable to find destination file in '${patchFile}'`);
  }

  let original = fs.readFileSync(sourceFile, `utf8`);
  let patched = diff.applyPatch(original, patch);

  if (!patched) {
    throw Error(`Failed to apply patch '${patchFile}' to '${sourceFile}'`);
  } else if (sourceFile !== destinationFile) {
    console.log(`Applied '${patchFile}' to '${sourceFile}' and stored it as '${destinationFile}'`);
  } else {
    console.log(`Applied '${patchFile}' to '${sourceFile}'`);
  }

  fs.writeFileSync(destinationFile, patched);
}

module.exports.applyPatch = applyPatch;

// @ts-ignore
if (require.main === module) {
  let argv = process.argv;
  for (let i = 2; i < argv.length; i++) {
    applyPatch(argv[i]);
  }
}
