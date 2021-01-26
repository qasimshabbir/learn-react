import { AddTodo } from './component/AddTodo';
import { FooterAction } from './component/FooterAction';
import { ListTodo } from './component/ListTodo';

function App() {
  return (
    <div >
      <ListTodo />
      <FooterAction />
      <hr />
      <AddTodo />
      
    </div>
  );
}

export default App;
