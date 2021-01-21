import { useContext, useReducer } from "react";
import CounterReducer from '../context/CounterReducer.js';

function Child2() {
    const [value,dispatch] = useReducer(CounterReducer,0);
    console.log(value);
    console.log(dispatch);
    return (
      <div>
         The value is {value}
            <button onClick = {()=> dispatch('INCREMENT') }>Increment</button>
            <button onClick = {()=> dispatch('DECREMENT') }>Decrement</button>
       </div>
      
    );
  }
  
  export default Child2;
  