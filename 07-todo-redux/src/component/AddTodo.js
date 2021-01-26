import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/todoSlicer';

export const AddTodo = () => {
    
    //setup local state vars
    const [taskTitle,setTaskTitle] = useState("");
    const [error,setError] = useState(false);
    
    //getting action from Redux
    const dispatch = useDispatch();
    

    const submit = ()=>{
        if(taskTitle===""){
            setError(true);
            return false;
        }
        dispatch(add(taskTitle))
        setTaskTitle("");
        setError(false);
        
    }

    return (
        <div>
            <label>Task: 
            <input 
                type="text" 
                name="title"
                style= {{
                    backgroundColor: (error?'red':'white')
                }}
                onChange={(e)=>{setTaskTitle(e.target.value)}}
                value = {taskTitle}
                placeholder = "Type task here"
            />
            </label>
            <button onClick={()=>{submit()}}>Add Task</button>

        </div>
    )
}
