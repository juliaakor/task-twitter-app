import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Loader } from './components';
import { router } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {router.map(({ Component, path }) => (
            <Route Component={Component} key={path} path={path} />
          ))}
        </Routes>
        <Toaster />
      </Suspense>
    </BrowserRouter>
  );
};
