import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";


export const store = configureStore({
    reducer: {
        todoReducer : todoReducer
    }
})
export const FILTER_ALL = 0;
export const FILTER_ACTIVE = 1;
export const FILTER_COMPLETED = 2;

//console.log("Todo Reducer",todoReducer);