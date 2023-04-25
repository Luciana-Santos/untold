import { styled } from '@/styles/stitches.config'
import { User } from '@phosphor-icons/react'
import * as Avatar from '@radix-ui/react-avatar'

export const Container = styled('div', {
  display: 'flex',
  gap: 20,
})

export const AvatarRoot = styled(Avatar.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 46,
  height: 46,
  borderRadius: '100%',
  background: '$gray600',
  cursor: 'pointer',
  border: '3px solid transparent',

  variants: {
    type: {
      normal: {
        borderColor: 'transparent',
      },
      outline: {
        borderColor: '$accent',
      },
    },
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray600',
})

export const UserIcon = styled(User, {
  color: '$gray400',
  width: 20,
  height: 20,
})
