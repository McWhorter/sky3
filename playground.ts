import fs from 'fs';
import { createThemes } from '@tamagui/theme-builder';

export const themes = createThemes({
  base: {
    palette: ['#fff', '#000'],
  },

  childrenThemes: {
    blue: {
      palette: ['#042F86', '#F1F8FC'],
      // palette: [
      //   '#001132',
      //   '#001948',
      //   '#072d78',
      //   '#1045ab',
      //   '#235ac6',
      //   '#2163e2',
      //   '#4278df',
      //   '#6191ec',
      //   '#bdd2fa',
      //   '#dfeaff',
      // ],
    },
    green: {
      palette: ['#14882C', '#F5FAF5'],
    },
    yellow: {
      palette: ['#9E822E', '#FEFBE6'],
    },
    red: {
      palette: ['#FC5350', '#FAF5F5'],
    },
  },
});

// write themes to a ts File if I run `NODE_ENV=node node builder.ts`
if (process.env.NODE_ENV === 'node') {
  fs.writeFileSync('themes.ts', `export const themes = ${JSON.stringify(themes, null, 2)};`);
}

// const themesBuilt = createThemeBuilder()
//   .addPalettes({
//     dark: ['#000', '#111', '#222', '#999', '#ccc', '#eee', '#fff'],
//     light: ['#fff', '#eee', '#ccc', '#999', '#222', '#111', '#000'],
//   })
//   .addTemplates({
//     base: {
//       background: 0,
//       color: -0,
//     },
//     subtle: {
//       background: 1,
//       color: -1,
//     },
//   })
//   .addThemes({
//     light: {
//       template: 'base',
//       palette: 'light',
//     },
//     dark: {
//       template: 'base',
//       palette: 'dark',
//     },
//   })
//   .addChildThemes({
//     info: {
//       template: 'subtle',
//     },
//     success: {
//       template: 'base',
//     },
//   });

// console.log(themesBuilt.build());

// =============================================================================
// Create space tokens from size tokens
// =============================================================================

// function sizeToSpace(v: number) {
//   if (v === 0) return 0;
//   if (v === 2) return 0.5;
//   if (v === 4) return 1;
//   if (v === 8) return 1.5;
//   if (v <= 16) return Math.round(v * 0.333);
//   return Math.floor(v * 0.7 - 12);
// }

// const sizes = {
//   $xs: 20, // 1
//   $sm: 28, // 2
//   $md: 36, // 3
//   $lg: 44, // 4
//   $xl: 52, // 5
//   $2xl: 64, // 6
//   $3xl: 74, // 7
//   $4xl: 84, // 8
//   $5xl: 94, // 9
//   $6xl: 104, // 10
// };

// const spaces = {};
// Object.entries(sizes).map(([size, value]) => {
//   spaces[size] = sizeToSpace(value);
// });
// console.log(spaces);
