export const expectedHelpMessages = {
  global: `
Daucus

  Universal static stuff generator

Synopsis

  $ daucus command [<args>]

Commands

  build		generate static assets
  help		display help information about Daucus
  watch		Compile a source file when it changes

See 'daucus help <command>' to read about a specific subcommand
`,
  build: `
Daucus-build

  generate static assets

Synopsis

  $ daucus build [project]

Options

  project	Project to build (default: all).
  --watch	Run build when files change.
`,
  help: `
Daucus-help

  display help information about Daucus

Synopsis

  $ daucus help [command]

Options

  command	specific command name for details (print a list of available commands by default)
`,
  // prettier-ignore-start
  watch: `
Daucus-watch

  Compile a source file when it changes

Description

  The "watch" command doesn't create or update the routes configuration.
  It only recompile files AFTER they changed.
  You still need to run the "build" command before anything.
  
  The "watch" command should be used only if you need to perform some action between build and watch.
  If you don't, just use "daucus build --watch" instead.

Synopsis

  $ daucus watch [project]

Options

  project	Project to watch (default: all).
`,
  // prettier-ignore-end
};
