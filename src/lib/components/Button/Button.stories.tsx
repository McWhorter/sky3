import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { XStack } from 'tamagui';

const mockFn = () => () => console.log('Button clicked');

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      toc: false,
      description: {
        component:
          'A versatile button component that works across web and React Native platforms. Built with Tamagui for consistent theming and responsive design.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'outlined'],
      description: 'Visual style variant of the button',
    },
    theme: {
      control: 'select',
      options: ['blue'],
      description: 'Theme of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables button while preserving theme colors',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button with reduced opacity',
    },
    onPress: {
      action: 'pressed',
      description: 'Function called when button is pressed',
    },
  },
  args: {
    theme: 'blue',
    size: 'md',
    children: 'Button',
    onPress: mockFn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: args => (
    <Button {...args}>
      <Button.Text>{args.children}</Button.Text>
    </Button>
  ),
};

export const Sizes: Story = {
  render: args => (
    <XStack gap="$4">
      <Button {...args} size="sm">
        <Button.Text>Small {args.children}</Button.Text>
      </Button>
      <Button {...args} size="md">
        <Button.Text>Medium {args.children}</Button.Text>
      </Button>
      <Button {...args} size="lg">
        <Button.Text>Large {args.children}</Button.Text>
      </Button>
    </XStack>
  ),
};

export const Loading: Story = {
  render: args => (
    <XStack gap="$4">
      <Button {...args} size="sm">
        <Button.Text>Small {args.children}</Button.Text>
      </Button>
      <Button {...args} size="md">
        <Button.Text>Medium {args.children}</Button.Text>
      </Button>
      <Button {...args} size="lg">
        <Button.Text>Large {args.children}</Button.Text>
      </Button>
    </XStack>
  ),
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const LoadingOutlined: Story = {
  render: args => (
    <XStack gap="$4">
      <Button {...args} size="sm">
        <Button.Text>Small {args.children}</Button.Text>
      </Button>
      <Button {...args} size="md">
        <Button.Text>Medium {args.children}</Button.Text>
      </Button>
      <Button {...args} size="lg">
        <Button.Text>Large {args.children}</Button.Text>
      </Button>
    </XStack>
  ),
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  render: args => (
    <XStack gap="$4">
      <Button {...args} size="sm">
        <Button.Text>Small {args.children}</Button.Text>
      </Button>
      <Button {...args} size="md">
        <Button.Text>Medium {args.children}</Button.Text>
      </Button>
      <Button {...args} size="lg">
        <Button.Text>Large {args.children}</Button.Text>
      </Button>
    </XStack>
  ),
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const DisabledOutlined: Story = {
  render: args => (
    <XStack gap="$4">
      <Button {...args} size="sm">
        <Button.Text>Small {args.children}</Button.Text>
      </Button>
      <Button {...args} size="md">
        <Button.Text>Medium {args.children}</Button.Text>
      </Button>
      <Button {...args} size="lg">
        <Button.Text>Large {args.children}</Button.Text>
      </Button>
    </XStack>
  ),
  args: {
    disabled: true,
    variant: 'outlined',
    children: 'Disabled',
  },
};
