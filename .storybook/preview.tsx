import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { TamaguiProvider } from '../src/lib'
import { YStack } from 'tamagui'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <TamaguiProvider>
        <YStack padding="$4">
          <Story />
        </YStack>
      </TamaguiProvider>
    ),
  ],
};

export default preview;