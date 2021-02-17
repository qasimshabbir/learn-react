import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";

export const store = configureStore({
    reducer: {
        appReducer : appReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['web3','contract'],
      },
    }),
})

console.log("App Reducer",appReducer);