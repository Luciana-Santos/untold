import AvatarComponent from '../Avatar/Avatar'
import { Container } from './styles'

const Chats = () => {
  return (
    <Container>
      <AvatarComponent /> <AvatarComponent /> <AvatarComponent />
      <AvatarComponent /> <AvatarComponent /> <AvatarComponent />{' '}
      <AvatarComponent />
      <AvatarComponent />
    </Container>
  )
}

export default Chats
