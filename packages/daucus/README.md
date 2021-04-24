# Daucus

<p align="center">
<img src="https://user-images.githubusercontent.com/7578400/115269003-29b80400-a13b-11eb-8b21-168df07e743b.png" alt="Daucus" width="300px" style="margin: 1rem">
</p>
<p align="center">
  Modern static stuff generator
</p>

> Automate the generation of multiple static outputs from a unique source using the converters and formats of your choice.

## Status

This project is still in a very early stage of development. It isn't feature complete, and frequent breaking changes should be expected.

For now, Daucus can only take Markdown source files, to build HTML templates and JS configurations for modern web apps.

It is mainly maintained and used for the construction of our website, [fullweb.dev](https://fullweb.dev). Go check [its source code](https://github.com/fullwebdev/fullwebdev/tree/master/website) for a complete example.

Generation of "books" (odt, epub & pdf) will be added soon. Other input and output formats will follow later.

## Quick start

Boostrap a new Daucus + LitElement + Snowpack project using [create-snowpack-app](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli) with [`@daucus/snowpack-template`](https://github.com/fullwebdev/fullwebdev/tree/master/packages/daucus/snowpack-template):

```bash
npx create-snowpack-app my-project --template @daucus/snowpack-template
```

## CLI

```bash
npm install -g @daucus/cli
daucus help
```

For more information, refer to the [CLI documentation](https://fullweb.dev/daucus/cli).

## Configuration

- [configuration documentation](./configuration.md)

### Converters

We recommend using Pandoc via the @daucus/pandoc npm package.

Just install the `@daucus/pandoc` package, and it will be automattically detected by the CLI:

```bash
npm install -D @daucus/cli @daucus/pandoc
daucus build
```

For more details, see the [Compiler](./configuration.md#Compiler) section of the configuration documentation.

## Building a modern web app with Daucus

Daucus generates simple HTML templates and JS files. You can use it with any build tools, runtime web library and framerworks.

However, we recommend a _Modern Web App_ approache ([1](https://modern-web.dev/), [2](https://www.snowpack.dev/)), preverably with [Lit](https://lit.dev).

Since this can lead to a lot of custom development, the following runtime libraries and web components are provided to facilitate this process.

| package name                           | purpouse                                                           |
| -------------------------------------- | ------------------------------------------------------------------ |
| [`@daucus/router`](./router/)          | automatic and extensible router for Daucus generated routes        |
| [`@daucus/menu`](./menu/)              | simple menu Web Component using the generated navigation templates |
| [`@daucus/html-loader`](./html-loader) | Web Component loading and redering generated HTML Template         |
