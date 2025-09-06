import { createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { tokens } from './tokens';
import { fonts } from './fonts';
import { themes } from './themes';

// Create the main Tamagui configuration
export const skylightConfig = createTamagui({
  // Use our custom tokens
  tokens,

  // Use our custom fonts
  fonts,

  // Use our custom themes
  themes,

  // Inherit other configurations from the base config
  media: config.media,
  animations: config.animations,
  shorthands: config.shorthands,

  // Custom settings
  settings: {
    // Enable theme switching
    shouldAddPrefersColorThemes: true,
  },
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
