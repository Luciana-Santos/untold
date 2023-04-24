import { Form } from '@/components/Form'
import {
  AuthMessageStyled,
  FormContainer,
  InternLink,
} from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import { useAuth } from '@/context/AuthContext'
import AuthBase from '@/templates/auth-base/auth-base'
import { handleFirebaseError } from '@/utils/handleFirebaseError'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Container,
  SuccessIcon,
  SuccessMessage,
  SucessMessageContainer,
  Title,
} from './styles'

const changePasswordSchema = z.object({
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
})

type ChangePasswordData = z.infer<typeof changePasswordSchema>

const PasswordReset = () => {
  const { passwordReset } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const changePasswordForm = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = changePasswordForm

  const handlePasswordChange = async (data: ChangePasswordData) => {
    console.log(data)

    try {
      await passwordReset(data.email)
      setSuccess(true)
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(handleFirebaseError(err))
      }
    }
  }

  const SuccessComponent = (
    <SucessMessageContainer>
      <SuccessIcon weight="fill" />
      <SuccessMessage>Check your e-mail!</SuccessMessage>
      <InternLink href="/sign-in">Back to sign in</InternLink>
    </SucessMessageContainer>
  )

  return (
    <AuthBase>
      {success ? (
        SuccessComponent
      ) : (
        <>
          <Title>Change your password</Title>

          <Container>
            <p>
              Enter your e-mail address below and we&#39;ll send you a link to
              reset your password.
            </p>

            <FormProvider {...changePasswordForm}>
              <FormContainer onSubmit={handleSubmit(handlePasswordChange)}>
                <Form.Field>
                  <Form.Label>
                    E-mail: <Form.Input type="email" name="email" />
                  </Form.Label>

                  <Form.ErrorMessage field="email" />
                </Form.Field>

                <Button type="normal" disabled={isSubmitting}>
                  Confirm
                </Button>
              </FormContainer>
            </FormProvider>
            {error && <AuthMessageStyled>{error}</AuthMessageStyled>}
          </Container>
        </>
      )}
    </AuthBase>
  )
}

export default PasswordReset
