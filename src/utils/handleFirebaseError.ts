import { FirebaseError } from 'firebase/app'

export function handleFirebaseError(error: FirebaseError): string {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email address'
    case 'auth/user-disabled':
      return 'This user has been disabled'
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password'
    default:
      return 'An error occurred. Please try again later'
  }
}
