import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './MyItem';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h1  className="heading">This is 1st heading</h1>
        <Item name="Gully" />
        <Item name="Lokesh" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;




