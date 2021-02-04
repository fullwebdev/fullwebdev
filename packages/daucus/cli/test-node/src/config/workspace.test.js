import chai from "chai";
import { resolve } from "path";
import MockFS from "mock-fs";
import { defaultConfig } from "../../../src/config/defaultConfig.js";
import { WorkSpace } from "../../../src/config/workspace.js";
import {
  create,
  makeAllPathsAbsolute,
} from "../../../src/config/daucus-config.js";
import { esmDirName } from "../../../src/fs/path.js";

const { expect } = chai;

/**
 * @typedef {import('../../../types/DaucusConfig.js').DaucusConfig} DaucusConfig
 */

describe("workspace", () => {
  describe("WorkSpace", () => {
    it("is by default adapted to programmatic usage", async () => {
      const workspace = new WorkSpace();
      expect(workspace.root).equals(process.cwd(), "is associated to CWD");
      expect(await workspace.getConfig()).to.deep.equal(
        makeAllPathsAbsolute(defaultConfig),
        "use the default configuration with absolute paths from CWD"
      );
    });

    describe("when used w/ a config object", async () => {
      it("when used w/o any root", async () => {
        const config = { output: "foo/bar" };
        const workspace = new WorkSpace(config);
        expect(workspace.root).equals(process.cwd(), "is associated to CWD");
        expect(await workspace.getConfig()).to.deep.equal(
          makeAllPathsAbsolute(create(config)),
          "merge given config with default configuration, with absolute paths from CWD"
        );
      });

      it("when used w/ a root, use it as an absolute path from CWD", () => {
        const workspace = new WorkSpace({}, "toto/tutu");
        expect(workspace.root).equals(resolve("toto/tutu"));
      });
    });

    describe("when used w/ a path ton a json file", () => {
      const config = { output: "foo/bar" };
      beforeEach(() => {
        MockFS({
          "daucus/daucus.config.json": JSON.stringify(config),
        });
      });

      it("is by default associated to the parent directory of the config file", async () => {
        const workspace = new WorkSpace("daucus/daucus.config.json");
        expect(workspace.root).equals(
          resolve("daucus"),
          "is associated to the current directory"
        );
        expect(await workspace.getConfig()).to.deep.equals(
          {
            output: resolve("daucus", config.output),
            projects: {
              docs: {
                src: "**/*.md",
                root: resolve("daucus", "docs"),
              },
            },
            htmlMinifierOptions: defaultConfig.htmlMinifierOptions,
          },
          "define config"
        );
      });

      it("use given root for the configuration", async () => {
        const workspace = new WorkSpace(
          "daucus/daucus.config.json",
          "daucus-root"
        );
        expect(workspace.root).equals(resolve("daucus-root"));
        expect(await workspace.getConfig()).to.deep.equals({
          output: resolve("daucus-root", config.output),
          projects: {
            docs: {
              src: "**/*.md",
              root: resolve("daucus-root", "docs"),
            },
          },
          htmlMinifierOptions: defaultConfig.htmlMinifierOptions,
        });
      });

      afterEach(MockFS.restore);
    });

    describe("when used w/ a path ton a js file", async () => {
      it("load configuration", async () => {
        const root = resolve(
          esmDirName(import.meta),
          "..",
          "..",
          "fixtures",
          "js-config"
        );
        const workspace = new WorkSpace(resolve(root, "daucus.config.js"));
        expect(workspace.root).equals(
          root,
          "is associated to the current directory"
        );
        expect(await workspace.getConfig()).to.deep.equals(
          {
            output: resolve(root, "dist/daucus"),
            projects: {
              docs: {
                src: "**/*.md",
                root: resolve(root, "docs"),
              },
            },
            htmlMinifierOptions: defaultConfig.htmlMinifierOptions,
          },
          "define config"
        );
      });
    });
  });
});
