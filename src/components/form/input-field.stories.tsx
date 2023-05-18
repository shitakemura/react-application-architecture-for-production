import { Meta, StoryObj } from '@storybook/react'
import { InputField } from './input-field'

export default {
  title: 'Components/Form/InputField',
  component: InputField,
} as Meta<typeof InputField>

type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    label: 'Name',
  },
}

export const WithError: Story = {
  args: {
    label: 'Name',
    error: {
      type: 'required',
      message: 'Name is required',
    },
  },
}
