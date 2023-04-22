import Image from 'next/image'
import { Description, LogoIcon, LogoStyled } from './styles'

const Logo = () => {
  return (
    <LogoStyled>
      <LogoIcon>
        <Image
          src="/images/logo.svg"
          alt="Talk balloon with two dots."
          width={50}
          height={50}
        />
      </LogoIcon>

      <Description>
        <h3>Untold</h3> <span>A real time web chat</span>
      </Description>
    </LogoStyled>
  )
}

export default Logo
