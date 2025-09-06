import { createFont } from 'tamagui';

export const fonts = createFont({
  // family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
  size: {
    sm: 12,
    md: 16,
    lg: 20,
  },
  // lineHeight: {
  //   1: 17,
  //   2: 22,
  //   3: 25,
  // },
  // weight: {
  //   4: '300',
  //   6: '600',
  // },
  // letterSpacing: {
  //   4: 0,
  //   8: -1,
  // },

  // because android handles fonts differently, you need to map the weight
  // to the actual name of the font in the font-file
  // you can get the name with `otfinfo`: otfinfo --family Inter.ttf
  // face: {
  //   400: { normal: 'Inter', italic: 'Inter-Italic' },
  //   500: { normal: 'InterBold', italic: 'InterBold-Italic' },
  // },
});
