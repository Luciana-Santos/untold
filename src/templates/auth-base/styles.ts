import { styled } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  minHeight: '100vh',
  width: 'min(100% - 2rem, 33.75em)',
  marginInline: 'auto',
  display: 'grid',
  alignItems: 'center',
})

export const MainContainer = styled('main', {
  background: '$black800',
  display: 'grid',
  gap: '$10',
  paddingBlock: '$16',
  paddingInline: 'clamp($6, 4vw, $16)',
  borderRadius: 6,
})
