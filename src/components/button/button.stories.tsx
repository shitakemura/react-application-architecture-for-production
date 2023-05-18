import { PlusSquareIcon } from '@chakra-ui/icons'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Click Me',
    icon: <PlusSquareIcon />,
  },
}
