import Sidebar from '@/components/Sidebar/Sidebar'
import { Container } from './styles'

type MainBaseProps = {
  children: React.ReactNode
}

const MainBase = ({ children }: MainBaseProps) => {
  return (
    <Container>
      <Sidebar /> {children}
    </Container>
  )
}

export default MainBase
