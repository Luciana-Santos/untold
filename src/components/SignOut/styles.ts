import { styled } from '@/styles/stitches.config'
import { SignOut } from '@phosphor-icons/react'

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: 10,
  paddingInline: 10,
  cursor: 'pointer',
  borderRadius: '100%',
  border: '3px solid $black500',
  transition: 'all .3s ease-out',

  '&:hover': {
    background: '$black500',
  },
})

export const SignOutIcon = styled(SignOut, {
  width: 20,
  height: 20,
  color: '$gray400',
  transition: 'all .3s ease-out',

  '&:hover': {
    color: '$accent',
  },
})
