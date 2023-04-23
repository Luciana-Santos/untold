import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/sign-in')
    }
  }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
