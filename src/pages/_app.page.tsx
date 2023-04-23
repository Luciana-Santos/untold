import ProtectedRoute from '@/components/ProtectedRoute'
import AuthContextProvider from '@/context/AuthContext'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

globalStyles()

const noAuthRequired = ['/', 'sign-in', 'sign-up']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}
