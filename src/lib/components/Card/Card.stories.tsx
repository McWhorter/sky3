import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';
import { Text } from 'tamagui';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card container component with elevation and customizable styling. Perfect for grouping related content with consistent visual hierarchy.',
      },
    },
  },
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Shadow elevation level (1-4)',
    },
    padding: {
      control: 'text',
      description: 'Inner padding using Tamagui tokens (e.g., "$4")',
    },
    margin: {
      control: 'number',
      description: 'Outer margin',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius using Tamagui tokens',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    elevation: 2,
    children: (
      <Text color="$color">
        This is a default card with some sample content to demonstrate the component.
      </Text>
    ),
  },
};

// Elevation stories
export const LowElevation: Story = {
  args: {
    elevation: 1,
    children: (
      <div>
        <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
          Low Elevation
        </Text>
        <Text color="$color">
          A subtle card with minimal shadow for secondary content.
        </Text>
      </div>
    ),
  },
};

export const MediumElevation: Story = {
  args: {
    elevation: 2,
    children: (
      <div>
        <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
          Medium Elevation
        </Text>
        <Text color="$color">
          Standard elevation for most card use cases.
        </Text>
      </div>
    ),
  },
};

export const HighElevation: Story = {
  args: {
    elevation: 3,
    children: (
      <div>
        <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
          High Elevation
        </Text>
        <Text color="$color">
          Prominent card for important content or modals.
        </Text>
      </div>
    ),
  },
};

export const MaxElevation: Story = {
  args: {
    elevation: 4,
    children: (
      <div>
        <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
          Maximum Elevation
        </Text>
        <Text color="$color">
          Highest elevation for critical alerts or overlays.
        </Text>
      </div>
    ),
  },
};

// Content examples
export const WithButton: Story = {
  args: {
    elevation: 2,
    children: (
      <div>
        <Text fontSize="$6" fontWeight="600" color="$color" marginBottom="$2">
          Card with Action
        </Text>
        <Text color="$color" marginBottom="$4">
          This card contains interactive elements to demonstrate how components work together.
        </Text>
        <Button title="Take Action" variant="primary" onPress={() => console.log('Card button clicked')} />
      </div>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    elevation: 3,
    padding: '$6',
    backgroundColor: '#f0f9ff',
    borderRadius: '$6',
    children: (
      <div>
        <Text fontSize="$6" fontWeight="600" color="$blue10" marginBottom="$2">
          Custom Styled Card
        </Text>
        <Text color="$blue9" marginBottom="$3">
          This card demonstrates custom background color, padding, and border radius.
        </Text>
        <Button title="Learn More" variant="outline" onPress={() => console.log('Custom card clicked')} />
      </div>
    ),
  },
};

// Showcase all elevations
export const AllElevations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
      {[1, 2, 3, 4].map((elevation) => (
        <Card key={elevation} elevation={elevation as 1 | 2 | 3 | 4} padding="$4">
          <Text fontSize="$4" fontWeight="600" color="$color" marginBottom="$2">
            Elevation {elevation}
          </Text>
          <Text color="$color" fontSize="$3">
            Shadow depth level {elevation}
          </Text>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All elevation levels displayed together for comparison.',
      },
    },
  },
};
