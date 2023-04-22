import { Form } from '@/components/Form'
import { ButtonContainer, FormContainer } from '@/components/Form/styles'
import { Button } from '@/components/UI/Button'
import AuthBase from '@/templates/auth-base/auth-base'

const SignUp = () => {
  return (
    <AuthBase>
      <FormContainer>
        <Form.Field>
          <Form.Label>Username:</Form.Label>
          <Form.Input type="text" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Email:</Form.Label>
          <Form.Input type="email" />
          {/* <Form.ErrorMessage>Enter a valid email.</Form.ErrorMessage> */}
        </Form.Field>

        <Form.Field>
          <Form.Label>Password:</Form.Label>
          <Form.Input type="password" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Password confirmation:</Form.Label>
          <Form.Input type="password" />
        </Form.Field>

        <ButtonContainer>
          <Button type="normal">Sign Up</Button>
          <Button type="outline" as="a" href="/sign-in">
            Login
          </Button>
        </ButtonContainer>
      </FormContainer>
    </AuthBase>
  )
}

export default SignUp
