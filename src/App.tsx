import React from 'react';
import './App.css';
// import * as rawJson from './pikachu.json'
import PokemonParser from './stories/pokemon/PokemonParser';
import rawJson from './pikachu.json';

function App() {
  return (
    <div className="App">
      <PokemonParser jsonFromApi={rawJson} />
    </div>
  );
}

export default App;
