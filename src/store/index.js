import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../features/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});