import { createSlice } from "@reduxjs/toolkit";

const generateUniqueId = ()=>{
    return Math.floor(Math.random()*100000);
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        filter: 0
    },
    reducers: {
        add: (state,action) => {
            state.tasks.push({
                id: generateUniqueId(),
                title: action.payload,
                completed: false
            });
        },
        toggleTask: (state,action) => {
            //This action will mark action as complete and incomplete both.
            //depending on current state of task.completed
            
            //search the task index
            const index = state.tasks.findIndex( todo => todo.id === action.payload);
            //toggle the state of completed property
            state.tasks[index].completed = !state.tasks[index].completed;
        },
        setFilter: (state,action)=>{
            //set the filter value from action payload
            state.filter = action.payload;
        },
        deleteTask: (state,action) =>{
            //delete will setup array without given id in action payload.
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload);

        }
    }
});


export const {add, toggleTask,setFilter,deleteTask} = todoSlice.actions;
export default todoSlice.reducer;
