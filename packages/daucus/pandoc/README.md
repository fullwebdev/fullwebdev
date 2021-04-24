# `@daucus/pandoc`

Install & use [Pandoc](https://pandoc.org/) in Nodejs.

> Conceived for Daucus, but can also be used independently.
>
> :book: [Documentation](https://fullweb.dev/daucus)

```bash
npm i @daucus/pandoc
```

```js
import { convert } from "@daucus/pandoc";

const markdown = `# Hello World

Welcome to Pandoc :wave:
`;

const html = convert("markdown+emoji", "html", markdown);

console.log(html);
// <h1 id="hello-world">Hello World</h1>
// <p>Welcome to Pandoc <span class="emoji" data-emoji="wave">👋</span></p>
```

## Prerequisites

When installed, `@daucus/pandoc` will automatically download the Pandoc binary. Therefor, you'll never depend on any Pandoc local installation.

Yet, other dependencies may be needed for advanced usages, like Python (when using some Pandoc filters like [`pandoc-import-code`](https://pypi.org/project/pandoc-import-code/)) or LaTeX (to create PDFs). Refer to the [Pandoc installation](https://pandoc.org/installing.html) documentation for more information.
