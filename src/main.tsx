import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeContext } from '@components/index';
import { persistor, store } from '@store/index';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext>
          <App />
        </ThemeContext>
      </PersistGate>
    </Provider>
  </StrictMode>
);
