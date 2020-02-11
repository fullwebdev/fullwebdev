#!/usr/bin/env node

let applyPatch = require('./apply-patch').applyPatch;
let fs = require('fs');
let path = require('path');

function gotoStep(step) {
  console.log(`applying step ${step}`)
  const stepDir = path.join(__dirname, 'steps', step);

  fs.readdir(stepDir, (err, patchFiles) => {
    if (err) {
      console.error(`Could not list the directory.`, err);
      process.exit(1);
    }

    patchFiles.forEach(patchFile => {
      // Make one pass and make the file complete
      let patch = path.join(stepDir, patchFile);
      applyPatch(patch);
    });
  });
}

gotoStep(process.argv[2]);
