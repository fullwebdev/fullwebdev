import chai from "chai";
import chaiFS from "chai-fs";
import { BuildCommand } from "../../../src/commands/build.js";
import {
  workspaceInfos,
  fixtureWorkspace,
  norm,
} from "../../fixtures/index.js";

const { expect } = chai;
chai.use(chaiFS);

describe("BuildCommand", () => {
  it("convert docs & create routes (default compiler)", async () => {
    const wp = await fixtureWorkspace("default");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output, config } = await workspaceInfos(wp);

    expect(config.defaultCompiler).to.not.be.ok;

    expect(
      output.html.parse("docs/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
    expect(await output.html.list()).to.deep.equal(
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

    const routes = await output.routes();
    expect(routes.config).to.deep.equal(routes.snapshot);
  });

  it("handle i18n", async () => {
    const wp = await fixtureWorkspace("i18n");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output } = await workspaceInfos(wp);

    expect(
      output.html.parse("docs/en/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
    expect(
      output.html.parse("docs/fr/hello-world.html").querySelector("h1").rawText
    ).equals("Bonjour le Monde !");
    expect(await output.html.list()).to.deep.equal(
      [
        "another-project/README.html",
        "another-project/infos/lorem.html",
        "docs/en/01-first-part/index.html",
        "docs/en/01a-after-first-part/README.html",
        "docs/en/02-second-part/01-first-file.html",
        "docs/en/02-second-part/0b-another-file.html",
        "docs/en/02-second-part/index.html",
        "docs/en/README.html",
        "docs/en/hello-world.html",
        "docs/fr/01-first-part/index.html",
        "docs/fr/01a-after-first-part/README.html",
        "docs/fr/02-second-part/01-first-file.html",
        "docs/fr/02-second-part/0b-another-file.html",
        "docs/fr/02-second-part/index.html",
        "docs/fr/README.html",
        "docs/fr/hello-world.html",
      ].sort()
    );

    const routes = await output.routes();
    expect(routes.config).to.deep.equal(routes.snapshot);
  });

  it("convert docs w/ code snippets (pandoc)", async () => {
    const wp = await fixtureWorkspace("import-snippet");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output, config } = await workspaceInfos(wp);

    expect(config.defaultCompiler).equals("pandoc");

    // TODO: clean strings
    expect(norm(output.html.parse("docs/hello-world.html"))).equals(
      `<h1 id=hello-world>Hello World!</h1><pre><code class=language-js>console.log("Hello World!");</code></pre>`
    );
    expect(await output.html.list()).to.deep.equal(["docs/hello-world.html"]);
  });

  it("convert docs (snarkdown)", async () => {
    const wp = await fixtureWorkspace("snarkdown");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output, config } = await workspaceInfos(wp);

    expect(config.defaultCompiler).equals("snarkdown");

    expect(
      output.html.parse("docs/hello-world.html").querySelector("h1").rawText
    ).equals("Hello World!");
    expect(await output.html.list()).to.deep.equal(["docs/hello-world.html"]);
  });
});
