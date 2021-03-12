import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import cx from "classnames";
import styles from "./search.module.css";
import { throttle } from "lodash";
import PokemonList from "components/pokemonList/PokemonList";
import Pagination, {
  PaginationDataType,
} from "components/pagination/Pagination";
import InputSearch from "components/inputSearch/InputSearch";
import { useHttp } from "hooks";
import { getAllPokemon, getAllPokemonUrl, PokemonArray } from "api/pokemon";

export type SearchListProps = {
  onShowPokemon: (url: string) => void;
};

const SearchList: FunctionComponent<SearchListProps> = ({ onShowPokemon }) => {
  const { data } = useHttp(getAllPokemonUrl, getAllPokemon);
  const [pokemons, setPokemons] = useState<PokemonArray>();
  const [searchInput, setSearchInput] = useState<string>("");
  const [pokemonsCurrent, setPokemonsCurrent] = useState<PokemonArray>();

  useEffect(() => {
    if (data === undefined) return;
    setPokemons(data.results);
  }, [data]);

  const searchPokemonByName = useCallback(
    (name: string, pokemonList: PokemonArray): PokemonArray => {
      return pokemonList.filter((element) => element.name.startsWith(name));
    },
    []
  );

  const fetchPokemonBySearch = throttle((searchInput: string) => {
    if (data === undefined) return;
    const filteredData = searchPokemonByName(searchInput, data.results);
    if (filteredData.length !== 0) setPokemons(filteredData);
    else if (searchInput === "") {
      setPokemons(pokemons);
    } else {
      setPokemons([]);
    }
  }, 100);

  const throttleSearchInput = (input: string) => {
    setSearchInput(input);
    fetchPokemonBySearch(input);
  };

  const pageChangeHandler = useCallback(
    (paginationData: PaginationDataType) => {
      const { currentPage, pageLimit } = paginationData;
      const offset = (currentPage - 1) * pageLimit;
      const currentPokemons = pokemons?.slice(offset, offset + pageLimit);
      setPokemonsCurrent(currentPokemons);
    },
    [pokemons]
  );

  const isListLoading: boolean = pokemons === undefined && searchInput === "";

  return (
    <div className={styles.listWrapper}>
      <div className={styles.headerWrapper}>
        <InputSearch
          rounded
          value={searchInput}
          backgroundColor="#5ee134"
          onChange={throttleSearchInput}
        />
        <div className={styles.pokedexDotsWrapper}>
          <div className={cx(styles.pokedexDot, styles.pokedexDotRed)} />
          <div className={cx(styles.pokedexDot, styles.pokedexDotYellow)} />
          <div className={cx(styles.pokedexDot, styles.pokedexDotGreen)} />
        </div>
      </div>
      <div className={styles.pokemonList}>
        <PokemonList
          onShowPokemon={onShowPokemon}
          isLoading={isListLoading}
          pokemons={pokemonsCurrent}
        />
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination
          totalRecords={pokemons?.length}
          pageLimit={15}
          onPageChanged={pageChangeHandler}
        />
      </div>
    </div>
  );
};

export default SearchList;
