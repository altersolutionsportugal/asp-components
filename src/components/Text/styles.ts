import { TextTypeProps } from '../../@types/Text'
import { styled } from '../helpers/stitches.config'

export const StyledText = (tag: TextTypeProps) => styled(tag, {
  color: '$font',
  fontSize: '$md',
  fontWeight: '$regular',
  variants: {
    type: {
      h1: { fontSize: '$7xl' },
      h2: { fontSize: '$6xl' },
      h3: { fontSize: '$5xl' },
      h4: { fontSize: '$4xl' },
      h5: { fontSize: '$2xl' },
      h6: { fontSize: '$md' },
      p: { fontSize: '$md' },
      span: { fontSize: '$md' },
      small: { fontSize: '$xs' },
      strong: { fontSize: '$md' },
      b: { fontSize: '$md' },
      label: { fontSize: '$md' },
    },
    weight: {
      regular: { fontWeight: '$regular' },
      normal: { fontWeight: '$normal' },
      bold: { fontWeight: '$bold' },
    },
  },
  compoundVariants: [
    {
      css: { color: '$$color', fontWeight: '$$weight' },
    },
  ],
})
