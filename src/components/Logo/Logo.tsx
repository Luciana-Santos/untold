import Image from 'next/image'
import { Description, LogoIcon, LogoStyled } from './styles'

const Logo = () => {
  return (
    <LogoStyled>
      <LogoIcon>
        <Image
          src="/images/logo.svg"
          alt="Talk balloon with two dots."
          width={25}
          height={25}
        />
      </LogoIcon>

      <Description>
        <h3>Untold</h3> <span>A real time web chat</span>
      </Description>
    </LogoStyled>
  )
}

export default Logo
