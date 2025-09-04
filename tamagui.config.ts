import { config } from '@tamagui/config/v3'
import { createTamagui, createTokens } from 'tamagui'

// Define our custom design tokens
const tokens = createTokens({
  // Size tokens for consistent dimensions
  size: {
    // Numeric tokens (keep for compatibility)
    0: 0,
    0.25: 2,
    0.5: 4,
    0.75: 6,
    1: 8,
    1.5: 12,
    2: 16,
    2.5: 20,
    3: 24,
    3.5: 28,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
    10: 80,
    11: 88,
    12: 96,
    14: 112,
    16: 128,
    20: 160,
    24: 192,
    28: 224,
    32: 256,
    36: 288,
    40: 320,
    44: 352,
    48: 384,
    52: 416,
    56: 448,
    60: 480,
    64: 512,
    72: 576,
    80: 640,
    96: 768,

    // Semantic size tokens (more intuitive)
    xs: 16,     // Extra small
    sm: 24,     // Small
    md: 32,     // Medium
    true: 32,   // Default size (same as md)
    lg: 48,     // Large
    xl: 64,     // Extra large
    '2xl': 96,  // 2x Extra large
    '3xl': 128, // 3x Extra large
    '4xl': 192, // 4x Extra large
  },

  // Space tokens (includes negative values for margin adjustments)
  space: {
    // Numeric tokens (keep for compatibility)
    0: 0,
    0.25: 2,
    0.5: 4,
    0.75: 6,
    1: 8,
    1.5: 12,
    2: 16,
    2.5: 20,
    3: 24,
    3.5: 28,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
    10: 80,
    11: 88,
    12: 96,
    14: 112,
    16: 128,
    20: 160,
    24: 192,
    28: 224,
    32: 256,
    36: 288,
    40: 320,

    // Semantic space tokens
    xs: 4,      // Extra small spacing
    sm: 8,      // Small spacing
    md: 16,     // Medium spacing
    true: 16,   // Default spacing (same as md)
    lg: 24,     // Large spacing
    xl: 32,     // Extra large spacing
    '2xl': 48,  // 2x Extra large spacing
    '3xl': 64,  // 3x Extra large spacing
    '4xl': 96,  // 4x Extra large spacing

    // Negative values for margin adjustments
    '-0.25': -2,
    '-0.5': -4,
    '-0.75': -6,
    '-1': -8,
    '-1.5': -12,
    '-2': -16,
    '-2.5': -20,
    '-3': -24,
    '-3.5': -28,
    '-4': -32,
    '-5': -40,
    '-6': -48,
    '-7': -56,
    '-8': -64,
    '-xs': -4,
    '-sm': -8,
    '-md': -16,
    '-lg': -24,
    '-xl': -32,
  },

  // Border radius tokens
  radius: {
    // Numeric tokens (keep for compatibility)
    0: 0,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 10,
    6: 12,
    7: 14,
    8: 16,
    9: 18,
    10: 20,
    11: 22,
    12: 24,
    14: 28,
    16: 32,
    20: 40,
    24: 48,

    // Semantic radius tokens
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    '3xl': 32,
    full: 9999,
  },

  // Z-index tokens for layering
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },

  // Custom color palette (extends v3 defaults)
  color: {
    // Brand colors
    brand50: '#f0f9ff',
    brand100: '#e0f2fe',
    brand200: '#bae6fd',
    brand300: '#7dd3fc',
    brand400: '#38bdf8',
    brand500: '#0ea5e9',
    brand600: '#0284c7',
    brand700: '#0369a1',
    brand800: '#075985',
    brand900: '#0c4a6e',
    brand950: '#082f49',

    // Semantic colors
    success50: '#f0fdf4',
    success100: '#dcfce7',
    success200: '#bbf7d0',
    success300: '#86efac',
    success400: '#4ade80',
    success500: '#22c55e',
    success600: '#16a34a',
    success700: '#15803d',
    success800: '#166534',
    success900: '#14532d',

    warning50: '#fffbeb',
    warning100: '#fef3c7',
    warning200: '#fde68a',
    warning300: '#fcd34d',
    warning400: '#fbbf24',
    warning500: '#f59e0b',
    warning600: '#d97706',
    warning700: '#b45309',
    warning800: '#92400e',
    warning900: '#78350f',

    error50: '#fef2f2',
    error100: '#fee2e2',
    error200: '#fecaca',
    error300: '#fca5a5',
    error400: '#f87171',
    error500: '#ef4444',
    error600: '#dc2626',
    error700: '#b91c1c',
    error800: '#991b1b',
    error900: '#7f1d1d',

    // Neutral grays
    neutral50: '#fafafa',
    neutral100: '#f5f5f5',
    neutral200: '#e5e5e5',
    neutral300: '#d4d4d4',
    neutral400: '#a3a3a3',
    neutral500: '#737373',
    neutral600: '#525252',
    neutral700: '#404040',
    neutral800: '#262626',
    neutral900: '#171717',
    neutral950: '#0a0a0a',
  },
})

