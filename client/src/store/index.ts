import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { walletsApi } from '../services';

const rootReducer = combineReducers({
  [walletsApi.reducerPath]: walletsApi.reducer,
});

export default () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(walletsApi.middleware),
  });
