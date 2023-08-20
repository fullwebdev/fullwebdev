import chai from "chai";
import * as fs from "fs";
import * as path from "path";

import { PANDOC_BIN } from "../../src/binaries.js";
import { esmDirName } from "../../src/utils.js";

const { expect } = chai;

describe("PANDOC_BIN", async () => {
  it("point to an executable file after installation", () => {
    expect(() => {
      fs.accessSync(
        path.resolve(esmDirName(import.meta), "..", "..", "src", PANDOC_BIN),
        fs.constants.X_OK
      );
    }).to.not.throw();
  });
});
