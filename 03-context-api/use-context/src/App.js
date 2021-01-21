import { useState } from 'react';
import './App.css';
import CounterContext from './context/CounterContext.js';
import Parent from './component/Parent.js';
function App() {
  let countState = useState(25);
  return (
    <div>
      <CounterContext.Provider value={countState}>
        <Parent></Parent>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
