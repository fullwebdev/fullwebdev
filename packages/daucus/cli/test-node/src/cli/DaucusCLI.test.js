import chai from "chai";
import { exec, workspaceInfos } from "../../fixtures/index.js";

const { expect } = chai;

describe("[E2E] CLI", async () => {
  it("build", async () => {
    const cmd = await exec("build", "default/pages");
    const { output } = await workspaceInfos(cmd.workspace);

    expect(await output.html.list()).to.deep.equals(["pages/hello-world.html"]);

    expect(
      output.html.parse("pages/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
  });
});
