import { Button } from '@/components/UI/Button'
import { useAuth } from '@/context/AuthContext'
import MainBase from '@/templates/main-base/main-base'
import { useRouter } from 'next/router'

export default function Home() {
  const { user, signUserOut } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push('/sign-in')
    return
  }

  const handleUserSignOut = () => {
    signUserOut()
  }

  return (
    <MainBase>
      <main>
        <h1>Untold</h1>
        <Button onClick={handleUserSignOut} type="normal">
          Sign Out
        </Button>
      </main>
    </MainBase>
  )
}
