import theme from '../config/theme';

type ThemeT = typeof theme;

declare module 'styled-components' {
  type DefaultTheme = ThemeT;
}
