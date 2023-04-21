import Wip from '@/components/Wip/Wip'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Untold | Em construção...</title>

        <meta
          name="description"
          content="A web chat app that allows users to chat with each other in real-time."
          key="desc"
        />
        <meta
          name="keywords"
          content="web chat, real-time chat, messaging, chat app"
        />
        <meta name="author" content="Luciana Santos" />
      </Head>
      <Wip />
    </>
  )
}
