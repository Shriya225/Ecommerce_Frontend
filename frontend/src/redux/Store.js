import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';
import authReducer from './authSlice';
import cartTotalReducer from './cartTotalSlice'
import cartCountReducer from './cartCountSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartTotal: cartTotalReducer,
    cartCount: cartCountReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Optional: Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);