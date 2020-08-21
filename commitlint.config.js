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
        "reveal",
        "helpers",
        "benchmark",
        "panpress-cli",
        "panpress-starter",
        "wof-slides",
      ],
    ],
  },
};
