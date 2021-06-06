# Nx & Angular: Developer eXperience

## VS Code Extensions

- Angular Language Service: [angular.ng-template](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- Nx Console: [nrwl.angular-console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

## Debugging

- Ivy: [ng object for debugging](https://v9.angular.io/api/core/global)
- [Angular Dev Tools (Chrome Extension)](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) (see [Announcement](https://blog.angular.io/introducing-angular-devtools-2d59ff4cf62f))
- [\@ngrx/store-devtools](https://ngrx.io/guide/store-devtools) (with the [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension/) in Chrome & Firefox)

## Tools

- `nx dep-graph` ([doc](https://nx.dev/latest/angular/cli/dep-graph), [tutorial](https://nx.dev/latest/angular/tutorial/09-dep-graph), [blog post](https://blog.nrwl.io/plugging-into-the-dependency-graph-construction-for-nx-bc79814f5521))
- [compodoc](https://compodoc.app/) & [ngd](https://github.com/compodoc/ngd)

  ```bash
  # View the dependencies tree of you Angular application
  yarn global add @compodoc/ngd-cli
  cd apps/my-app
  ngd -p tsconfig.app.json
  # Generate a comprehensive API documentation
  yarn global add @compodoc/compodoc
  compodoc -p tsconfig.app.json
  ```

- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

  ```bash
  ng build --stats-json
  yarn global add webpack-bundle-analyzer
  webpack-bundle-analyzer dist/MyProject/stats.json
  ```
