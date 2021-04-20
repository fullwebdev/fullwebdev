# Daucus CLI Configuration

## Configuration file

With daucus, configuration is optional.

Use a JavaScript or JSON file (`daucus-config.js`, `daucus-config.mjs`, or `daucus-config.json`) to specify configuration information for an entire directory and all of its subdirectories (i.e. your Daucus Workspace).

### JSON

You can use the JSON Schema `@daucus/cli/daucus-config.schema.json` to validate your JSON configuration file and enable autocompletion in most code editors:

```json
{
  "$schema": "./node_modules/@daucus/cli/daucus-config.schema.json",
  ...
}
```

Some configuration features (like ["compiler functions"](#Compiler)) are only avaible in JavaScript.

### JavaScript

When using JavaScript, be sure to use the right file extension depending on the nearest npm package [configuration](https://nodejs.org/api/packages.html#packages_type).

For most cases, we recommend to use the ES Module format with a `daucus-config.mjs` file:

```js
/** @type {import('@daucus/cli').DaucusJSConfig}*/
const config = {
  // your configuration...
};

export default config;
```

> ⚠️ Setting your npm package `"type"` to `"module"` in your package.json may lead to some conflits with other tools, like Snowpack.

You can also use the CJS format with a `daucus-config.js` file :

```js
/** @type {import('@daucus/cli').DaucusJSConfig}*/
const config = {
  // your configuration...
};

module.exports = config;
```

## Compiler

> :warning: For now, Daucus can only convert Markdown to HTML.

By default, Daucus will use `@daucus/pandoc` if available, or snarkdown.

You can force using one of these compilers by setting a project `compiler` option or the global `defaultCompiler` option to `"pandoc"` or `"snarkdown"`.

You can also use your own compiler function in a JS configuration file with the following signature:

```ts
(source: string, root: string) => Promise<string> | string;
```

Where :

- `source` represents the source file content
- `root` represents the path to the project's root directory

## Global options

### defaultCompiler

• **defaultCompiler**: Compiler

Default converter used for every project.

### htmlMinifierOptions

• **htmlMinifierOptions**: Options

Custom html-minifier options.

**`see`** <https://www.npmjs.com/package/html-minifier#options-quick-reference>

### i18n

• **i18n**: _boolean_

Enable internationalization.

**`default`** false

### output

• **output**: _string_

The root of the generated files

**`default`** "\_daucus\_"

### projects

• **projects**: Record<string, ProjectConfig>

**`default`** { docs: { src: "\*_/_.md", root: "docs" } }

## Project Configuration Options

### compiler

• **compiler**: Compiler

Specify which converter to use.

### root

• **root**: _string_

The root of the source files.

### src

• **src**: _string_

Glob pattern matching the source files

### exclude

• **exclude**: _string[]_

Glob patterns to exclude matches.

### usePathAsTitle

• **usePathAsTitle**: _boolean_

Use file name as menu title instead of first h1
