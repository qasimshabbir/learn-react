import Child from './Child.js';
import Child2 from './Child2.js';

function Parent() {
    return (
      <div>
          This is Parent
        <Child value="20"></Child>
        <Child2 value="20"></Child2>
      </div>
    );
  }
  
  export default Parent;
  