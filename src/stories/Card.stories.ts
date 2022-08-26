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
