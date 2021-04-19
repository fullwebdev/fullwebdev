# Daucus CLI Configuration

All configuration parameters are optionnal.

Simply add a `daucus.config.json` or `daucus.config.js` (or `.mjs`) file to the root of your repository to customize the CLI behavior.

A [JSON Schema](packages/daucus/cli/src/config/daucus-config.schema.json) is available to validate your json config.

Some configuration options are only available when using a JavaScript file.

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
