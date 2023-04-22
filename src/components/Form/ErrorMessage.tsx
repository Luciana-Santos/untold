import { MessageStyled } from './styles'

type ErrorMessageProps = {
  children: React.ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <MessageStyled>{children}</MessageStyled>
}
