import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { router } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map(({ Component, path }) => (
          <Route Component={Component} key={path} path={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
