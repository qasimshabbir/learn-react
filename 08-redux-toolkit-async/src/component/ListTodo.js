import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_ACTIVE, FILTER_COMPLETED } from '../store/store';
import { deleteTask, toggleTask } from '../store/todoSlicer';

export const ListTodo = () => {

    //local state variable
    const [confirmDelete,setConfirmDelete] = useState(0);
    //getting action from Redux
    const dispatch = useDispatch();
    //getting tasks from Redux
    const tasks= useSelector(state => state.todoReducer.tasks)
    const filter= useSelector(state => state.todoReducer.filter)
    

    //method to apply filter
    const applyFilter = (tasks,filter) => {
        switch(filter){
            case FILTER_ACTIVE:
                return tasks.filter((task)=>!task.completed);
            case FILTER_COMPLETED:
                return tasks.filter((task)=>task.completed);
            default:
                return tasks;

        }
    }
    let todoList = applyFilter(tasks,filter);
   
    return (
        <ul>
            {todoList.map( (task)=>{
                return (
                    <li 
                        key={task.id}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                          }}>
                        
                        <input 
                            type="checkbox"  
                            name={task.id} 
                            checked = {task.completed}
                            onChange={()=>{dispatch(toggleTask(task.id))}}
                        />
                        &nbsp;
                        {task.title}
                        &nbsp;
                        {task.completed && confirmDelete!==task.id && <button onClick= {(e)=>setConfirmDelete(task.id)}>X</button>}
                        {confirmDelete===task.id && <button onClick= {(e)=>dispatch(deleteTask(task.id))}>Sure?</button>}
                        {confirmDelete===task.id && <button onClick= {(e)=>setConfirmDelete(false)}>Cancel</button>}
                        
                    </li>
                )
            })}
        </ul>
    )
}
