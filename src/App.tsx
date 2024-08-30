import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getTheme, GlobalStyles } from '@styles/index';

import { router } from './router';

export const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {router.map(({ Component, path }) => {
            return <Route Component={Component} key={path} path={path} />;
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
