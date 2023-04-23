import { Form } from '@/components/Form'
import { ButtonContainer, FormContainer } from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import { useAuth } from '@/context/AuthContext'
import AuthBase from '@/templates/auth-base/auth-base'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const createUserSchema = z
  .object({
    username: z
      .string()
      .nonempty({
        message: 'Username is required.',
      })
      .min(3)
      .max(20),
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
    passwordConfirm: z
      .string()
      .nonempty({
        message: 'Password confirmation is required.',
      })
      .min(6, {
        message: 'Password must be at least 6 characters long.',
      }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match.',
  })

type CreateUserData = z.infer<typeof createUserSchema>

const SignUp = () => {
  const { user, signUp } = useAuth()
  const router = useRouter()

  console.log(user)

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const handleCreateUser = async (data: CreateUserData) => {
    console.log(data)

    try {
      await signUp(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createUserForm

  return (
    <AuthBase>
      <FormProvider {...createUserForm}>
        <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
          <Form.Field>
            <Form.Label>
              Username: <Form.Input type="text" name="username" />
            </Form.Label>

            <Form.ErrorMessage field="username" />
          </Form.Field>

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

          <Form.Field>
            <Form.Label>
              Password confirmation:{' '}
              <Form.Input type="password" name="passwordConfirm" />
            </Form.Label>

            <Form.ErrorMessage field="passwordConfirm" />
          </Form.Field>

          <ButtonContainer>
            <Button type="normal" disabled={isSubmitting}>
              Sign Up
            </Button>
            <Button type="outline" as="a" href="/sign-in">
              Login
            </Button>
          </ButtonContainer>
        </FormContainer>
      </FormProvider>
    </AuthBase>
  )
}

export default SignUp
