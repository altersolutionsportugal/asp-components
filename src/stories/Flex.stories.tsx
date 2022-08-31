import { ComponentMeta, Story } from '@storybook/react'

import { FlexProps } from '../@types/Flex'
import FlexComponent from '../components/Flex'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: ComponentMeta<typeof FlexComponent> | any = {
  title: 'Design System/Flex',
  component: FlexComponent,
  argTypes: {
    // Used only change numbers of children
    numberOfChildren: { type: 'number', defaultValue: 4 },
    justify: {
      control: { type: 'inline-radio' },
    },
    direction: {
      control: { type: 'inline-radio' },
    },
    wrap: {
      control: { type: 'inline-radio' },
    },
    items: {
      control: { type: 'inline-radio' },
    },
    self: {
      control: { type: 'inline-radio' },
    },
    content: {
      control: { type: 'inline-radio' },
    },
  },
}

export default meta

const Template = ({ numberOfChildren, ...args }: { numberOfChildren: number, args: Story<FlexProps> }) => (
  <FlexComponent {...args}>
    {
      Array.from(Array(numberOfChildren).keys()).map((item) => (
        <div
          style={{
            width: '50px',
            height: '50px',
            background: '#8257E5',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          { item + 1 }
        </div>
      ))
    }
  </FlexComponent>
)

export const Flex = Template.bind({})
