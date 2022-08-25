![statements](../coverage/badge-statements.svg)
![functions](../coverage/badge-functions.svg)
![branches](../coverage/badge-branches.svg)
![lines](../coverage/badge-lines.svg)

# ASP Components

## First step

Install global commitzen in your computer

```shell
npm install -g commitizen
```

## How to create a component

Go to `./src/components` and create a component and test

## How to create a stories

Go to `./src/stories` and create a stories

## Commit

When us commit anything, the husky running pre-commit, this pre-commit will running a test, lint and build lib.

## Commands

### Run storybook
```shell
yarn dev
```

### Run eslint react components
```shell
yarn lint
```

 ### Run tests react components
```shell
yarn test
```

### Run tests to husky and CI/CD
```shell
yarn test:ci
```

### Build storybook
```shell
yarn build
```

### Build lib to react components
```shell
yarn build:lib
```
