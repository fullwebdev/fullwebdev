import chai from "chai";
import chaiFS from "chai-fs";
import { HelpCommand } from "../../../src/commands/help.js";
import { expectedHelpMessages } from "../../fixtures/help.js";
import { fixtureWorkspace } from "../../fixtures/index.js";
import { ConsoleStub } from "../../utils/log.js";

const { expect } = chai;
chai.use(chaiFS);

describe("HelpCommand", () => {
  let consoleStub;

  beforeEach(() => {
    consoleStub = new ConsoleStub();
  });

  it("print global help message", async () => {
    const wp = await fixtureWorkspace("default");
    const cmd = new HelpCommand(wp);

    await cmd.run();

    expect(consoleStub.logs).equals(expectedHelpMessages.global);
  });

  it("print help message for the build command", async () => {
    const wp = await fixtureWorkspace("default");
    const cmd = new HelpCommand(wp);

    await cmd.run({ command: "build" });

    expect(consoleStub.logs).equals(expectedHelpMessages.build);
  });

  afterEach(() => {
    consoleStub.stub.restore();
  });

  it("print help message for the help command", async () => {
    const wp = await fixtureWorkspace("default");
    const cmd = new HelpCommand(wp);

    await cmd.run({ command: "help" });

    expect(consoleStub.logs).equals(expectedHelpMessages.help);
  });

  afterEach(() => {
    consoleStub.stub.restore();
  });
});
