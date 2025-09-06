import { createTokens } from 'tamagui';

export const tokens = createTokens({
  // width, height, minWidth, minHeight, maxWidth, maxHeight
  size: {
    // Button heights and component sizes
    sm: 32,
    md: 40,
    true: 40,
    lg: 48,
    // Small measurements
    // $1: 14,
    // $2: 16,
    // $3: 18,
    // $4: 20,
    // $5: 24,
  },

  // fontSize
  fontSize: {
    sm: 14,
    md: 16,
    true: 16,
    lg: 18,
    xl: 20,
    // $1: 12,
    // $2: 14,
    // $3: 16,
    // $4: 18,
    // $5: 20,
    // $6: 24,
  },

  // Basic color tokens - let themes.ts handle the color scales
  color: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
  },

  // borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius
  radius: {
    none: 0,
    sm: 2,
    true: 2,
    md: 4,
    lg: 6,
    full: 999,
  },

  // zIndex
  zIndex: {
    $0: 0,
    true: 0,
    $1: 1,
    $2: 2,
    $3: 3,
    $4: 4,
    $5: 5,
    $6: 6,
    $7: 7,
    $8: 8,
    $9: 9,
    $10: 10,
  },

  // spacing for padding, margin, gap
  space: {
    sm: 4,
    true: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
});
