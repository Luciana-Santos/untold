import { styled } from '@/styles/stitches.config'
import { Plus } from '@phosphor-icons/react'

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: 12,
  paddingInline: 2,
  cursor: 'pointer',
  borderRadius: '100%',
  background: '$accent',
  transition: 'all .3s ease-out',
})

export const NewChatIcon = styled(Plus, {
  width: 20,
  height: 20,
  color: '$white200',
  transition: 'all .3s ease-out',

  '&:hover': {
    color: '$white',
  },
})
