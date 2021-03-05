import React from 'react';
import './App.css';
import { PokemonParser } from './pokemon/PokemonParser';
import rawJson from './json/pikachu.json';

function App() {
  return (
    <div className="App">
      <PokemonParser jsonFromApi={rawJson} />
    </div>
  );
}

export default App;
