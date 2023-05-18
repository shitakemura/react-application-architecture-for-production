import { Meta, StoryObj } from '@storybook/react'

import { InfoCard } from './info-card'

export default {
  title: 'Components/InfoCard',
  component: InfoCard,
} as Meta<typeof InfoCard>

type Story = StoryObj<typeof InfoCard>

export const Default: Story = {
  args: {
    label: 'Full Name',
    value: 'John Doe',
  },
}
