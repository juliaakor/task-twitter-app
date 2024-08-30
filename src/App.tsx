import { ThemeProvider } from 'styled-components';

import { getTheme, GlobalStyles } from '@styles/index';

export const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <div>App</div>
    </ThemeProvider>
  );
};
