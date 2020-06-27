import "./index.css"; 
import React, { useState }  from 'react';
import ReactDom from 'react-dom';


function Room(){
    const [isLit, setLit] = useState(false);
    
    const [temp,setTemp] = useState(22);

    //const brightness = isLit?'lit':'dark';
    return(
        <div>
        <div className={`room ${isLit? "lit":"dark"}`}>the room is {isLit? "lit":"dark"}</div>
        <br />
        
        <div className={`room`}>Room Temprature is: {temp}</div>
        <button onClick={()=>setTemp(temp+1)}>+</button>
        <button onClick={()=>setTemp(temp-1)}>-</button>
        <br />
        <button onClick={()=>setLit(!isLit)} >Flip</button>
        <button onClick={()=>setLit(true)}>On</button>
        <button onClick={()=>setLit(false)}>Off</button>
        </div>
        
    );
}

ReactDom.render(<Room />, document.getElementById('root'));