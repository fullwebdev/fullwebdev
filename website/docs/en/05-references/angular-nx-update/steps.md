# Migration Steps

## Set Up (latest 8)

> [updates](https://github.com/noelmace/nx-examples/commit/f0c31569ed1d35d15fb1b27618dfa3fce86b422f)

```bash
nvm use 12 # grpc isn't compatible with Node 14
yarn global add nx
git reset --hard
git clean -dffx
rm -rf /tmp/tmp-*
df -i # check IUse%
yarn
nx migrate 8.12.11
yarn start --prod
```

1. Clean `package.json` (remove unnecessary transitive dependencies from root and use consistent version).
2. Use versions from Nx 8.12.11 (`npx create-nx-workspace@8.12.11 --preset=angular`)
3. Audit dependencies (see [npm](/docs/references/angular-nx-update/npm))

## 8 :arrow_right: 9

- Angular 9: [Release Note](https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3) (+ [9.1](https://blog.angular.io/version-9-1-of-angular-now-available-typescript-3-8-faster-builds-and-more-eb292f989428)), [Update Docs](https://v9.angular.io/guide/updating-to-version-9), [Deprecations](https://v9.angular.io/guide/deprecations), [Update 8.2 to 9.1](https://update.angular.io/?l=3&v=8.2-9.1), [breaking changes](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-5)
- NgRx 9: [Release Note](https://medium.com/ngrx/announcing-ngrx-version-9-immutability-out-of-the-box-customizable-effects-and-more-e4cf71be1a5b), [Update Guide](https://ngrx.io/guide/migration/v9)

### Nx 9.0

> [updates](https://github.com/noelmace/nx-examples/commit/db658de) /
> [migrations](https://github.com/noelmace/nx-examples/commit/80e2ad8)

- [Nx 9 Release Note](https://blog.nrwl.io/nx-cli-distributed-caching-improved-react-support-bazel-support-and-more-in-nx-9-8d55c4becdc4)
- Typescript: 3.6 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html)), 3.7 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html))
- nx-examples:
  - [update nx to next version](https://github.com/nrwl/nx-examples/pull/81) (9.0.1)
  - [change build script to use nx](https://github.com/nrwl/nx-examples/pull/90)
  - [update nx to the latest version](https://github.com/nrwl/nx-examples/pull/91) (9.0.4)

### Nx 9.1

> [updates](https://github.com/noelmace/nx-examples/commit/00ddab9) /
> [migrations](https://github.com/noelmace/nx-examples/commit/ee52877)

- [Nx 9.1 Release Note](https://blog.nrwl.io/dependency-graph-enhancements-eslint-plugin-buildable-library-dependencies-ngrx-9-and-more-in-e7b896c4fbca)
- nx-examples:
  - [update to 9.1.3-beta.1](https://github.com/nrwl/nx-examples/pull/93)
  - [use smarter affected logic](https://github.com/nrwl/nx-examples/pull/94)

### Nx 9.2

> [updates](https://github.com/noelmace/nx-examples/commit/85bd220) /
> [migrations](https://github.com/noelmace/nx-examples/commit/3a81993)

- [Nx 9.2 Release Note](https://blog.nrwl.io/computation-caching-out-of-the-box-revamped-docs-community-plugins-and-more-in-nx-9-2-e97801116e02)
- Typescript: 3.8 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html))
- nx-examples:
  - [update nx to 9.2](https://github.com/nrwl/nx-examples/pull/96)
  - [update jest to v25](https://github.com/nrwl/nx-examples/pull/97)
  - [update nx to 9.2.2](https://github.com/nrwl/nx-examples/pull/98)
  - [update nx to 9.2.4](https://github.com/nrwl/nx-examples/pull/99)

### Nx 9.3

> [updates](https://github.com/noelmace/nx-examples/commit/ee2c086) /
> [migrations](https://github.com/noelmace/nx-examples/commit/bfa1ee7)

- [Nx 9.3 Release Note](https://blog.nrwl.io/improved-next-js-support-auto-populated-publishable-library-dependencies-and-more-in-nx-9-3-c7dc967dc065)

### Nx 9.4

> [updates](https://github.com/noelmace/nx-examples/commit/0f736a0) /
> [migrations](https://github.com/noelmace/nx-examples/commit/d0fb274)

- [Nx 9.4 Release Note](https://blog.nrwl.io/gatsby-support-custom-workspace-layouts-and-more-in-nx-9-4-497ae105bf4)
- nx-examples: [update nx to 9.4.0](https://github.com/nrwl/nx-examples/pull/102)

### Nx 9.5 - 9.8

> updates: [9.5.1](https://github.com/noelmace/nx-examples/commit/e79c077), [9.6.0](https://github.com/noelmace/nx-examples/commit/15c661c), [9.7 & 9.8](https://github.com/noelmace/nx-examples/commit/f0277c7) /
> migrations: [9.6](848a816)

- nx-examples: [update nx to 9.5](https://github.com/nrwl/nx-examples/pull/104)

## 9 :arrow_right: 10

> updates: [10.0.13](https://github.com/noelmace/nx-examples/commit/87d339f), [10.1.0](https://github.com/noelmace/nx-examples/commit/ea7da0c), [10.2.1](https://github.com/noelmace/nx-examples/commit/e967a21), [10.3.3](https://github.com/noelmace/nx-examples/commit/9570428), [10.4.15](https://github.com/noelmace/nx-examples/commit/b075631) /
> migrations: [10.0](https://github.com/noelmace/nx-examples/commit/6342b15), [10.1](https://github.com/noelmace/nx-examples/commit/229dc87), [10.2](https://github.com/noelmace/nx-examples/commit/ea2ef5c), [10.3](https://github.com/noelmace/nx-examples/commit/b696d19), [10.4](https://github.com/noelmace/nx-examples/commit/23e3d26)

- [Angular 10 Release Note](https://blog.angular.io/version-10-of-angular-now-available-78960babd41)
- Nx Release Notes: [10](https://blog.nrwl.io/more-customizable-workspaces-angular-10-support-better-webstorm-jest-integration-and-more-in-nx-c9b2bd967166), [10.3](https://blog.nrwl.io/vs-code-jest-improved-eslint-support-typescript-4-storybook-6-and-more-with-nx-10-3-faf7c12fe556), [10.4](https://blog.nrwl.io/cleaner-eslint-config-and-pnpm-compatibility-with-nx-10-4-3f6faa3cdd19)
- [NgRx 10 Release Note](https://medium.com/ngrx/announcing-ngrx-version-10-new-packages-for-local-component-state-and-reactive-components-swag-62bedda0be91)
- [NgRx v10 Update Guide](https://ngrx.io/guide/migration/v10)
- Typescript: Nx@10.0 = 3.9 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-3-9/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html)), Nx@10.3 = 4.0 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html))

## 10 :arrow_right: 11

> updates: [11.0.20](https://github.com/noelmace/nx-examples/commit/514b34d), [11.1.5](https://github.com/noelmace/nx-examples/commit/a0c7dcd), [11.2.12](https://github.com/noelmace/nx-examples/commit/fc638d4), [11.3.2](https://github.com/noelmace/nx-examples/commit/d1d4a5c), [11.4.0](https://github.com/noelmace/nx-examples/commit/46b60c9), [11.5.2](https://github.com/noelmace/nx-examples/commit/d130efb), [11.6.3](https://github.com/noelmace/nx-examples/commit/4dca852) /
> migrations: [11.0](https://github.com/noelmace/nx-examples/commit/8ddbfa2), [11.2](https://github.com/noelmace/nx-examples/commit/1c4abe2), [10.3](https://github.com/noelmace/nx-examples/commit/b696d19), [11.5](https://github.com/noelmace/nx-examples/commit/409b19a), [11.6](https://github.com/noelmace/nx-examples/commit/b5da7ed)

- [Angular 11 Release Note](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7)
- [Nx 11 Release Note](https://blog.nrwl.io/introducing-nx-11-new-react-features-angular-11-incremental-builds-and-more-83c1e3a5210b)
- [NgRx v11 Update Guide](https://ngrx.io/guide/migration/v11)
- [use ESLint instead of TSLint](https://github.com/angular-eslint/angular-eslint)

## 11 :arrow_right: 12

> updates: [12.0.8](https://github.com/noelmace/nx-examples/commit/635ecfd), [12.1.1](https://github.com/noelmace/nx-examples/commit/56625a5), [12.2.0](https://github.com/noelmace/nx-examples/commit/8788121), [12.3.4](https://github.com/noelmace/nx-examples/commit/265e468) /
> migrations: [12.0](https://github.com/noelmace/nx-examples/commit/c087832), [12.1](https://github.com/noelmace/nx-examples/commit/ee45304), [12.2](https://github.com/noelmace/nx-examples/commit/cb99a4a), [12.3](https://github.com/noelmace/nx-examples/commit/6310d99)

- [Angular 12 Release Note](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49)
- Nx Release Notes: [v12](https://blog.nrwl.io/introducing-nx-12-simplified-onboarding-to-nx-performance-improvements-multi-language-support-6c344461eb13), [v12.3](https://blog.nrwl.io/incremental-build-improvements-angular-12-distributed-task-execution-and-more-in-nx-12-3-48b5e4722056)
- NgRx 12: [Release Note](https://medium.com/ngrx/announcing-ngrx-version-12-new-operator-for-effects-componentstore-enhancements-integrated-9dcb2519d495), [Update Guide](https://ngrx.io/guide/migration/v12)
- Typescript: (for Nx@12.3) 4.1 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html)), 4.2 ([Announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/) / [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html))

## Next

- [Support for RxJS 7](https://github.com/angular/angular/issues/41897)
