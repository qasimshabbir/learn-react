import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        filter: 0
    },
    reducers: {
        add: (state,action) => {
            state.tasks.push({
                id: state.tasks.length,
                title: action.payload,
                completed: false
            });
        },
        toggleTask: (state,action) => {
            const index = state.tasks.findIndex( todo => todo.id === action.payload);
            state.tasks[index].completed = !state.tasks[index].completed;
        },
        setFilter: (state,action)=>{
            state.filter = action.payload;
        }

    }
});


export const {add, toggleTask,setFilter} = todoSlice.actions;
export default todoSlice.reducer;
