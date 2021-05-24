# Angular Ivy

## Docs

- [Guide](https://angular.io/guide/ivy)
- [Compatibility Guide](https://angular.io/guide/ivy-compatibility)
- [Compatibility Examples](https://angular.io/guide/ivy-compatibility-examples)

## Project

- [list of changes](https://docs.google.com/document/d/1Dije0AsJ0PxL3NaeNPxpYDeapj30b_QC0xfeIvIIzgg/preview)
- [issues](https://github.com/angular/angular/issues?q=label%3A%22comp%3A+compiler%22+label%3A%22type%3A+bug%2Ffix%22+is%3Aissue+ivy+)

## Articles

- Nrwl: [Understanding Angular Ivy: Incremental DOM and Virtual DOM](https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36)
- Nrwl: [Metaprogramming, Higher-Order Components and Mixins with Angular Ivy](https://blog.nrwl.io/metaprogramming-higher-order-components-and-mixins-with-angular-ivy-75748fcbc310)
- indepth.dev: [angular-ivy](https://admin.indepth.dev/tag/angular-ivy/)
- Angular blog: [It’s time for the compatibility opt-in preview of Ivy](https://blog.angular.io/its-time-for-the-compatibility-opt-in-preview-of-ivy-38f3542a282f)
- Angular blog: [Ivy’s internal data structures](https://blog.angular.io/ivys-internal-data-structures-f410509c7480)

## Migration

### Disable Ivy for tests

> [doc](https://angular.io/guide/ivy#opting-out-of-angular-ivy)

```json
// tsconfig.app.json
{
  "angularCompilerOptions": {
    "enableIvy": false
  }
}
```

### @ContentChildren

> [doc](https://angular.io/guide/ivy-compatibility-examples#contentchildren-queries-only-match-direct-children-by-default)

Only match direct children by default.

:stop_sign: `Uncaught TypeError: Cannot read property 'bar' of undefined`

:hammer_and_wrench: `@ContentChildren('foo', {descendants: true}) foos: QueryList<ElementRef>;` (or rewrite template)

### Inheritance w/ DI

> [doc](https://angular.io/guide/ivy-compatibility-examples#all-classes-that-use-angular-di-must-have-an-angular-class-level-decorator)

All classes that use Angular DI must have an Angular class-level decorator.

:stop_sign: `ERROR: This constructor is not compatible with Angular Dependency Injection...`

:hammer_and_wrench: Add a decorator (`@Injectable` or `@Directive`)

### Change detection: newer use something before its definition

> Doc: [select](https://angular.io/guide/ivy-compatibility-examples#cannot-bind-to-value-property-of-select-with-ngfor), [input](https://angular.io/guide/ivy-compatibility-examples#forward-references-to-directive-inputs-accessed-through-local-refs-are-no-longer-supported)

In Ivy, bindings are checked in the order they are defined in the template, and the template is processed in just one pass.

:stop*sign: \_no error, but some rendering "bugs"* OR `Error: ExpressionChangedAfterItHasBeenCheckedError:...`

:hammer_and_wrench: Rewrite template in a procedural way (e.g. When using `*ngFor`, use `<option [selected]>` instead of `<select [value]>`)

### No more `metadata.json` for libraries

> [doc](https://angular.io/guide/ivy-compatibility-examples#foreign-functions-and-foreign-values-arent-statically-resolvable)

Libraries metadatas are extracted from the `.d.ts` files.

:stop*sign: \_compilation error* (e.g. `error NG1010: selector must be a string`)

:hammer_and_wrench: don't export variables (use `const`)
