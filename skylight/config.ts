import { createTamagui, createTokens } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';

const skylightTokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    ...defaultConfig.tokens.size,
    $sm: 24,
    $md: 32,
    $lg: 40,
  },
});

// Create the main Tamagui configuration
const skylightConfig = createTamagui({
  ...defaultConfig,

  tokens: skylightTokens,

  // not sure if we want this all just yet...
  shorthands: {},
});

// Export the config as default for compatibility
export { skylightConfig as config };

// Type the config for TypeScript
export type Conf = typeof skylightConfig;

// Declare the module for Tamagui (updated to use 'tamagui' instead of '@tamagui/core')
declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}
