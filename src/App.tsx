import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation>
        <div key='pokedex' style={{ backgroundColor: "red", padding: "20px", height: '100%', width: '100%'}}>
          <p>POKEDEX</p>
        </div>
        <div key='roaster' style={{ backgroundColor: "green", padding: "20px", height: '100%', width: '100%'}}>
          <p>ROASTER</p>
        </div>
      </Navigation>
    </div>
  );
}

export default App;
