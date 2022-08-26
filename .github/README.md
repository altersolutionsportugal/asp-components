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

## Declare types

It's very important we declare types of components in `./src/@types`, create a declaration file with same name of component
```ts
// Card.d.ts
import React from 'react'

export type CardProps = {
  children: React.ReactNode,
  /**
   * @description
   * The onClick is optional
   * @default
   * none
   * @example
   * <Card onClick={handleOnClick}>...</Card>
   */
  onClick?: () => void,
}
```

And declare in `./src/@types/index.ts` the types to build

```ts
import * as Button from './Button'
import * as Card from './Card'

// Important to use the lib
export {
  Button,
  Card,
}
```

## How to create a component

Go to `./src/components` and create a component and test
```tsx
import { CardProps } from '../../@types/Card'

const Card = ({ children, onClick }: CardProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)

export default Card // <- Important export default the component
```

## Declare components for lib

Go to `./src/components/index.ts` and declare a component

```ts
export { default as Card } from './Card'

```

## How to create stories

Go to `./src/stories` and create stories, [see more](https://storybook.js.org/docs/react/writing-stories/introduction)
```ts
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import Card from '../components/Card'

const meta: ComponentMeta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
}

export default meta

export const Primary: ComponentStoryObj<typeof Card> = {
  args: {
    children: 'Hello',
  },
}
```

## Commit

When us commit anything, the husky running pre-commit, this pre-commit will running a test, lint and build lib.

## Commands

### Run storybook
```shell
yarn storybook
```

### Run front
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

### Run tests coverage
```shell
yarn test:coverage
```

### Run tests coverage and bagdes
```shell
yarn test:badges
```

### Build storybook
```shell
yarn build
```

### Build lib to react components
```shell
yarn build
```
