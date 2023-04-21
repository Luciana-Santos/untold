import Image from 'next/image'
import Link from 'next/link'
import {
  GearsContainer,
  LeftGear,
  Message,
  RightGear,
  Title,
  WipContainer,
  Wrapper,
} from './styles'

const Wip = () => {
  return (
    <Wrapper>
      <WipContainer>
        <Title>Em construção...</Title>

        <GearsContainer>
          <RightGear>
            <Image
              src="/images/right-gear.png"
              alt="Purple gear image roating clockwise."
              width={87}
              height={87}
            />
          </RightGear>
          <LeftGear>
            <Image
              src="/images/left-gear.png"
              alt="Purple gear image roating anticlockwise."
              width={87}
              height={87}
            />
          </LeftGear>
        </GearsContainer>
        <Message>
          Esta página está ainda em construção, mas você pode conferir{' '}
          <Link href="https://luciana.dev/">aqui</Link> outros projetos já
          concluídos.
        </Message>
      </WipContainer>
    </Wrapper>
  )
}

export default Wip
