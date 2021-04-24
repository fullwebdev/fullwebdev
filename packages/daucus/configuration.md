# Daucus CLI Configuration

## Configuration file

With daucus, configuration is optional.

Use a JavaScript or JSON file (`daucus-config.js`, `daucus-config.mjs`, or `daucus-config.json`) to specify configuration information for an entire directory and all of its subdirectories (i.e. your Daucus Workspace).

## Options

All options are defined and documented in the `@daucus/cli` package using TypeScript interfaces:

- [`WorkspaceConfig`](/daucus/cli/API/interfaces/workspaceconfig)
- [`ProjectConfig`](/daucus/cli/API/interfaces/projectconfig)

### JSON

You can use the JSON Schema `@daucus/cli/daucus-config.schema.json` to validate your JSON configuration file and enable autocompletion in most code editors:

```json
{
  "$schema": "./node_modules/@daucus/cli/daucus-config.schema.json",
  ...
}
```

Some configuration features (e.g. _compiler functions_) are only avaible in JavaScript.

### JavaScript

When using JavaScript, be sure to use the right file extension depending on the nearest npm package [configuration](https://nodejs.org/api/packages.html#packages_type).

For most cases, we recommend using the ES Module format with a `daucus-config.mjs` file:

```js
/** @type {import('@daucus/cli').DaucusJSConfig}*/
const config = {
  // your configuration...
};

export default config;
```

You can also use the CJS format with a `daucus-config.js` file :

```js
/** @type {import('@daucus/cli').DaucusJSConfig}*/
const config = {
  // your configuration...
};

module.exports = config;
```

::: danger
Avoid setting your npm package `"type"` to `"module"` in your package.json as it may lead to some conflits with other tools, like Snowpack.
:::

## Compiler

::: warning
For now, Daucus can only convert Markdown to HTML.
:::

By default, Daucus will use `@daucus/pandoc` if available, or snarkdown.

Specifying a [CompilerId](daucus/cli/API#CompilerId) in the configuration (via the `<project>.compiler` or `defaultCompiler` options) will lead to an error if the associated compiler isn't available.

::: warning
You'll have to install [`pandoc-import-code`](https://pypi.org/project/pandoc-import-code/) (`pip install pandoc-import-code`) before using the Pandoc compiler, even if you don't use the related syntax (see [#74](https://github.com/fullwebdev/fullwebdev/issues/74)).
:::

### Defining a custom compiler

Daucus can use any function matching the [FunctionCompiler](/daucus/cli/API#FunctionCompiler) signature.

Such custom compilers can be defined in a JS configuration file via the `<project>.compiler` or `defaultCompiler` options.
