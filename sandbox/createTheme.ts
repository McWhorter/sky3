import { createThemes } from '@tamagui/config/v4';

const bluePalette = [
  'transparent',
  '#fbfdff',
  '#f5faff',
  '#edf6ff',
  '#e1f0ff',
  '#cee7fe',
  '#b7d9f8',
  '#96c7f2',
  '#5eb0ef',
  '#0090ff',
  '#0081f1',
  '#006adc',
  '#00254d',
];

const colorTemplate = {
  background: 0,
  color: 12,
};

const blue_theme = createThemes({
  base: {
    palette: bluePalette,
  }
  base: {
    palette: bluePalette,
    template: colorTemplate,
  },
  childrenThemes: {
});

// const red_theme = createTheme(redPalette, colorTemplate)

console.log(blue_theme);
