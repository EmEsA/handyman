import { createStitches } from 'stitches-native';

export const {
  styled,
  css,
  theme,
  createTheme,
  useTheme,
  ThemeProvider,
  config,
} = createStitches({
  theme: {
    colors: {
      dividerColor: '#bdbdbd',
      primaryColor: '#00bfa5',
      disabledColor: '#bdbdbd',
      alertColor: '#ff1744',
      shadowColor: '#000',
      textLight: '#ffffff',
      menuColor: '#e9ebeb',
    },
  },
  media: {},
  utils: {},
  themeMap: {},
});
