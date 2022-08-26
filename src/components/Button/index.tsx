// eslint-disable-next-line import/no-unresolved
import { ButtonProps } from '../../@types/Button'
import { ButtonContainer } from './styles'

const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonContainer aria-hidden="true" onClick={onClick}>
    { children }
  </ButtonContainer>
)

export default Button
