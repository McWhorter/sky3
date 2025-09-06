import { createTamagui } from 'tamagui';
import { themes } from './themes';
import { tokens } from './tokens';
import { fonts } from './fonts';

export const config = createTamagui({
  fonts: {
    heading: fonts,
    body: fonts,
  },

  // tokens work like CSS Variables (and compile to them on the web)
  // accessible from anywhere, never changing dynamically:
  tokens,

  // themes are like CSS Variables that you can change anywhere in the tree
  // you use <Theme name="light" /> to change the theme
  themes,

  // media query definitions can be used as style props or with the useMedia hook
  // but also are added to "group styles", which work like Container Queries from CSS
  // media: {
  //   sm: { maxWidth: 860 },
  //   gtSm: { minWidth: 860 + 1 },
  //   short: { maxHeight: 820 },
  //   hoverNone: { hover: 'none' },
  //   pointerCoarse: { pointer: 'coarse' },
  // },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal',
  },

  // there are more settings, explained below:
  // settings: {
  //   disableSSR: true,
  //   allowedStyleValues: 'somewhat-strict-web',
  // },
});

// now, make your types flow nicely back to your `tamagui` import:
type OurConfig = typeof config;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends OurConfig {}
}
