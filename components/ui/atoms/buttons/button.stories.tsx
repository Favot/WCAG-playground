import { Text } from '@/components/ui/atoms/text/text'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
  },
}

const Template: StoryObj<typeof Button> = {
  render: (args) => {
    const children =
      typeof args.children === 'string' || typeof args.children === 'number' ? (
        <Text>{args.children}</Text>
      ) : (
        args.children ?? <Text>Button</Text>
      )

    return <Button {...args}>{children}</Button>
  },
}

export default meta

export const Default = {
  ...Template,
  args: {},
}

export const Ghost = {
  ...Template,
  args: {
    variant: 'ghost',
    children: 'Ghost button',
  },
}
