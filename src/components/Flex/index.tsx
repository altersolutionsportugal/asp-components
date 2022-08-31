import { FlexProps } from '../../@types/Flex'
import { StyledFlex } from './styles'

const Flex = ({
  children,
  justify = 'inherit',
  direction = 'inherit',
  wrap = 'inherit',
  items = 'inherit',
  self = 'inherit',
  content = 'inherit',
  gap = 'inherit',
}: FlexProps) => (
  <StyledFlex
    css={{
      $$justify: justify,
      $$direction: direction,
      $$wrap: wrap,
      $$items: items,
      $$self: self,
      $$content: content,
      $$gap: gap,
    }}
  >
    { children }
  </StyledFlex>
)

export default Flex
