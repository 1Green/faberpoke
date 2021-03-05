import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation>
        <div key='coucou'>
          <p>COUCOU</p>
        </div>
        <div key='salut'>
          <p>SALUT</p>
        </div>
      </Navigation>
    </div>
  );
}

export default App;
