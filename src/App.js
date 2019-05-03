import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import Forms from './Components/Forms';
import Wheather from './Components/Wheather';

function App() {
  return (
    <div className="App">
      <Titles/>
      <Forms/>
      <Wheather/>
    </div>
  );
}

export default App;
