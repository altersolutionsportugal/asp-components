import { styled } from '../helpers/stitches.config'

export const ButtonContainer = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 $4',
  fontSize: '$md',
  lineHeight: 1,
  fontWeight: '$medium',
  height: '2.5rem',
  background: '$primary',
  color: '$white',
  cursor: 'pointer',
  transition: 'background 0.3s ease 0s, box-shadow 0.2s ease 0s',
  '&:hover': {
    background: '$primary_light',
  },
  '&:focus-visible': {
    outline: 0,
    boxShadow: '0 0 0 4px #121214, 0 0 0 6px rgba(255, 255, 255, 0.7)',
  },
})
