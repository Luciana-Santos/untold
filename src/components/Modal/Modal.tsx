import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { CloseButton, ModalContent, ModalOverlay } from './styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        {children}
        <CloseButton aria-label="Close">
          <Cross1Icon />
        </CloseButton>
      </ModalContent>
    </Dialog.Portal>
  )
}

export default Modal

export const ModalRoot = Dialog.Root
export const ModalTrigger = Dialog.Trigger
