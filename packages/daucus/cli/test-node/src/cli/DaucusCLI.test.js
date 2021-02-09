import chai from "chai";
import { exec, workspaceInfos } from "../../fixtures/index.js";

const { expect } = chai;

describe("CLI", async () => {
  it("build", async () => {
    const cmd = await exec("build", "default/docs");
    const { output } = await workspaceInfos(cmd.workspace);

    expect(await output.html.list()).to.deep.equals(
      [
        "docs/README.html",
        "docs/hello-world.html",
        "docs/01-first-part/index.html",
        "docs/01a-after-first-part/README.html",
        "docs/02-second-part/index.html",
        "docs/02-second-part/01-first-file.html",
        "docs/02-second-part/0b-another-file.html",
      ].sort()
    );

    expect(
      output.html.parse("docs/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
  });
});
