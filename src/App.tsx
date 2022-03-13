import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from 'react-ts-loaders'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })
  return (
    <div className="App">
      {loading ? <Loader
        type="spinner"
        color="#a00598"
        size={150}
      /> :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
    </div>
  );
}

export default App;
