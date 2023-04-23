import { auth } from '@/libs/firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  uid: string
  email: string | undefined
  displayName?: string | undefined
}

interface AuthContextProps {
  user: User | undefined
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string) => Promise<any>
  signUserOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

type ChildrenProps = {
  children: React.ReactNode
}

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email ?? undefined,
          displayName: user.displayName ?? undefined,
        })
      } else {
        setUser(undefined)
      }
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUserOut = async () => {
    setUser(undefined)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signUserOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)
