# `@daucus/cli`

> Build and manage Daucus workspaces.
>
> :book: [Documentation](https://fullweb.dev/daucus)

```shell-session
$ npm i --save-dev @daucus/cli
$ ./node_modules/.bin/daucus help

Daucus

  Universal static stuff generator

Synopsis

  $ daucus command [<args>]

Commands

  build   generate static assets
  help    display help information about Daucus

See 'daucus help <command>' to read about a specific subcommand

```

## Programmatic API

### WorkSpace

A Daucus WorkSpace represents the configuration associated to a directory and its subfolders.

You can create a WorkSpace object with a configuration object:

```js
import { WorkSpace } from "@daucus/cli";

const workspace = new WorkSpace({
  // configuration object (see DaucusJSConfig)
});
```

or a configuration file, using the path to the root directory of your workspace:

```js
import { WorkSpace } from "@daucus/cli";

const workspace = new WorkSpace("./my-project/");
```

### build

Use the BuildCommand to build configured projects (same as `$ daucus build`):

```js
import { BuildCommand } from "@daucus/cli";

const cmd = new BuildCommand(wp);

// build all configured projects: await cmd.run();
await cmd.run("my-project");
```
