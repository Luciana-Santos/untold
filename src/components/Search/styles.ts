import { styled } from '@/styles/stitches.config'
import { MagnifyingGlass } from '@phosphor-icons/react'

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  paddingBlock: '$2',
  cursor: 'pointer',

  '&:hover > svg': {
    color: '$gray200',
  },
})

export const SearchIcon = styled(MagnifyingGlass, {
  width: 30,
  height: 30,
  color: '$gray400',
  transition: 'all .3s ease-out',
})
