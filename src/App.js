import { useState } from 'react';
import './App.css';
import Home from './component/Home';
function App() {
  const [haveWinner, setWinner] = useState(false)

  return (
    <div className="App">
      {/* {haveWinner && <MessageBox />} */}
      {/* <Board result={showResult} /> */}
      <Home />
    </div>
  );
}

export default App;
