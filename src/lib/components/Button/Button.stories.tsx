import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonSizeVariants, type ButtonVariant } from './Button';
import { XStack, YStack, type ThemeName } from 'tamagui';

const mockFn = () => () => console.log('Button clicked');

const variants: ButtonVariant[] = ['filled', 'outlined', 'bare'];
const sizes: ButtonSizeVariants[] = ['sm', 'md', 'lg'];
const themes: ThemeName[] = ['blue', 'cyan', 'black', 'gray', 'red', 'green'];

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
      options: variants,
      description: 'Visual style variant of the button',
    },
    theme: {
      control: 'select',
      options: themes,
      description: 'Theme of the button',
    },
    size: {
      control: 'select',
      options: sizes,
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
    loading: false,
    disabled: false,
    children: 'Skylight v3',
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
    <XStack gap="$md" alignItems="center">
      {variants.map(variant => (
        <YStack gap="$md" alignItems="center" key={variant}>
          <Button {...args} size="sm" variant={variant}>
            <Button.Text>Small {variant} Button</Button.Text>
          </Button>
          <Button {...args} size="md" variant={variant}>
            <Button.Text>Medium {variant} Button</Button.Text>
          </Button>
          <Button {...args} size="lg" variant={variant}>
            <Button.Text>Large {variant} Button</Button.Text>
          </Button>
        </YStack>
      ))}
    </XStack>
  ),
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: args => (
    <XStack gap="$md" alignItems="center">
      {variants.map(variant => (
        <YStack gap="$md" alignItems="center" key={variant}>
          <Button {...args} size="sm" variant={variant}>
            <Button.Text>Small {variant} Button</Button.Text>
          </Button>
          <Button {...args} size="md" variant={variant}>
            <Button.Text>Medium {variant} Button</Button.Text>
          </Button>
          <Button {...args} size="lg" variant={variant}>
            <Button.Text>Large {variant} Button</Button.Text>
          </Button>
        </YStack>
      ))}
    </XStack>
  ),
  args: {
    children: 'Button',
  },
};

export const Loading: Story = {
  render: args => (
    <XStack gap="$md" alignItems="center">
      {variants.map(variant => (
        <YStack gap="$md" alignItems="center" key={variant}>
          <Button {...args} size="sm" variant={variant}>
            <Button.Text>{args.children}</Button.Text>
          </Button>
          <Button {...args} size="md" variant={variant}>
            <Button.Text>{args.children}</Button.Text>
          </Button>
          <Button {...args} size="lg" variant={variant}>
            <Button.Text>{args.children}</Button.Text>
          </Button>
        </YStack>
      ))}
    </XStack>
  ),
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  render: args => (
    <XStack gap="$md" alignItems="center">
      {variants.map(variant => (
        <YStack gap="$md" alignItems="center" key={variant}>
          <Button {...args} size="sm" variant={variant}>
            <Button.Text>Small {args.children} Button</Button.Text>
          </Button>
          <Button {...args} size="md" variant={variant}>
            <Button.Text>Medium {args.children} Button</Button.Text>
          </Button>
          <Button {...args} size="lg" variant={variant}>
            <Button.Text>Large {args.children} Button</Button.Text>
          </Button>
        </YStack>
      ))}
    </XStack>
  ),
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
