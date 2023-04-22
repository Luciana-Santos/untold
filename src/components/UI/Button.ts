import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  paddingBlock: '$2',
  paddingInline: '$5',
  width: 'max-content',
  borderRadius: 6,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',

  '&:focus, &:not(:disabled):hover': {
    boxShadow: '4px 4px hsla(0,0%,100%,.1)',
    opacity: 0.85,
  },

  '&:disabled': {
    backgroundColor: '#6c7393',
    color: '$black800',
    cursor: 'not-allowed',
  },

  variants: {
    type: {
      normal: {
        background: '$accent',
        color: '$white',
      },
      outline: {
        border: '2px solid $accent',
        color: '$accent',
      },
    },
  },
})
