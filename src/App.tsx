import React from 'react';
import { PokemonParser } from './pokemon/PokemonParser';
import rawJson from './json/pikachu.json';

function App() {
  return (
    <PokemonParser jsonFromApi={rawJson} />
  );
}

export default App;
