import { configureStore } from "@reduxjs/toolkit";
import { drinksApi } from "./api/apiSlice";

export const store = configureStore({
    reducer:{
        [drinksApi.reducerPath]:drinksApi.reducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(drinksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
