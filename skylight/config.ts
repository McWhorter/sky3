import { createShorthands, createTamagui, createTokens } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';
import { schemeThemes, componentThemes } from './themes';

const skylightTokens = createTokens({
  ...defaultConfig.tokens,
  radius: {
    ...defaultConfig.tokens.radius,
    $true: 6,
  },
});

const skylightThemes = {
  ...schemeThemes,
  ...componentThemes,
};

const skylightShorthands = createShorthands({});

// Create the main Tamagui configuration
const skylightConfig = createTamagui({
  ...defaultConfig,
  tokens: skylightTokens,
  themes: skylightThemes,
  shorthands: skylightShorthands,
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