// Create custom themes extending v3 defaults
const themes = {
  light: {
    // Background colors
    background: tokens.color.neutral50,
    backgroundHover: tokens.color.neutral100,
    backgroundPress: tokens.color.neutral200,
    backgroundFocus: tokens.color.neutral100,
    backgroundStrong: tokens.color.neutral900,
    backgroundTransparent: 'transparent',

    // Foreground colors
    color: tokens.color.neutral900,
    colorHover: tokens.color.neutral800,
    colorPress: tokens.color.neutral700,
    colorFocus: tokens.color.neutral800,
    colorTransparent: 'transparent',

    // Border colors
    borderColor: tokens.color.neutral200,
    borderColorHover: tokens.color.neutral300,
    borderColorFocus: tokens.color.brand500,
    borderColorPress: tokens.color.neutral400,

    // Shadow colors
    shadowColor: tokens.color.neutral900,
    shadowColorHover: tokens.color.neutral800,
    shadowColorPress: tokens.color.neutral700,
    shadowColorFocus: tokens.color.brand500,

    // Brand colors
    brand: tokens.color.brand500,
    brandHover: tokens.color.brand600,
    brandPress: tokens.color.brand700,
    brandFocus: tokens.color.brand500,

    // Semantic colors
    success: tokens.color.success500,
    successHover: tokens.color.success600,
    successPress: tokens.color.success700,

    warning: tokens.color.warning500,
    warningHover: tokens.color.warning600,
    warningPress: tokens.color.warning700,

    error: tokens.color.error500,
    errorHover: tokens.color.error600,
    errorPress: tokens.color.error700,
  },
  dark: {
    // Background colors
    background: tokens.color.neutral900,
    backgroundHover: tokens.color.neutral800,
    backgroundPress: tokens.color.neutral700,
    backgroundFocus: tokens.color.neutral800,
    backgroundStrong: tokens.color.neutral50,
    backgroundTransparent: 'transparent',

    // Foreground colors
    color: tokens.color.neutral50,
    colorHover: tokens.color.neutral100,
    colorPress: tokens.color.neutral200,
    colorFocus: tokens.color.neutral100,
    colorTransparent: 'transparent',

    // Border colors
    borderColor: tokens.color.neutral700,
    borderColorHover: tokens.color.neutral600,
    borderColorFocus: tokens.color.brand400,
    borderColorPress: tokens.color.neutral500,

    // Shadow colors
    shadowColor: tokens.color.neutral950,
    shadowColorHover: tokens.color.neutral900,
    shadowColorPress: tokens.color.neutral800,
    shadowColorFocus: tokens.color.brand400,

    // Brand colors
    brand: tokens.color.brand400,
    brandHover: tokens.color.brand300,
    brandPress: tokens.color.brand200,
    brandFocus: tokens.color.brand400,

    // Semantic colors
    success: tokens.color.success400,
    successHover: tokens.color.success300,
    successPress: tokens.color.success200,

    warning: tokens.color.warning400,
    warningHover: tokens.color.warning300,
    warningPress: tokens.color.warning200,

    error: tokens.color.error400,
    errorHover: tokens.color.error300,
    errorPress: tokens.color.error200,
  },
}

// Create the configuration extending v3 with our custom tokens and themes
const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    ...config.themes,
    ...themes,
  },
})

export default tamaguiConfig

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
