import { useContext } from "react";
import CounterContext from "../context/CounterContext.js";

function Child() {
    const value = useContext(CounterContext);
    console. log(value);
    return (
      <div>
         The value is {value[0]}
            <button onClick = {()=>{value[1](value[0]++)}}>Increment</button>
       </div>
      
    );
  }
  
  export default Child;
  