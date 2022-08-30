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
      <Flex>
        <Button>Modal 1</Button>
        <Button>Modal 2</Button>
      </Flex>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})
