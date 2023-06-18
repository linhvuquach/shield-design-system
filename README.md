# linhvuquach Design System

We're starting with Turborepo

This is an official React design system starter powered by Turborepo. Versioning and package publishing is handled by [Changesets](https://github.com/changesets/changesets) and fully automated with GitHub Actions.

## What's inside?

This Turborepo uses [yarn](https://classic.yarnpkg.com/lang/en/) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `@shield/react`: a integrate [Next.js](https://nextjs.org/) and [Storybook](https://storybook.js.org/) app
- `@shield/utils`: shared React utilities
- `@shield/tokens`: design system tokens
- `@shield/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `shield-eslint-config`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

There are already:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Useful commands

- `yarn build` - Build all packages and the shield-react site
- `yarn dev` - Develop all packages and the shield-react site
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

### Changing the npm organization scope

The npm organization scope for this design system starter is `@linhvuquach/`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Re-run `yarn install`

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

### npm

If you want to publish package to the public npm registry and make them publicly available, this is already setup.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### How to run

Requirements: 
```diff
+ Node version: >= 16
```

Starting to develop with clone repo:  
- Install dependencies:
```
yarn 
```
- Run project
```
yarn dev
```
- Build project
```
yarn build
```