import { styled } from '@/styles/stitches.config'

export const LogoStyled = styled('div', {
  display: 'flex',
  gap: '$5',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LogoIcon = styled('div', {
  display: 'grid',
  placeContent: 'center',
  padding: 20,
  maxWidth: 'max-content',
  background: '$black500',
  borderRadius: 6,
})

export const Description = styled('div', {
  textAlign: 'center',

  '> h3': {
    fontSize: '$2xl',
    letterSpacing: ' 0.08em',
    textTransform: 'uppercase',
  },

  '> span': {
    fontSize: '$xs',
    color: '$gray400',
  },
})
