import DashboardCreateJobPage from '@/pages/dashboard/jobs/create'
import {
  appRender,
  screen,
  userEvent,
  waitFor,
  act,
} from '@/testing/test-utils'

const user = userEvent.setup()

const router = {
  push: jest.fn(),
}

jest.mock('next/router', () => ({
  useRouter: () => router,
}))

const jobData = {
  position: 'Software Engineer',
  department: 'Engineering',
  location: 'London',
  info: 'Lorem Ipsum',
}

describe('Dashboard Create Job Pages', () => {
  test('should create a new job', async () => {
    appRender(<DashboardCreateJobPage />)

    const positionInput = screen.getByRole('textbox', { name: /position/i })
    const departmentInput = screen.getByRole('textbox', { name: /department/i })
    const locationInput = screen.getByRole('textbox', { name: /location/i })
    const infoInput = screen.getByRole('textbox', { name: /info/i })

    const submitButton = screen.getByRole('button', { name: /create/i })

    await user.type(positionInput, jobData.position)
    await user.type(departmentInput, jobData.department)
    await user.type(locationInput, jobData.location)
    await user.type(infoInput, jobData.info)

    await user.click(submitButton)

    await waitFor(() =>
      expect(screen.getByText(/job created!/i)).toBeInTheDocument()
    )
  })
})
