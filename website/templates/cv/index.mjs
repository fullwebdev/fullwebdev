import { readTemplate, readSource } from "../utils.mjs";

const css = {
  shell: readSource(import.meta, "../index/shell.css"),
};

export default {
  template: readTemplate(import.meta),
  files: {
    "public/cv.html": {
      css,
    },
  },
};
