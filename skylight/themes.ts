import { createThemes, defaultTemplates, type Template } from '@tamagui/theme-builder';

const blue = {
  default: '#042F86',
  hover: '#425799',
  focus: '#042F86',
  pressed: '#081D59',
  loading: '#042F86',
  disabled: '#011335',
};

const buttonTemplate = {
  background: 1,
  backgroundHover: 2,
  backgroundPress: 3,
  backgroundFocus: 1,
  borderColor: 1,
  borderColorHover: 2,
  borderColorPress: 3,
  borderColorFocus: 1,
  color: -1,
  colorHover: -1,
  colorPress: -1,
  colorFocus: -1,
  colorTransparent: -1,
  placeholderColor: -2,
  shadowColor: 1,
  shadowColorHover: 2,
  shadowColorPress: 3,
  shadowColorFocus: 1,
} satisfies Template;

export const themes = createThemes({
  base: {
    palette: ['#fff', '#000'],
  },

  // templates: {
  //   ...defaultTemplates,
  //   button: buttonTemplate,
  // },

  // componentThemes: {
  //   Button: {
  //     template: 'button',
  //   },
  // },

  childrenThemes: {
    blue: {
      palette: ['#F1F8FC', '#042F86'],
    },
    green: {
      palette: ['#F5FAF5', '#14882C'],
    },
    yellow: {
      palette: ['#FEFBE6', '#9E822E'],
    },
    red: {
      palette: ['#FAF5F5', '#FC5350'],
    },
  },
});

console.log(themes);

// const bluePalette = [
//   '', // 1
//   blue.default, // 2
//   blue.hover, // 3
//   blue.pressed, // 4
//   blue.default, // 5
//   '', // 6
//   '', // 7
//   '', // 8
//   '', // 9
//   '', // 10
//   '', // 11
//   '', // 12
// ];

// const buttonColorTemplate = {
//   background: 2, // Uses palette index 2
//   backgroundHover: 3, // Uses palette index 3
//   backgroundPress: 4, // Uses palette index 4
//   backgroundFocus: 5, // Uses palette index 5
//   backgroundStrong: 1, // Uses palette index 1
//   backgroundTransparent: 0, // Uses palette index 0

//   color: -1, // Uses last palette item
//   colorHover: -2, // Uses second-to-last palette item
//   colorPress: -1, // Uses last palette item
//   colorFocus: -2, // Uses second-to-last palette item

//   borderColor: 5, // Uses palette index 5
//   borderColorHover: 6, // Uses palette index 6
//   borderColorFocus: 4, // Uses palette index 4
//   borderColorPress: 5, // Uses palette index 5
// };
