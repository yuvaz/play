
import CurrencyIndex from "./component/currency/CurrencyIndex"
import SearchIndex from "./component/search/SearchIndex"
import Counter from "./component/counter/Counter";
import Form1 from "./component/form/Form1";
import ParentComponent from "./component/customHook/ParentComponent";
import IndexFetch from "./component/fetch/IndexFetch"
import TicTac from "./component/tictacgame/TicTac";
import PlayGround from "./component/workout/PlayGround";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CurrencyIndex /> */}
        {/* <SearchIndex /> */}
        {/* <Counter /> */}
        {/* <Form1 /> */}
        {/* <ParentComponent /> */}
        {/* <IndexFetch /> */}
        <TicTac />
        {/* <PlayGround /> */}
      </header>
    </div>
  );
}

export default App;
