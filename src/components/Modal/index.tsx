import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ModalProps } from '../../@types/Modal'
import { ModalOverlay } from './styles'

const Modal = ({ children, overlay = true, ...props }: ModalProps) => (
  <DialogPrimitive.Root {...props}>
    { overlay && <ModalOverlay />}
    { children }
  </DialogPrimitive.Root>
)

export default Modal
