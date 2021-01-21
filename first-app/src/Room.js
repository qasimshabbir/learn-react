import React, { useState } from 'react';
import './App.css';
import MediaCard from './components/MediaCard';
import Gate from './components/Gate';
import "./index.css";


function Room() {
  
  const [isLit,setLit] = useState(true);
  const [roomTemp,setTemp] = useState(72);
  const brightness = isLit ? "lit" : "dark";  
  return (
    <div>
    <div className={`home ${brightness}`}>
     The light of room is 
     <h1>
       {isLit? 'Lit':'Dark'}
      </h1>
      {isLit? 'Room Temprature: '+roomTemp:''}
    </div>
    <br></br>
    <button onClick={()=>setLit(!isLit)}>Flip</button>
    <div>
    <button onClick={()=>setLit(true)}>On</button>
    <button onClick={()=>setLit(false)}>Off</button>
    </div>
    <div>
      Temprature:
    <button onClick={()=>setTemp(roomTemp+1)}>+</button>
    <button onClick={()=>setTemp(roomTemp-1)}>-</button>
    </div>
    <br>
    </br>
    <MediaCard title="Showing Reddit React" imageUrl="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe" lines="5">
    </MediaCard>
    </div>

  );
}

export default Room;
