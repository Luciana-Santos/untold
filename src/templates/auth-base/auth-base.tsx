import Logo from '@/components/Logo/Logo'
import { MainContainer, Wrapper } from './styles'

type AuthBaseProps = {
  children: React.ReactNode
}

const AuthBase = ({ children }: AuthBaseProps) => {
  return (
    <Wrapper>
      <MainContainer>
        <Logo />

        {children}
      </MainContainer>
    </Wrapper>
  )
}

export default AuthBase
