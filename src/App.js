import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  const changeNumber = () => {
    setNumber((Math.floor(Math.random() * 100) + 1))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='numberText'>{number}</div>
        <button
        className='btnNumber'
        onClick={changeNumber}
        > <div className='blockText'>GERE SEU NÚMERO ALEATÓRIO</div></button>
      </header>
    </div>
  );
}

export default App;
