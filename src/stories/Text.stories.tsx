import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import TextComponent from '../components/Text'

const meta: ComponentMeta<typeof TextComponent> = {
  title: 'Design System/Text',
  component: TextComponent,
  argTypes: {
    type: { control: { type: 'inline-radio' } },
    weight: { control: { type: 'inline-radio' } },
  },
}

export default meta

export const Text: ComponentStoryObj<typeof TextComponent> = {
  args: {
    children: 'Hello',
  },
}
