import { styled } from '@/styles/stitches.config'
import { CheckFat } from '@phosphor-icons/react'

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

export const SuccessIcon = styled(CheckFat, {
  color: '$accent',
  width: 30,
  height: 30,
})

export const SuccessMessage = styled('p', {})
