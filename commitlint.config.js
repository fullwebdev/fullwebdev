module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "docs",
        "code-samples",
        "codelabs",
        "data-driven-pwa",
        "illustrations",
        "livre-fr",
        "perf",
        "helpers",
        "benchmark",
        "panpress-cli",
        "panpress-starter",
        "slides-wof-1",
        "slides-wof-2",
        "slides-vanilla-1",
      ],
    ],
  },
};
