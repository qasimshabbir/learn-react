import { useContext, useReducer } from "react";
import CounterReducer from '../context/CounterReducer.js';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from "@material-ui/core";

function Child2() {
    const [value,dispatch] = useReducer(CounterReducer,0);
    console.log(value);
    console.log(dispatch);
    return (
      <div>
         The value is {value}
         <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button  onClick = {()=> dispatch('INCREMENT') }>Increment</Button>
            <Button  onClick = {()=> dispatch('DECREMENT') }>Decrement</Button>
         </ButtonGroup>
            
       </div>
      
    );
  }
  
  export default Child2;
  