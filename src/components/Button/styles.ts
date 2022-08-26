import { styled } from '../../styles/stitches.config'

export const ButtonContainer = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})
