import React, { useState } from 'react';

import './App.css';
import Table from './components/Table';


function App() {

  const [counter, setCounter] = useState(500000);

  return (
    <div className="App">
      <Table counter={counter} />
    </div>
  );
}

export default App;
