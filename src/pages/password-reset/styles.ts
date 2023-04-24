import { styled } from '@/styles/stitches.config'
import { CheckIcon } from '@radix-ui/react-icons'

export const Title = styled('h4', {
  fontSize: '$xl',
  color: '$gray400',
  fontWeight: 'normal',
  textAlign: 'center',
})

export const Container = styled('div', {
  display: 'grid',
  gap: '$5',
})

export const SucessMessageContainer = styled('div', {
  display: 'grid',
  gap: '$5',
  justifyContent: 'center',
  textAlign: 'center',
  justifyItems: 'center',
})

export const SuccessIcon = styled(CheckIcon, {
  color: '$accent',
  width: 40,
  height: 40,
})

export const SuccessMessage = styled('p', {})
