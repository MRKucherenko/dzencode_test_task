import { configureStore } from '@reduxjs/toolkit';
import { ordersApi } from './api/ordersApi';
import { productsApi } from './api/productsApi';


export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ordersApi.middleware,
      productsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
