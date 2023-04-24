import { keyframes, styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const ModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.44)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const ModalContent = styled(Dialog.Content, {
  background: '$black500',
  borderRadius: 6,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 450,
  maxHeight: '85vh',
  padding: '$6',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': {
    outline: 'none',
  },
})

export const ModalTitle = styled(Dialog.Title, {})

export const ModalDescription = styled(Dialog.Description, {})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  borderRadius: 6,
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray200',
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
  transition: 'all .3s ease-out',

  '&:hover': {
    background: '$black800',
    color: '$white',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $accent',
  },
})

export const OpenModalButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontSize: '$xs',
  color: '$accent',
  maxWidth: 'max-content',
})
