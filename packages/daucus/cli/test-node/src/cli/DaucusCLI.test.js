import chai from "chai";
import { exec, workspaceInfos } from "../../fixtures/index.js";

const { expect } = chai;

describe("CLI", async () => {
  it("build", async () => {
    const cmd = await exec("build", "default/pages");
    const { output } = await workspaceInfos(cmd.workspace);

    expect(await output.html.list()).to.deep.equals([
      "pages/README.html",
      "pages/hello-world.html",
      "pages/01-first-part/index.html",
      "pages/01a-after-first-part/README.html",
      "pages/02-second-part/01-first-file.html",
      "pages/02-second-part/0b-another-file.html",
    ]);

    expect(
      output.html.parse("pages/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
  });
});
