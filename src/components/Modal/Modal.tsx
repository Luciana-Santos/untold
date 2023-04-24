import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  CloseButton,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
} from './styles'

type ModalProps = {
  children: React.ReactNode
  modalTitle?: string
  modalDescription: string
}

const Modal = ({ children, modalTitle, modalDescription }: ModalProps) => {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>{modalTitle}</ModalTitle>
        <ModalDescription>{modalDescription}</ModalDescription>

        {children}
        <CloseButton aria-label="Close">
          <Cross2Icon width={24} height={24} />
        </CloseButton>
      </ModalContent>
    </Dialog.Portal>
  )
}

export default Modal

export const ModalRoot = Dialog.Root
export const ModalTrigger = Dialog.Trigger
