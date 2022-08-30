import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ModalWrapper } from '../components/Modal/styles'

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean
}

export type ModalContentProps = DialogPrimitive.DialogContentProps & React.ComponentProps<typeof ModalWrapper> & {
  width?: boolean
}
