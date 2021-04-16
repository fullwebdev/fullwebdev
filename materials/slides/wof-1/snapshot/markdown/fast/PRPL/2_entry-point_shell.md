<!-- .slide: class="transition-white fire-bg-blue fire-specific-slide" data-background="css/theme/legacy/images/background_blue.png" -->

# Entry Point & App Shell

##==##

# Minimal Entrypoint

![center h-800](./assets/images/PRPL/small-door.jpg)

Notes:
left: application shell is in html -> heavy entry point
right: application shell in PeopleApp -> light entry point = better first paint and T.T.I.

The App Entrypoint should have minimal static dependencies, in other words, not much beyond the app-shell itself.

##==##

<!-- .slide: class="flex-row"-->

# Conditionally loads polyfills

<br><br>

## Example: webcomponents-loader

```html
<!-- load the webcomponents loader, which injects the necessary polyfill bundle -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

<!-- load the element -->
<script type="module" src="my-element.js"></script>

<!-- use the element -->
<my-element></my-element>
```

Notes:
see the [webcomponentsjs README](https://github.com/webcomponents/webcomponentsjs#using-webcomponents-loaderjs)
other polyfills (like fetch) needs a "custom" approach
see [Loading Polyfills only when needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) for example
or even the (deprecated) npm package [dynamic-polyfill](https://github.com/PascalAOMS/dynamic-polyfill)

##==##

# Shell

include everything needed for first paint

![center h-800](./assets/images/app_shell.png)

© [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) [Google](https://developers.google.com/web/fundamentals/architecture/app-shell)

<!-- .element class="copyright" -->

##==##

# Should the entry point include the app shell ?

![center h-800](./assets/images/PRPL/nested-tables.jpg)
