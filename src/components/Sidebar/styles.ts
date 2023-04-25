import { styled } from '@/styles/stitches.config'
import { List } from '@phosphor-icons/react'

export const Container = styled('aside', {
  paddingBlock: '$5',
  display: 'grid',
  gap: '$5',
  justifyItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-between',
  background: '$black800',
  height: '100vh',
})

export const TopSidebarWrapper = styled('div', {
  display: 'grid',
  gap: '$5',
  justifyItems: 'center',
})

export const SidebarHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '$2',
  gap: '$4',
  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: -16,
    right: 0,
    display: 'block',
    height: 2,
    width: '100%',
    background: '$black500',
  },
})

export const OpenMenuIcon = styled(List, {
  width: 36,
  height: 36,
  color: '$gray400',
  marginInline: 'auto',
  cursor: 'pointer',
  transition: 'all .3s ease-out',

  '&:hover, &:focus': {
    color: '$gray200',
  },
})

export const SidebarFooter = styled('div', {
  display: 'grid',
  gap: '$3',
  alignSelf: 'end',
})
