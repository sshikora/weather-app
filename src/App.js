import React from 'react';
import Weather from './component/Weather'
import config from './config.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather token={config.token} />
    </div>
  );
}

export default App;
