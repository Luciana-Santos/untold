import { Form } from '@/components/Form'
import {
  ButtonContainer,
  FormContainer,
  InternLink,
} from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import { useAuth } from '@/context/AuthContext'
import AuthBase from '@/templates/auth-base/auth-base'
import { handleFirebaseError } from '@/utils/handleFirebaseError'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const accessUserSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'Email is required.',
    })
    .email({
      message: 'Invalid email format.',
    })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .nonempty({
      message: 'Password is required.',
    })
    .min(6, {
      message: 'Password must be at least 6 characters long.',
    }),
})

type AccessUserData = z.infer<typeof accessUserSchema>

const SignIn = () => {
  const { signIn } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const accessUserForm = useForm<AccessUserData>({
    resolver: zodResolver(accessUserSchema),
  })

  const handleUserAcess = async (data: AccessUserData) => {
    console.log(data)

    try {
      await signIn(data.email, data.password)
      router.push('/')
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(handleFirebaseError(err))
      }
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = accessUserForm

  return (
    <AuthBase>
      <FormProvider {...accessUserForm}>
        <FormContainer onSubmit={handleSubmit(handleUserAcess)}>
          <Form.Field>
            <Form.Label>
              E-mail: <Form.Input type="email" name="email" />
            </Form.Label>

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label>
              Password: <Form.Input type="password" name="password" />
            </Form.Label>

            <Form.ErrorMessage field="password" />
          </Form.Field>

          <InternLink href="/password-reset">Forgot password?</InternLink>

          <ButtonContainer>
            <Button type="normal" disabled={isSubmitting}>
              Login
            </Button>
            <Button type="outline" as="a" href="/sign-up">
              Sign Up
            </Button>
          </ButtonContainer>
        </FormContainer>
      </FormProvider>
    </AuthBase>
  )
}

export default SignIn
