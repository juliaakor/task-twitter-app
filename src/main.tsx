import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeContext } from '@components/ThemeContext';
import { store } from '@store/index';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Provider>
  </StrictMode>
);
