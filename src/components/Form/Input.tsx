import { InputItem } from './styles'

type InputProps = {
  type: string
}

export function Input({ type, ...props }: InputProps) {
  return <InputItem type={type} {...props} />
}
