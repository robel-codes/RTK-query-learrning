import { configureStore } from '@reduxjs/toolkit';
import { dummyDataApi } from './services/dummyData';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    [dummyDataApi.reducerPath]: dummyDataApi.reducer,
  },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyDataApi.middleware),
});

setupListeners(store.dispatch);