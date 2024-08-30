import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  lightColors,
  darkColors,
  size,
  spacing,
  radius,
} from './variables';

export const getTheme = (isThemelight = true) => ({
  colors: isThemelight ? lightColors : darkColors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  radius,
  size,
  spacing,
});
