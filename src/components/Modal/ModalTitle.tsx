import { ModalTitleProps } from '../../@types/Modal'
import { StyledTitle } from './styles'

const ModalTitle = ({ value }: ModalTitleProps) => (
  <StyledTitle>{ value }</StyledTitle>
)

export default ModalTitle
