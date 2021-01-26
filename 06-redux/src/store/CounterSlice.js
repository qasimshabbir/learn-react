import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 5,
        user: {
            name: "Qasim",
            age: 23
        }
    },
    reducers: {
        increment: state => {
            state.number += 1
        },
        decrement: state => {
            state.number -= 1
        },
        incrementBy: (state,action) => {
            state.number +=  action.payload
        },
        updateUser: (state,action) => {
            state.user =  action.payload;
        }
    }
});


export const { increment, decrement, incrementBy, updateUser} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;