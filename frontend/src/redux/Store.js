import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';
import authReducer from './authSlice';
import cartTotalReducer from './cartTotalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartTotal: cartTotalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Optional: Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);