import AvatarComponent from '../Avatar/Avatar'
import Chats from '../Chats/Chats'
import NewChat from '../NewChat/NewChat'
import Search from '../Search/Search'
import SignOut from '../SignOut/SignOut'
import UserSettings from '../UserSettings/UserSettings'
import {
  Container,
  OpenMenuIcon,
  SidebarFooter,
  SidebarHeader,
  TopSidebarWrapper,
} from './styles'

const Sidebar = () => {
  return (
    <Container>
      <TopSidebarWrapper>
        <SidebarHeader>
          <OpenMenuIcon /> <AvatarComponent type="outline" />
        </SidebarHeader>

        <Search />

        <Chats />
      </TopSidebarWrapper>

      <SidebarFooter>
        <UserSettings />
        <SignOut />
        <NewChat />
      </SidebarFooter>
    </Container>
  )
}

export default Sidebar
