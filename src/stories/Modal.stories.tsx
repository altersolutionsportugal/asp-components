import { useArgs } from '@storybook/client-api'
import { ComponentMeta, Story } from '@storybook/react'

import { ModalProps } from '../@types/Modal'
import {
  Button,
  Modal as ModalComponent,
  ModalContent,
  ModalTrigger,
} from '../components'
import Flex from '../components/Flex'

const meta: ComponentMeta<typeof ModalComponent> = {
  title: 'Design System/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
}

export default meta

const Template: Story<ModalProps> = (args) => {
  const [ , updateArgs ] = useArgs()

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <h1>Hello Modal</h1>
      </ModalContent>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})

const ModalExample: Story<ModalProps> = (args) => {
  const [ , updateArgs ] = useArgs()

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <h3>Modal Header</h3>
        {/* eslint-disable */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut velit laboriosam autem hic iste repellendus magnam, voluptates provident dolor dolore laborum! Ad quidem recusandae enim alias eligendi ut provident veniam.</p>
        <Flex justify="end" gap="16px">
          <Button>Modal 1</Button>
          <Button>Modal 2</Button>
        </Flex>
      </ModalContent>
    </ModalComponent>
  )
}

export const ModalWithExample = ModalExample.bind({})
