import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

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
      options: [undefined, 'blue', 'green', 'yellow', 'red'],
      description: 'Theme of the button',
    },
    size: {
      control: 'select',
      options: ['$sm', '$md', '$lg', '$xl', '$2xl', '$3xl', '$4xl', '$5xl', '$6xl'],
      description: 'Size of the button',
    },
    onPress: {
      action: 'pressed',
      description: 'Function called when button is pressed',
    },
  },
  args: {
    onPress: mockFn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    size: '$xl',
    theme: 'blue',
    children: 'Button',
  },
};
