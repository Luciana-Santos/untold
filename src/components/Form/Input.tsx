import { useFormContext } from 'react-hook-form'
import { InputItem } from './styles'

type InputProps = {
  type: string
  name: string
}

export function Input({ type, name, ...props }: InputProps) {
  const { register } = useFormContext()

  return <InputItem type={type} {...props} {...register(name)} />
}
