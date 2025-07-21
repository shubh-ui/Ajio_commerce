import productReducer from './slices/productslice';  // Match the slice name here

import { configureStore } from '@reduxjs/toolkit';

// Configure the store
export const store = configureStore({
  reducer: {
    product: productReducer,  // Key 'product' matches slice name
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
