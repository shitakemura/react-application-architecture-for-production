import LoginPage from '@/pages/auth/login'
import { appRender, screen, userEvent, waitFor } from '@/testing/test-utils'

const user = userEvent.setup()

const router = {
  replace: jest.fn(),
  query: {},
}

jest.mock('next/router', () => ({
  useRouter: () => router,
}))

describe('Login Page', () => {
  test('should login the user into the dashboard', async () => {
    appRender(<LoginPage />)

    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /log in/i })

    const credentials = {
      email: 'user1@test.com',
      password: 'password',
    }

    await user.type(emailInput, credentials.email)
    await user.type(passwordInput, credentials.password)

    await user.click(submitButton)

    await waitFor(() =>
      expect(router.replace).toHaveBeenCalledWith('/dashboard/jobs')
    )
  })
})
