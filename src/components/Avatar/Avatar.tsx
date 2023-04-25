import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Container,
  UserIcon,
} from './styles'

type AvatarComponentProps = {
  avatarImage?: string
  type?: 'normal' | 'outline'
}

const AvatarComponent = ({
  avatarImage,
  type = 'normal',
}: AvatarComponentProps) => {
  return (
    <Container>
      <AvatarRoot type={type}>
        <AvatarImage src={avatarImage} alt="Luciana" />
        <AvatarFallback>
          <UserIcon weight="fill" />
        </AvatarFallback>
      </AvatarRoot>
    </Container>
  )
}

export default AvatarComponent
