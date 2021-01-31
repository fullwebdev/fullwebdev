import chai from "chai";
import * as daucusConfig from "../../../src/config/daucus-config.js";
import { join } from "path";

const { expect } = chai;

/**
 * @typedef {import('../../../types/DaucusConfig.js').DaucusConfig} DaucusConfig
 */

describe("daucus-config", () => {
  /** @type {DaucusConfig} */
  const mockConfig = {
    output: "dist/daucus",
  };

  describe("create()", () => {
    it("set default output directory", () => {
      const rslt = daucusConfig.create();
      expect(rslt.output).equals("_daucus_");
    });

    it("set a default project", () => {
      const rslt = daucusConfig.create(mockConfig);
      const defaultProject = rslt.projects.default;
      expect(defaultProject.src).equals("**/*.md", "for all markdown files");
      expect(defaultProject.root).equals("docs", "in the 'docs' directory");
    });

    it("do not override projects", () => {
      /** @type {DaucusConfig} */
      const projects = {
        pages: {
          src: "**/*.md",
          root: "src/pages",
        },
      };
      const rslt = daucusConfig.create({
        ...mockConfig,
        projects,
      });
      expect(rslt.projects).to.deep.equal(projects);
    });
  });

  describe("makeAllPathsAbsolute()", () => {
    it("do not override absolute paths", () => {
      const partialConfig = { output: "/tmp/.daucus/dist " };
      const root = "/home/test/daucus-workspace";
      const rslt = daucusConfig.makeAllPathsAbsolute(partialConfig, root);
      expect(rslt).to.deep.equal(partialConfig);
    });

    it("do make all paths absolute", () => {
      /** @type {DaucusConfig} */
      const partialConfig = {
        output: ".daucus/dist",
        projects: {
          pages: {
            src: "**/*.md",
            root: "pages",
          },
          docs: {
            src: "**/*.md",
            root: "docs",
          },
        },
      };
      const root = "/home/test/daucus-workspace";
      const rslt = daucusConfig.makeAllPathsAbsolute(partialConfig, root);
      expect(rslt.output).equals(join(root, partialConfig.output));
      expect(rslt.projects.pages.root).equals(
        join(root, partialConfig.projects.pages.root)
      );
      expect(rslt.projects.docs.root).equals(
        join(root, partialConfig.projects.docs.root)
      );
    });
  });
});
