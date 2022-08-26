// eslint-disable-next-line import/no-unresolved
import { ButtonProps } from '../../@types/Button'

const Button = ({ children, onClick }: ButtonProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)

export default Button
