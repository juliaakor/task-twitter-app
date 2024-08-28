import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';

export const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <>App</>
    </ThemeProvider>
  )
}
