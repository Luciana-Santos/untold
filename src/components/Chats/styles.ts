import { styled } from '@/styles/stitches.config'

export const Container = styled('section', {
  display: 'grid',
  gap: '$3',
  overflowY: 'auto',

  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',

  '&::-webkit-scrollbar ': {
    display: 'none',
  },
})
