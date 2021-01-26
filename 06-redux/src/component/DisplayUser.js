import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/CounterSlice';

export const DisplayUser = () => {
     //local state variable
  
    const [userName,setUserName] = useState("");
    const [userAge,setUserAge] = useState(0);
    
    
    //getting redux dispatch to call reducer action
    const dispatch = useDispatch();
    
    //getting redux State of User Name
    const user = useSelector( (state) => {
        return state.counterReducer.user;
    });
    
    return (
        <div>
      <span>Welcome </span>{user.name}  &nbsp;<br />
      <span>You are </span>{user.age}  &nbsp;old

      <br />
      Name: &nbsp;
      <input type="text" onChange = { (e) => {
          setUserName(e.target.value);
        }} /> 
        <br />
      Age: &nbsp;
      <input type="text" onChange = { (e) => {
        setUserAge(e.target.value);
      }} />
      <br />
        &nbsp;
      <button onClick={()=>dispatch(updateUser({
          name: userName,
          age: userAge
          }
      ))}>
        Update User
      </button>&nbsp;
      
    </div>
    
    )
}
