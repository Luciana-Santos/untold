import { Form } from '@/components/Form'
import { ButtonContainer, FormContainer } from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import AuthBase from '@/templates/auth-base/auth-base'

const SignIn = () => {
  return (
    <AuthBase>
      <FormContainer>
        <Form.Field>
          <Form.Label>Email:</Form.Label>
          <Form.Input type="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Password:</Form.Label>
          <Form.Input type="password" />
        </Form.Field>
        <ButtonContainer>
          <Button type="normal">Login</Button>
          <Button type="outline" as="a" href="/sign-up">
            Sign Up
          </Button>
        </ButtonContainer>
      </FormContainer>
    </AuthBase>
  )
}

export default SignIn
