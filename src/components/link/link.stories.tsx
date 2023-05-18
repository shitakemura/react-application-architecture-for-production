import { Meta, StoryObj } from '@storybook/react'

import { Link } from './link'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta<typeof Link>

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: '/',
    children: 'Click Me',
  },
}
