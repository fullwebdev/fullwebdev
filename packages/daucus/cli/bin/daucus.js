#!/usr/bin/env node

import { DaucusCLI } from "../src/cli/DaucusCLI.js";

try {
  process.title = "daucus " + Array.from(process.argv).slice(2).join(" ");
} catch (_) {
  process.title = "daucus";
}

const cli = new DaucusCLI(process.argv);

cli.run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
