import { LabelStyled } from './styles'

type LabelProps = {
  children: React.ReactNode
}

export function Label({ children }: LabelProps) {
  return <LabelStyled>{children}</LabelStyled>
}
