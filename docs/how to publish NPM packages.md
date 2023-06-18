# How to publish NPM packages

We’re using the Changesets package to manage and publish NPM. The Changesets workflow is designed to help people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then it automates updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Changesets has a focus on solving these problems for multi-package repositories and keeping packages that rely on each other within the multi-package repository up-to-date, as well as making it easy to make changes to groups of packages. 

### Base workflow

Contributor runs:
```
yarn changeset
```
or 
```
npx changeset
```
and answers the provided questions.

When the maintainer wants to release packages, they should run
```
yarn changeset version
```
 or
```
npx changeset version
```
and then
```
yarn changeset publish
```
or
```
npx changeset publish
```
You can read further about how to use changesets

https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md 

https://github.com/changesets/changesets/blob/main/packages/cli/README.md