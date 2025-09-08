import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { config, Provider } from '../src/lib';
import { YStack } from 'tamagui';

const preview: Preview = {
  // tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <Provider config={config}>
        <YStack padding="$lg">
          <Story />
        </YStack>
      </Provider>
    ),
  ],
};

export default preview;
