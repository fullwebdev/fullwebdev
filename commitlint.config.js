module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "website",
        "code-samples",
        "codelabs",
        "data-driven-pwa",
        "illustrations",
        "eni-dpawm",
        "perf",
        "helpers",
        "helpers-el",
        "helpers-template",
        "helpers-router",
        "benchmark",
        "daucus",
        "daucus-cli",
        "daucus-pandoc",
        "html-loader",
        "daucus-snowpack-template",
        "daucus-router",
        "slides",
        "slides-wof-1",
        "slides-wof-2",
        "slides-vanilla-1",
      ],
    ],
    "subject-case": [0, "always", "lowerCase"],
  },
};
