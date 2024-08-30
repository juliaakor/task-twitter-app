import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@store/index';
import { selectIsLightMode } from '@store/theme';
import { getTheme, GlobalStyles } from '@styles/index';

import { ThemeProviderProps } from './types';

export const ThemeContext = ({ children }: ThemeProviderProps) => {
  const isLightMode = useAppSelector(selectIsLightMode);

  return (
    <ThemeProvider theme={getTheme(isLightMode)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
