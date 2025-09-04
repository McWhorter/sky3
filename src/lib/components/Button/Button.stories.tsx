import type { Meta, StoryObj } from '@storybook/react';
// Mock function for Storybook actions
const mockFn = () => () => console.log('Button clicked');
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component that works across web and React Native platforms. Built with Tamagui for consistent theming and responsive design.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
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
    title: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline Button',
    variant: 'outline',
  },
};

// Size stories
export const Small: Story = {
  args: {
    title: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    title: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Button',
    size: 'large',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button title="Primary" variant="primary" onPress={mockFn()} />
      <Button title="Secondary" variant="secondary" onPress={mockFn()} />
      <Button title="Outline" variant="outline" onPress={mockFn()} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button title="Small" size="small" onPress={mockFn()} />
      <Button title="Medium" size="medium" onPress={mockFn()} />
      <Button title="Large" size="large" onPress={mockFn()} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.',
      },
    },
  },
};
