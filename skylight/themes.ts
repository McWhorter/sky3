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
