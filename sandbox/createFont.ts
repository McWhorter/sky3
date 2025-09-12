// import { createFont, isWeb } from 'tamagui';

import { createSystemFont } from '@tamagui/config/v4';
import { isWeb } from 'tamagui';

// const interFont = createFont({
//   family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
//   size: {
//     $xs: 16, // 1
//     $sm: 20, // 2
//     $md: 24, // 3
//     $lg: 28, // 4
//     $xl: 32, // 5
//     $2xl: 36, // 6
//     $3xl: 40, // 7
//     $4xl: 44, // 8
//     $5xl: 48, // 9
//     $6xl: 52, // 10
//   },
//   weight: {
//     4: '300',
//     6: '600',
//     7: '700',
//   },

//   // because android handles fonts differently, you need to map the weight
//   // to the actual name of the font in the font-file
//   // you can get the name with `otfinfo`: otfinfo --family Inter.ttf
//   face: {
//     400: { normal: 'Inter', italic: 'Inter-Italic' },
//     500: { normal: 'InterMedium', italic: 'InterMedium-Italic' },
//     600: { normal: 'InterSemiBold', italic: 'InterSemiBold-Italic' },
//     700: { normal: 'InterBold', italic: 'InterBold-Italic' },
//   },
// });

export const interFont = {
  family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
  weight: {
    4: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  face: {
    400: { normal: 'Inter', italic: 'Inter-Italic' },
    500: { normal: 'InterMedium', italic: 'InterMedium-Italic' },
    600: { normal: 'InterSemiBold', italic: 'InterSemiBold-Italic' },
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
};

export const skylightFonts = {
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

console.log(skylightFonts);
