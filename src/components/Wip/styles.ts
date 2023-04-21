import { keyframes, styled } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  width: 'min(100% - 2rem, 60rem)',
  marginInline: 'auto',
})

export const WipContainer = styled('div', {
  display: 'grid',
  gap: '$10',
  textAlign: 'center',
})

export const Title = styled('h1', {
  fontSize: 'clamp(28px, 5vw, 40px)',
})

export const GearsContainer = styled('div', {
  position: 'relative',
  maxWidth: 200,
  padding: 20,
  marginInline: 'auto',
})

const rollRight = keyframes({
  '0%': { transform: 'rotate(0)' },
  '99%': { transform: 'rotate(360deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const RightGear = styled('div', {
  maxWidth: 87,
  maxHeight: 87,
  animation: `${rollRight} linear 5s infinite`,
})

const rollLeft = keyframes({
  '0%': { transform: 'rotate(0)' },
  '99%': { transform: 'rotate(-360deg)' },
  '100%': { transform: 'rotate(-360deg)' },
})

export const LeftGear = styled('div', {
  maxWidth: 87,
  maxHeight: 87,
  animation: `${rollLeft} linear 5s infinite`,
  position: 'relative',
  bottom: 30,
  right: -56,
})

export const Message = styled('p', {
  maxWidth: 470,

  a: {
    color: '$accent',
    transition: 'all .3s ease-ou',

    '&:hover': {
      color: '$white',
    },
  },
})
