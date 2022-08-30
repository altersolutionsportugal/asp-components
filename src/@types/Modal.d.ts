import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ModalWrapper, StyledTitle } from '../components/Modal/styles'

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean
}

export type ModalContentProps = DialogPrimitive.DialogContentProps & React.ComponentProps<typeof ModalWrapper> & {
  width?: boolean
}

export type ModalTitleProps = DialogPrimitive.DialogTitleProps & React.ComponentProps<typeof StyledTitle> & {
  value: string
}
