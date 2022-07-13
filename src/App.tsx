import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var anArray = [5, 6];

  var [firstElement,secondElement] = anArray


  const [count, setCount] = useState(0);

  const handleButtonClick = () => { setCount(count + 1); }
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={handleButtonClick}>click me</button>
    </div>
  );
}

export default App;
