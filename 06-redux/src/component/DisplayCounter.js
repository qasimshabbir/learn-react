import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy} from './../store/CounterSlice'

export const DisplayCounter = () => {
    //local state variable
    const [value,setValue] = useState(0);
    //getting redux dispatch to call reducer action
    const dispatch = useDispatch();
    //getting redux State of counter
    const counter = useSelector( (state) => {
        return state.counterReducer.number;
    });
  
    return (
        <div>
            <div>
                <span>Counter : </span>{counter} times &nbsp;
                <button onClick={()=>dispatch(increment())}>+</button>&nbsp;
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="text" onChange = { (e) => {
                    setValue(e.target.value);
                }} />
                &nbsp;
                <button onClick={()=>dispatch(incrementBy(Number(value)))}>
                    Increment By
                </button>&nbsp;
            </div>    
      </div>
    )
}
