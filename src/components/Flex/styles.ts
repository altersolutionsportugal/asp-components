import { styled } from '../helpers/stitches.config'

export const StyledFlex = styled('div', {
  display: 'flex',
  flexDirection: '$$direction',
  flexWrap: '$$wrap',
  justifyContent: '$$justify',
  alignContent: '$$content',
  alignItems: '$$items',
  alignSelf: '$$self',
  gap: '$$gap',
})
