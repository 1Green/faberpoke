import React from 'react';
import styles from './app.module.css';
import { PokemonParser } from './pokemon/PokemonParser';
import rawJson from './json/pikachu.json';

function App() {
  return (
    <div className={styles.app}>
      <PokemonParser jsonFromApi={rawJson} />
    </div>
  );
}

export default App;
