// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // if you have a baseApi; otherwise remove
import { testimonialsApi } from "./services/testimonials";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      testimonialsApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
