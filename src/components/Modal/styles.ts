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

export const CloseButton = styled(Dialog.Close, {
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  placeItems: 'center',
  color: '$gray400',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': {
    backgroundColor: '$accent',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $accent',
  },
})
