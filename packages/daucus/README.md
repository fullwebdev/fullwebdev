# Daucus

<p align="center">
<img src="https://user-images.githubusercontent.com/7578400/115269003-29b80400-a13b-11eb-8b21-168df07e743b.png" alt="Daucus" width="300px" style="margin: 1rem">
</p>
<p align="center">
  Modern static stuff generator
</p>

> Automate the generation of multiple static outputs from a unique source using the converters and formats of your choice.

## :warning: Beta Version

This project is still in a very early stage of development. It isn't feature complete, and frequent breaking changes should be expected.

For now, Daucus can only take Markdown source files, to build HTML templates and JS configurations for modern web apps.

It is mainly maintained and used for the construction of our website, [fullweb.dev](https://fullweb.dev). Go check [its source code](https://github.com/fullwebdev/fullwebdev/tree/master/website) for a complete example.

Generation of "books" (odt, epub & pdf) will be added soon. Other input and output formats will follow later.

## Quick start

Boostrap a new Daucus + LitElement + Snowpack project using [create-snowpack-app](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli):

```bash
npx create-snowpack-app my-project --template @daucus/snowpack-template
```

## CLI

```bash
npm install -g @daucus/cli
daucus help
```

## Configuration

See [./configuration.md](./configuration.md)

### Converters

We recommend using Pandoc via the @daucus/pandoc npm package.

```bash
npm install -D @daucus/cli @daucus/pandoc
daucus build
```

## Runtime libraries

### Router

### Menu

### html-loader

## Credits

This project is maintained as part of the [fullwebdev](https://github.com/fullwebdev/fullwebdev) initiative.

Check out our [website](https://fullweb.dev) for more information.
