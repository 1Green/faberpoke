import React from 'react';
import { Pokemon } from './pokemon/Pokemon';
import rawJson from './json/pikachu.json';

function App() {
  return (
    <Pokemon key={rawJson.id} {...rawJson} />
  );
}

export default App;
