// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { useHttp } from 'hooks';
import cx from 'classnames';
import styles from './search.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputSearch from 'components/inputSearch/InputSearch'
import { throttle } from 'lodash'
import PokemonList from 'components/pokemonList/PokemonList';
import Pagination, { PaginationDataType } from 'components/pagination/Pagination';
import PokemonContainer from 'components/pokemon/PokemonContainer';
import { getAllPokemon, getAllPokemonUrl, PokemonArray} from 'api/pokemon';

const Search: FunctionComponent = () => {
    const { data } = useHttp(getAllPokemonUrl, getAllPokemon);
    const [pokemons, setPokemons] = useState<PokemonArray>();
    const [pokemonsCurrent, setPokemonsCurrent] = useState<PokemonArray>();
    const [searchInput, setSearchInput] = useState<string>("");
    const [pokemonUrl, setPokemonUrl] = useState<string>('');

    const searchPokemonByName = useCallback((name: string, pokemonList: PokemonArray): PokemonArray => {
        return pokemonList.filter((element) => element.name.startsWith(name))
    }, [])

    useEffect(() => {
        if (data === undefined) return;
        setPokemons(data.results);
    }, [data])

    const fetchPokemonBySearch = throttle((searchInput: string) => {
        if (data === undefined) return;
        const filteredData = searchPokemonByName(searchInput, data.results);
        if (filteredData.length !== 0)
            setPokemons(filteredData);
        else if (searchInput === '') {
            setPokemons(data.results);
        } else {
            setPokemons([]);
        }
    }, 100)

    const throttleSearchInput = (input: string) => {
        setSearchInput(input);
        fetchPokemonBySearch(input);
    };

    const isListLoading: boolean = pokemons === undefined && searchInput === '';

    const pageChangeHandler = useCallback((paginationData: PaginationDataType) => {
        const { currentPage, pageLimit } = paginationData
        const offset = (currentPage - 1) * pageLimit;
        const currentPokemons = pokemons?.slice(offset, offset + pageLimit);
        setPokemonsCurrent(currentPokemons);
    }, [pokemons]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchWrapper}>
                <div className={styles.headerWrapper}>
                    <InputSearch
                        rounded
                        value={searchInput}
                        backgroundColor='#5ee134'
                        onChange={throttleSearchInput}
                    />
                    <div className={styles.pokedexDotsWrapper}>
                        <div className={cx(styles.pokedexDot, styles.pokedexDotRed)}/>
                        <div className={cx(styles.pokedexDot, styles.pokedexDotYellow)}/>
                        <div className={cx(styles.pokedexDot, styles.pokedexDotGreen)}/>
                    </div>
                </div>
                <div className={styles.listWrapper}>
                    <PokemonList
                        onShowPokemon={(url: string) => setPokemonUrl(url)}
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
            { pokemonUrl !== '' && (
                <PokemonContainer  pokemonUrl={pokemonUrl} /> 
            )}
        </div>
    )
}

export default Search;
