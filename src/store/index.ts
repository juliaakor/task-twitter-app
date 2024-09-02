import { useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers, Reducer, Middleware, applyMiddleware, Dispatch } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import { testSaga } from '@store/saga';
import { themeReducer } from '@store/theme/themeReducers';
import { ThemeActionTypes } from '@store/theme/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const create = (reducers: Reducer<RootState & PersistPartial>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = create(persistedReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(testSaga);

export type AppDispatch = Dispatch<ThemeActionTypes>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export { store, persistor };
