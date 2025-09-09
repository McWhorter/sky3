import { createShorthands, createTamagui, createTokens, isWeb } from '@tamagui/core';
import { createSystemFont, defaultConfig } from '@tamagui/config/v4';
// import { themes } from './themes';
import { baseThemes, childThemes } from './new-themes';

const skylightTokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    // ...defaultConfig.tokens.size,
    // Skylight size tokens (1-10 of the tamagui size tokens)
    $xs: 20, // 1
    $sm: 28, // 2
    $md: 36, // 3
    $lg: 44, // 4
    $true: 44,
    $xl: 52, // 5
    $2xl: 64, // 6
    $3xl: 74, // 7
    $4xl: 84, // 8
    $5xl: 94, // 9
    $6xl: 104, // 10
  },
  space: {
    // ...defaultConfig.tokens.space,
    // Calculated from size tokens using the `sizeToSpace` utility
    $xs: 8,
    $sm: 15,
    $md: 20,
    $true: 20,
    $lg: 30,
    $xl: 40,
    $2xl: 50,
    $3xl: 60,
    $4xl: 72,
    $5xl: 84,
    $6xl: 96,
  },
  radius: {
    ...defaultConfig.tokens.radius,
    // Skylight radius tokens (bespoke to skylight)
    // $xs: 2,
    // $sm: 4,
    // $md: 6,
    $true: 6,
    // $lg: 8,
    // $xl: 10,
    // $2xl: 12,
    // $3xl: 14,
    // $4xl: 16,
    // $5xl: 18,
    // $6xl: 20,
    // $full: 9999,
  },
});

const interFont = {
  family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
  weight: {
    4: '400',
    7: '700',
  },
  face: {
    400: { normal: 'Inter', italic: 'Inter-Italic' },
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
};

const skylightFonts = {
  heading: {
    ...createSystemFont({
      font: {
        // Skylight font size tokens (1-10 of the tamagui font size tokens)
        size: {
          $xs: 16, // 1
          $sm: 20, // 2
          $md: 24, // 3
          $lg: 28, // 4
          $xl: 32, // 5
          $2xl: 36, // 6
          $3xl: 40, // 7
          $4xl: 44, // 8
          $5xl: 48, // 9
          $6xl: 52, // 10
        },
      },
      sizeSize: n => n * 1.4,
    }),
    ...interFont,
  },
  body: {
    ...createSystemFont({
      font: {
        // Skylight font size tokens (1-10 of the tamagui font size tokens)
        size: {
          $xs: 11, // 1
          $sm: 12, // 2
          $md: 13, // 3
          $lg: 14, // 4
          $true: 14,
          $xl: 16, // 5
          $2xl: 18, // 6
          $3xl: 20, // 7
          $4xl: 23, // 8
          $5xl: 30, // 9
          $6xl: 46, // 10
        },
      },
      sizeSize: n => n * 1,
    }),
    ...interFont,
  },
};

const skylightThemes = {
  // ...defaultConfig.themes,
  // ...themes,
  ...baseThemes,
  ...childThemes,
};

const skylightShorthands = createShorthands({
  // // ...defaultConfig.shorthands,
  // // margins
  // $m: 'margin',
  // $mt: 'marginTop',
  // $mb: 'marginBottom',
  // $my: 'marginVertical',
  // $ml: 'marginLeft',
  // $mr: 'marginRight',
  // $mx: 'marginHorizontal',
  // // paddings
  // $p: 'padding',
  // $pt: 'paddingTop',
  // $pb: 'paddingBottom',
  // $py: 'paddingVertical',
  // $pl: 'paddingLeft',
  // $pr: 'paddingRight',
  // $px: 'paddingHorizontal',
});

// Create the main Tamagui configuration
const skylightConfig = createTamagui({
  ...defaultConfig,
  fonts: skylightFonts,
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
