<!-- markdownlint-disable fenced-code-language -->

# Contributing to FullWebDev

:green_heart: First off, thanks for taking the time to contribute! :green_heart:

FullWebDev needs diversed contributions to have the high level of quality we expect. Any contribution, being from developers or not, will help us reach this goal.

<!-- markdownlint-disable header-increment -->

#### <a name="toc"></a> Table of Contents

<!-- markdownlint-enable header-increment -->

[Code of Conduct](#coc)

[Structure & Components](#structure)

- [The fullweb.dev website](#website)
- [Packages](#packages)

[Set up your environment](#setup)

[Styleguides](#styleguides)

- [Commit Message Format](#commit)

## <a name="coc"></a> Code of Conduct

This project and everyone participating in it is governed by the [FullWebDev Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to contribute

### Questions, features & general discussions

This project is still very young, and there is still a lot to do. Very few decisions are cast in stone.

Therefore, we are open to any king of contribution.

You just want to discuss some topic we are adressing on the website? Or maybe you have some idea to suggest, but you're not sure how it could lead to a new feature? Feel free to open a "discussion" issue.

If you just want to help, but don't know where to start, you can simply [send a DM on Twitter](https://twitter.com/messages/compose?recipient_id=191620154).

## <a name="structure"></a> Structure & Components

### <a name="website"></a> The [fullweb.dev](https://fullweb.dev) website

Documentations and learning materials are at the core of FullWebDev. This is why most of this project revolves around our website.

> If you just want to make a small contribution to a page (e.g. to fix a typo), the easiest solution is to open this page in your browser (via [https://fullweb.dev](https://fullweb.dev)) and to click on the **Edit this page on GitHub** or **Éditer cette page sur GitHub** link at the bottom. This will help you create of fork of this repository, and open the source (markdown or js) of the page directly in GitHub.
>
> Just make sure to follow our [commit message guidelines](#commit) when you're done.

The [/docs] folder makes the basis of this website, and most packages and/or their documentation are added to it to make even more pages, demonstrations, etc...

Using our own static website generator, [Daucus](./packages/daucus), we devide the website source code and content into two parts:

1. "core" templates, pages and code, in the [/docs](./docs) directory
2. additionnal contents from some other sub-projects in the [/packages/\*](./packages) directories

### <a name="packages"></a> Packages

Most packages are also parts of the website, but may provide more than that.

<!-- prettier-ignore -->
| package | usage |
| ------- | ----- |
| [/materials/benchmark/](https://github.com/fullwebdev/benchmark/) (submodule) | _WIP_ |
| [/materials/code-samples/](./materials/code-samples/) | [/fundamentals/code-samples/](https://fullweb.dev/fundamentals/code-samples/) |
| [/materials/codelabs/](./materials/codelabs/) | [/codelabs/](https://fullweb.dev/codelabs/) |
| [/materials/data-driven-pwa/](./materials/data-driven-pwa/) | base project for the associated [codelab](https://fullweb.dev/codelabs/doc/modern-data-driven_fr/index.html) |
| [/packages/helpers/](./packages/helpers/) | _helpers functions_ |
| [/materials/illustrations/](./materials/illustrations/) | _images and more_ |
| /materials/eni-dpawm/ (private) | [/fundamentals/materials/](https://fullweb.dev/fundamentals/materials/) |
| [/packages/daucus/](./packages/daucus/) | _static website generator_ |
| [/materials/perf/](./materials/perf/) | _WIP_ |
| [/materials/slides/wof-1/](./materials/slides/wof-1/) | [/slides/wof1/](https://fullweb.dev/slides/wof1/) (for historical purposes only) |
| [/materials/slides/wof-2/](./materials/slides/wof-2/) | [/slides/wof/](https://fullweb.dev/slides/wof/latest/) |
| [/materials/slides/vanilla-1/](./materials/slides/vanilla-1/) | [/slides/vanilla1/](https://fullweb.dev/slides/vanilla1/latest/) |

You'll find more information about each of these projects in their respective README.md files.

## <a name="setup"></a> Set up your environment

To run and build the website locally, you'll first need to install the following tools on your system:

1. [Node.js & npm](https://nodejs.org/en/) current version (v14+)
1. [pandoc](https://pandoc.org/installing.html)
1. [Python 3](https://www.python.org/downloads/)
1. [pandoc-import-code](https://github.com/noelmace/pandoc-import-code)

Then, you'll need to install the dependencies for the whole monorepo by running `npm install` from the root directory.

Finally, you can run the standalone docs, without building any other packages, by going to the [/docs](./docs) directory and running `npm start -- --local`.

> :warning: Access to the private repository associated to the `/materials/eni-dpawm/` submodule is, for now, restricted to the core team. Building the whole website (`npm run build`) requires this access, and Linux.
>
> But don't worry: we have CI/CD for that, so there is a good chance you'll never need to do that. Just remember to always use the `--local` option when running a script in `/docs`.

## <a name="styleguides"></a> Styleguides

### <a name="commit"></a> Commit Message Format

_This specification is inspired by the [Angular commit message format][commit-message-format]._

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Those rules are enforced through [commitlint](https://github.com/conventional-changelog/commitlint) via a git commit hook and the commitlint Github App.

**We strongly advise you to never disable or skip this hook!**

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits.

The `footer` is optional.

Any line of the commit message cannot be longer than 100 characters.

#### <a href="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: docs | code-samples | codelabs | data-driven-pwa | illustrations |
  │                          eni-dpawm | perf | slides-(vanilla-1|wof-1|wof-2) | helpers |
  │                          helpers-(el|template|router) | benchmark | daucus |
  |                          daucus-(cli|router|snowpack-starter|pandoc) | html-loader
  │
  └─⫸ Commit Type: build | ci | docs | feat | fix | perf | refactor | style | test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

##### Scope

The scope should be the name of the package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- `docs`
- `code-samples`
- `codelabs`
- `data-driven-pwa`
- `illustrations`
- `eni-dpawm`
- `perf`
- `reveal`
- `helpers`
- `helpers-el`
- `helpers-template`
- `helpers-router`
- `benchmark`
- `slides-wof-1`
- `slides-wof-2`
- `slides-wof-3`

Using the most precise scope (e.g. `helpers-el` and `daucus-cli`) should be prioritized over using a generic one (e.g., respectively, `helpers` and `daucus`), especially if the scope is `fix` or `feat`.

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

#### Revert commits

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

[commit-message-format]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format
