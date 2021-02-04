module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-vue"],
  extends: [
    "eslint:recommended",
    "@open-wc/eslint-config",
    "plugin:@typescript-eslint/recommended",
    require.resolve("eslint-config-prettier"),
  ],
  rules: {
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: [
            "#region",
            "#endregion",
            "region",
            "endregion",
            "#__PURE__",
          ],
        },
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "consistent-return": "off",
    "no-prototype-builtins": "off", // should only be used for _upgradeProperty in WC
    "wc/no-constructor-attributes": "off", // https://github.com/43081j/eslint-plugin-wc/issues/46
  },
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off", // jsdoc isn't properly detected
      },
    },
    {
      files: ["materials/code-samples/**/*.{js,mjs,cjs,jsx}"],
      rules: {
        "max-classes-per-file": "off",
        "no-inner-declarations": "off",
        "import/no-unresolved": "off", // using https:// lead to a false positive
        "no-console": "off",
        "func-names": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
          },
        },
      },
      rules: {
        "import/extensions": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["**/*.jsx", "**/*.tsx"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: [
        "**/test-node/**/*.js",
        "**/test-web/**/*.{js,mjs,cjs}",
        "**/scripts/**/*.{js,mjs,cjs}",
        "**/*.config.js",
        "**/*.test.js",
      ],
      rules: {
        "lit/no-invalid-html": "off",
        "lit/binding-positions": "off",
        "no-console": "off",
        "no-unused-expressions": "off",
        "class-methods-use-this": "off",
        "max-classes-per-file": "off",
        "import/no-extraneous-dependencies": "off", // monorepo dependencies
      },
    },
    {
      files: ["**/stories/**/*.{js,mjs,cjs}", "**/*.stories.js"],
      rules: {
        "import/no-extraneous-dependencies": "off", // monorepo dependencies
      },
    },
    {
      files: [
        "packages/daucus/pandoc/**/*.{js,mjs,cjs}",
        "packages/daucus/cli/**/*.{js,mjs,cjs}",
        "**/scripts/**/*.{js,mjs,cjs}",
      ],
      rules: {
        "no-console": "off",
      },
    },
  ],
};
