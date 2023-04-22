import { styled } from '@/styles/stitches.config'

export const FormContainer = styled('form', {
  display: 'grid',
  gap: '$4',
})

export const Fieldset = styled('fieldset', {
  border: 'none',
})

export const LabelStyled = styled('label', {
  color: '$gray200',
  display: 'grid',
  gap: '$1',
})

export const InputItem = styled('input', {
  background: '$gray600',
  border: '3px solid transparent',
  fontSize: '$md',
  padding: '$2',
  borderRadius: 4,
  transition: 'all .3s ease-in-out',
  color: '$white200',

  '&:focus, &:hover': {
    outline: 'none',
    borderColor: '$accent',
  },
})

export const MessageStyled = styled('span', {
  fontSize: '$xxs',
  color: '#FF80BF',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  justifyContent: 'space-between',
  marginTop: '$4',
})
