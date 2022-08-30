import { ModalContentProps } from '../../@types/Modal'
import { ModalContainer, ModalWrapper } from './styles'

const ModalContent = ({ children, ...props }: ModalContentProps) => (
  <ModalWrapper {...props}>
    <ModalContainer>
      { children }
    </ModalContainer>
  </ModalWrapper>
)

export default ModalContent
