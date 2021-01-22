import Child from './Child.js';
import Child2 from './Child2.js';
import { Child3 } from './Child3.js';

function Parent() {
    return (
      <div>
          This is Parent
        <Child value="20"></Child>
        <Child2 value="20"></Child2>
        <Child3 value={30}></Child3>
      </div>
    );
  }
  
  export default Parent;
  