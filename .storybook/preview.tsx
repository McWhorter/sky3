import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { config, Provider } from '../src/lib';
import { YStack } from 'tamagui';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    Story => (
      <Provider config={config}>
        <YStack padding="$4">
          <Story />
        </YStack>
      </Provider>
    ),
  ],
};

export default preview;
