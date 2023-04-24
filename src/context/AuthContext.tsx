import { auth } from '@/libs/firebase'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
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
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  signUserOut: () => Promise<void>
  passwordReset: (email: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

type ChildrenProps = {
  children: React.ReactNode
}

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null)
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
        setUser(null)
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
    setUser(null)
    await signOut(auth)
  }

  const passwordReset = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, signUserOut, passwordReset }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)
