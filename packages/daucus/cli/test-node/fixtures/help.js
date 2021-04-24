export const expectedHelpMessages = {
  global: `
Daucus

  Universal static stuff generator

Synopsis

  $ daucus command [<args>]

Commands

  build		generate static assets
  help		display help information about Daucus

See 'daucus help <command>' to read about a specific subcommand
`,
  build: `
Daucus-build

  generate static assets

Synopsis

  $ daucus build [project]

Options

  project	project to build (default: all)
`,
  help: `
Daucus-help

  display help information about Daucus

Synopsis

  $ daucus help [command]

Options

  command	specific command name for details (print a list of available commands by default)
`,
};
