# Updating an Nx Angular Monorepo (8 :arrow_right: 12)

> - [Ivy](./angular-ivy.md)
> - [NgRx](./ngrx.md)
> - [Developer eXperience](./dx.md)
> - [TypeScript](./typescript.md)
> - [npm](./npm.md)
> - [Migration Steps](./steps.md)

## Docs

- [Updating Nx](https://nx.dev/latest/angular/core-concepts/updating-nx)
- [Nx CLI: migrate](https://nx.dev/latest/angular/cli/migrate#migrate)
- [Angular Update Guide](https://update.angular.io)
- [Keeping your Angular projects up-to-date](https://angular.io/guide/updating)

## Sources

- [Nx migrations schematics](https://github.com/nrwl/nx/tree/master/packages/workspace/src/migrations)
- nx-exemple step-by-step-update: [package.json](https://github.com/noelmace/nx-examples/blame/step-by-step-update/package.json)

## Versions

::: warning
Nx doesn't really follow semver (e.g. [breaking change in 8.12.3](https://github.com/nrwl/nx/commit/c7d075df499518916f0102651ead88843e9a5ef6)).
:::

| step | change | \@nrwl/workspace | \@angular/cli | angular | ngrx   | typescript |
| ---- | ------ | ---------------- | ------------- | ------- | ------ | ---------- |
| 1    | major  | 12.3.4           | 12.0.1        | 12.0.1  | 12.0.0 | 4.2.4      |
| 1    | none   | 12.2.0           | 11.2.13       | 11.2.14 | 11.1.0 | 4.0.7      |
| 0    | none   | 12.1.1           | 11.2.13       | 11.2.14 | 11.1.0 | 4.0.7      |
| 0    | none   | 12.0.8           | 11.2.13       | 11.2.14 | 11.0.0 | 4.0.7      |
| 0    | none   | 11.6.3           | 11.2.13       | 11.2.14 | 11.0.0 | 4.0.7      |
| 0    | none   | 11.5.2           | 11.2.13       | 11.2.14 | 11.0.0 | 4.0.7      |
| 0    | none   | 11.4.0           | 11.2.13       | 11.2.14 | 11.0.0 | 4.0.7      |
| 0    | major  | 11.3.2           | 11.2.13       | 11.2.14 | 11.0.0 | 4.0.7      |
| 0    | minor  | 11.2.12          | 11.0.7        | 11.2.14 | 10.0.0 | 4.0.7      |
| 0    | none   | 11.1.5           | 11.0.7        | 11.2.14 | 10.0.0 | 4.0.7      |
| 0    | major  | 11.0.20          | 11.0.7        | 11.2.14 | 10.0.0 | 4.0.7      |
| 1    | none   | 10.4.15          | 10.1.7        | 10.2.5  | 10.0.0 | 4.0.7      |
| 0    | none   | 10.3.3           | 10.1.7        | 10.2.5  | 10.0.0 | 4.0.7      |
| 0    | major  | 10.2.1           | 10.0.8        | 10.2.5  | 10.0.0 | 3.9.9      |
| 0    | none   | 10.1.0           | 10.0.8        | 10.2.5  | 9.1.0  | 3.9.9      |
| 0    | major  | 10.0.13          | 10.0.8        | 10.2.5  | 9.1.0  | 3.9.9      |
| 1    | none   | 9.8.0            | 9.1.15        | 9.1.13  | 9.1.0  | 3.8.3      |
| 0    | none   | 9.6.0            | 9.1.15        | 9.1.13  | 9.1.0  | 3.8.3      |
| 0    | none   | 9.5.1            | 9.1.15        | 9.1.13  | 9.1.0  | 3.8.3      |
| 0    | none   | 9.4.5            | 9.1.15        | 9.1.13  | 9.1.0  | 3.8.3      |
| 0    | minor  | 9.3.0            | 9.1.15        | 9.1.13  | 9.1.0  | 3.8.3      |
| 0    | minor  | 9.2.4            | 9.1.15        | 9.1.13  | 9.0.0  | 3.8.3      |
| 0    | none   | 9.1.4            | 9.0.7         | 9.1.13  | 9.0.0  | 3.7.7      |
| 0    | major  | 9.0.4            | 9.0.7         | 9.1.13  | 9.0.0  | 3.7.7      |
| 1    | minor  | 8.12.11          | 8.3.23        | 8.2.14  | 8.3.0  | 3.5.3      |

### Releases

- [\@nrwl/workspace npm versions](https://www.npmjs.com/package/@nrwl/workspace)
- [nrwl/nx releases](https://github.com/nrwl/nx/releases)
- [Angular CHANGELOG](https://github.com/angular/angular/blob/master/CHANGELOG.md)
- [Angular releases](https://github.com/angular/angular/releases)
- [NgRx CHANGELOG](https://github.com/ngrx/platform/blob/master/CHANGELOG.md)

## How To

Using `ng update` in a Nx repository can lead to errors and inconsistencies. Always use [`nx migrate`](https://nx.dev/latest/angular/cli/migrate#migrate) instead (cf [Updating Nx](https://nx.dev/latest/angular/core-concepts/updating-nx)).

You can use the following commands to update all Angular and Nx related dependencies:

```bash
# target major version
MAJOR=9
# list related versions to find the more recent minor and patch version
npm show "@nrwl/workspace@~${MAJOR}" version

# target version
NX_VERSION=9.8.0

# Update package.json and generate a migrations.json file
nx migrate "@nrwl/workspace@${NX_VERSION}"
# OR use the following if some packages versions were manually edited in package.json
# nx migrate "@nrwl/workspace@${NX_VERSION}" --from="@nrwl/workspace@${OLD_VERSION},<other packages ...>"

# run migrations (i.e. code & configuration changes) specified in migrations.json
nx migrate --run-migrations=migrations.json 2>&1 | tee nx-migrate-v${NX_VERSION}.log

rm migrations.json
rm nx-migrate-v${NX_VERSION}.log
git add -A
git commit -m "chore: update Nx to ${NX_VERSION}"

# Update other dependencies (e.g. @angular/material)

npm show "@angular/material@~${MAJOR}" version
MAT_VERSION=9.2.4

nx migrate "@angular/material@${MAT_VERSION}"
nx migrate --run-migrations=migrations.json 2>&1 | tee nx-migrate-material-v${MAT_VERSION}.log

rm migrations.json
rm nx-migrate-material-v${MAT_VERSION}.log
git add -A
git commit -m "chore: update angular material to ${MAT_VERSION}"
```

Other packages (like `ngx-bootstrap` & `@angular-builders/custom-webpack`) don't provide any migration schematic for v9.

Therefore, running `nx migrate ngx-bootstrap@6.2.0` (for example) only updates the version number in `package.json`, without generating a `migrations.json` file.

Yet, I recommend using `nx migrate` to update these packages in the future, in case they provide new migrations schematics.
