import './App.css';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Error } from './component/Error';
import { ETHAccountInfo } from './component/ETHAccountInfo';
import { Header } from './component/Header.js';
import { History } from './component/History.js';
import { GlobalProvider } from './context/GlobalContext.js';


function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <ETHAccountInfo />
        <Balance />
        <History />
        <Error />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

