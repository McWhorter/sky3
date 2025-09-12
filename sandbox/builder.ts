import { createThemeBuilder, defaultTemplates } from '@tamagui/theme-builder';

const blue = {
  text: '#fff',
  default: '#042f86',
  hovered: '#39569d',
  focused: '#39569d',
  pressed: '#072d78',
  outlineColor: 'hsla(220, 94%, 27%, 0.4)',
  altBackgroundHover: 'hsla(220, 94%, 27%, 0.08)',
  altBackgroundFocus: 'hsla(220, 94%, 27%, 0)',
  altBackgroundPress: 'hsla(220, 94%, 27%, 0.15)',
};

const cyan = {
  text: '#fff',
  default: '#3d77a6',
  hovered: '#5b92b8',
  focused: '#3d77a6',
  pressed: '#35658b',
  outlineColor: 'hsla(207, 46%, 45%, 0.4)',
  altBackgroundHover: 'hsla(207, 46%, 45%, 0.08)',
  altBackgroundFocus: 'hsla(207, 46%, 45%, 0)',
  altBackgroundPress: 'hsla(207, 46%, 45%, 0.15)',
};

const black = {
  text: '#fff',
  default: '#1e2d48',
  hovered: '#3a475e',
  focused: '#1e2d48',
  pressed: '#4d586c',
  outlineColor: 'hsla(219, 41%, 20%, 0.4)',
  altBackgroundHover: 'hsla(219, 41%, 20%, 0.08)',
  altBackgroundFocus: 'hsla(219, 41%, 20%, 0)',
  altBackgroundPress: 'hsla(219, 41%, 20%, 0.15)',
};

const gray = {
  text: '#042f86',
  default: '#c6c8cb',
  hovered: '#bdbfc3',
  focused: '#c6c8cb',
  pressed: '#aaaeb5',
  outlineColor: 'hsla(216, 5%, 79%, 0.4)',
  altBackgroundHover: 'hsla(216, 5%, 79%, 0.08)',
  altBackgroundFocus: 'hsla(216, 5%, 79%, 0)',
  altBackgroundPress: 'hsla(216, 5%, 79%, 0.15)',
};

const red = {
  text: '#fff',
  default: '#f31c29',
  hovered: '#c30713',
  focused: '#f31c29',
  pressed: '#9c0711',
  outlineColor: 'hsla(356, 90%, 53%, 0.4)',
  altBackgroundHover: 'hsla(356, 90%, 53%, 0.08)',
  altBackgroundFocus: 'hsla(356, 90%, 53%, 0)',
  altBackgroundPress: 'hsla(356, 90%, 53%, 0.15)',
};

const green = {
  text: '#fff',
  default: '#00aa44',
  hovered: '#008f39',
  focused: '#00aa44',
  pressed: '#0f7036',
  outlineColor: 'hsla(144, 100%, 33%, 0.4)',
  altBackgroundHover: 'hsla(144, 100%, 33%, 0.08)',
  altBackgroundFocus: 'hsla(144, 100%, 33%, 0)',
  altBackgroundPress: 'hsla(144, 100%, 33%, 0.15)',
};

const getPalette = (palette: typeof blue) => {
  return [
    '#000',
    palette.pressed, //1
    palette.default, //2
    palette.focused, //3
    palette.hovered, //4
    palette.outlineColor, //5
    palette.altBackgroundHover, //6
    palette.altBackgroundFocus, //7
    palette.altBackgroundPress, //8
    palette.text, //9
  ];
};

const themesBuilder = createThemeBuilder()
  .addPalettes({
    dark: ['#000', '#fff'],
    light: ['#fff', '#000'],
    blue: getPalette(blue),
    cyan: getPalette(cyan),
    black: getPalette(black),
    gray: getPalette(gray),
    red: getPalette(red),
    green: getPalette(green),
  })
  .addTemplates({
    ...defaultTemplates,
    button: {
      background: 2,
      backgroundHover: 4,
      backgroundFocus: 3,
      backgroundPress: 1,

      borderColor: 2,
      borderColorHover: 4,
      borderColorFocus: 3,
      borderColorPress: 1,

      outlineColor: 5,
      altBackgroundHover: 6,
      altBackgroundFocus: 7,
      altBackgroundPress: 8,

      color: 9,
    },
    tag: {
      background: 2,
      color: 9,
    },
  })
  .addThemes({
    dark: {
      template: 'base',
      palette: 'dark',
    },
    light: {
      template: 'base',
      palette: 'light',
    },
  })
  .addChildThemes({
    cyan_Button: {
      template: 'button',
      palette: 'cyan',
    },
    // blue_Button: {
    //   template: 'button',
    //   palette: 'blue',
    // },
    // black_Button: {
    //   template: 'button',
    //   palette: 'black',
    // },
    // gray_Button: {
    //   template: 'button',
    //   palette: 'gray',
    // },
    // red_Button: {
    //   template: 'button',
    //   palette: 'red',
    // },
    // green_Button: {
    //   template: 'button',
    //   palette: 'green',
    // },
  });

console.log(themesBuilder.build());
