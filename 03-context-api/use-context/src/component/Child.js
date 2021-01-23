import { useContext } from "react";
import CounterContext from "../context/CounterContext.js";
import Button from '@material-ui/core/Button';

function Child() {
    const value = useContext(CounterContext);
    console. log(value);
    return (
      <div>
         The value is {value[0]}
            <Button onClick = {()=>{value[1](value[0]++)}}>Increment</Button>
       </div>
      
    );
  }
  
  export default Child;
  