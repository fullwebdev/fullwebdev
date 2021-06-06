# Typescript Update

## Version 3.6

> [Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html))

- [More Accurate Array Spread](https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/#more-accurate-array-spread)

## Version 3.7

> [Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html))

- ES2020
  - Optional Chaining (`let x = foo?.bar.baz();`)
  - Nullish Coalescing operator (`let x = foo ?? bar();`)
- better handling of JS & d.ts generation (`--declaration` and `--allowJs`)
- Recursive Type Aliases
- Uncalled Function Checks (e.g. user `user.isAdministrator` instead of `user.isAdministrator()`)
- Flatter Error Reporting

## Version 3.8

> [Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html))

- Type-Only Imports and Exports (`import type { SomeThing } from "./some-module.js"; export type { SomeThing };`)
- ES2020
  - ECMAScript Private Fields (:warning: Use WeakMaps / only supported by Chromium + Safari 14.1 (~ 70%))

## Version 4.0

> [Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html))
>
> Breaking changes : [4.0.0](https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+is%3Aclosed+label%3A%22Breaking+Change%22+milestone%3A%22TypeScript+4.0.0%22+) & [4.0.1](https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+is%3Aclosed+label%3A%22Breaking+Change%22+milestone%3A%22TypeScript+4.0.1%22+)

- `this` inside a module isn't treated as a `globalThis` anymore (see [Inside of modules, this should be undefined #35882](https://github.com/microsoft/TypeScript/issues/35882))
- props deletion now invalidate the associated interface (see [deleting a prop doesn't invalidate the interface #13783](https://github.com/microsoft/TypeScript/issues/13783))
