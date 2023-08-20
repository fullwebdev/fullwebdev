import chai from "chai";
import { expectedHelpMessages } from "../../fixtures/help.js";
import { exec, workspaceInfos } from "../../fixtures/index.js";
import { ConsoleStub } from "../../utils/log.js";

const { expect } = chai;

describe("CLI", async () => {
  let consoleStub;

  beforeEach(() => {
    consoleStub = new ConsoleStub();
  });

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

    expect(consoleStub.logs).equals(`compiling projects
done ✓
`);
  });

  it("help", async () => {
    const cmd = await exec("help help", "default/docs");
    await workspaceInfos(cmd.workspace);

    expect(consoleStub.logs).equals(expectedHelpMessages.help);
  });

  it("print help message by default", async () => {
    const cmd = await exec("", "default/docs");
    await workspaceInfos(cmd.workspace);

    expect(consoleStub.logs).equals(expectedHelpMessages.global);
  });

  afterEach(() => {
    consoleStub.stub.restore();
  });
});
