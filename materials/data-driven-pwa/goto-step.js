#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { applyPatch } = require("./apply-patch");

function gotoStep(step) {
  console.log(`applying step ${step}`);
  const stepDir = path.join(__dirname, "steps", step);

  fs.readdir(stepDir, (err, patchFiles) => {
    if (err) {
      console.error(`Could not list the directory.`, err);
      process.exit(1);
    }

    patchFiles.forEach((patchFile) => {
      // Make one pass and make the file complete
      const patch = path.join(stepDir, patchFile);
      applyPatch(patch);
    });
  });
}

gotoStep(process.argv[2]);
