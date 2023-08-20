import chai from "chai";
import chaiFS from "chai-fs";
import * as fs from "fs";
import * as path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { BuildCommand } from "../../../src/commands/build.js";
import {
  workspaceInfos,
  fixtureWorkspace,
  norm,
} from "../../fixtures/index.js";
import { esmDirName } from "../../../src/fs/path.js";

const { expect } = chai;
chai.use(chaiFS);
chai.use(sinonChai);

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

  it("can reverse menu entries", async () => {
    const wp = await fixtureWorkspace("reverse");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output, config } = await workspaceInfos(wp);

    expect(config.defaultCompiler).to.not.be.ok;

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

  it("rewrite relative URLs", async () => {
    const wp = await fixtureWorkspace("default");
    const cmd = new BuildCommand(wp);

    await cmd.run();

    const { output } = await workspaceInfos(wp);

    expect(
      output.html
        .parse("docs/02-second-part/index.html")
        .querySelector("a")
        .getAttribute("href")
    ).equals("docs/second-part/first-file");
  });

  describe("when using --watch option", () => {
    const sourceFilePath = path.resolve(
      esmDirName(import.meta),
      "..",
      "..",
      "fixtures",
      "default",
      "docs",
      "hello-world.md"
    );
    console.log(sourceFilePath);

    let initialSource;

    before(() => {
      initialSource = fs.readFileSync(sourceFilePath, { encoding: "utf-8" });
    });

    it("rebuild on change", async () => {
      const wp = await fixtureWorkspace("default");
      const cmd = new BuildCommand(wp);

      const watchers = await cmd.run({ watch: true });

      const { output } = await workspaceInfos(wp);

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

      const changeSpy = sinon.spy();
      watchers.get("docs").on("change", changeSpy);

      const newTitle = "Test New Content";
      fs.writeFileSync(sourceFilePath, `# ${newTitle}`, { encoding: "utf-8" });

      await Promise.all(
        Array.from(watchers.values).map((watcher) => watcher.close())
      );

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            expect(changeSpy).to.have.been.calledWith("hello-world.md");

            const newOutput = fs.readFileSync(
              path.resolve(
                esmDirName(import.meta),
                "..",
                "..",
                "fixtures",
                "default",
                "_daucus_",
                "docs",
                "hello-world.html"
              ),
              { encoding: "utf-8" }
            );

            expect(newOutput).equals(
              `<h1 id=test-new-content>${newTitle}</h1>`
            );

            resolve();
          } catch (err) {
            reject(err);
          }
        }, 2000);
      });
    });

    afterEach(() => {
      fs.writeFileSync(sourceFilePath, initialSource, { encoding: "utf-8" });
    });
  });
});
