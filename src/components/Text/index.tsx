import { TextProps } from '../../@types/Text'
import { theme } from '../helpers/stitches.config'
import { StyledText } from './styles'

const Text = ({
  type = 'p',
  weight = 'normal',
  color = String(theme.colors.font),
  children,
}: TextProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagType: any = StyledText(type)

  return (
    <TagType
      type={type}
      css={{
        $$color: color,
        $$weight: weight,
      }}
    >
      { children }
    </TagType>
  )
}

export default Text
