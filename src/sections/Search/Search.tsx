import React, { FunctionComponent, useState } from "react";
import styles from "./search.module.css";
import PokemonContainer from "components/pokemon/PokemonContainer";
import SearchList from "./SearchList";
import SectionTitle from "components/sectionTitle/SectionTitle";

const Search: FunctionComponent = () => {
  const [pokemonUrl, setPokemonUrl] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <SectionTitle
        title="Pokédex"
        color="#ff4443"
        className={styles.sectionTitle}
      />
      <div className={styles.searchWrapper}>
        <SearchList onShowPokemon={setPokemonUrl} />
        {pokemonUrl !== "" && <PokemonContainer pokemonUrl={pokemonUrl} />}
      </div>
    </div>
  );
};

export default Search;
