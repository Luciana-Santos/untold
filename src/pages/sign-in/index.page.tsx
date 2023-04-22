import { Form } from '@/components/Form'
import { ButtonContainer, FormContainer } from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import AuthBase from '@/templates/auth-base/auth-base'
import { zodResolver } from '@hookform/resolvers/zod'
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
    .toLowerCase(),
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
  const accessUserForm = useForm<AccessUserData>({
    resolver: zodResolver(accessUserSchema),
  })

  const accessUser = (data: AccessUserData) => {
    console.log(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = accessUserForm

  return (
    <AuthBase>
      <FormProvider {...accessUserForm}>
        <FormContainer onSubmit={handleSubmit(accessUser)}>
          <Form.Field>
            <Form.Label>
              Email: <Form.Input type="email" name="email" />
            </Form.Label>

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label>
              Password: <Form.Input type="password" name="password" />
            </Form.Label>

            <Form.ErrorMessage field="password" />
          </Form.Field>
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
