// eslint-disable-next-line import/no-unresolved
import { CardProps } from '../../@types/Card'

const Card = ({ children, onClick }: CardProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)

export default Card
