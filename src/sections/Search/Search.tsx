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
import { Pokemon } from 'components/pokemon/Pokemon';
import PokemonContainer from 'components/pokemon/PokemonContainer';

export interface Pokemon {
    name: string;
    url: string;
}
interface AllPokemonResponse {
    count: number;
    results?: Pokemon[];
}

const getAllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000'

const getAllPokemon = (url: string) => {
    const pokemonsFromStorage = localStorage.getItem('pokemons')
    if (pokemonsFromStorage !== null) {
        const pokemonsParsed = JSON.parse(pokemonsFromStorage) as AllPokemonResponse;
        return pokemonsParsed;
    }
    return fetch(url).then(response  => {
        return response.json().then((response: AllPokemonResponse): AllPokemonResponse => {
            localStorage.setItem('pokemons', JSON.stringify(response));
            return response;
        }).catch((error) => console.log("json() error: ", error));
    }).catch((error) => console.log("fetch() error: ", error));
}

const Search: FunctionComponent = () => {
    const { data } = useHttp(getAllPokemonUrl, getAllPokemon);
    const [pokemons, setPokemons] = useState<Pokemon[] | undefined>();
    const [pokemonsCurrent, setPokemonsCurrent] = useState<Pokemon[] | undefined>();
    const [searchInput, setSearchInput] = useState<string>("");
    const [pokemonUrl, setPokemonUrl] = useState<string>('');

    const searchPokemonByName = useCallback((name: string, pokemonList: Pokemon[] | undefined): Pokemon[] | undefined => {
        if (pokemonList === undefined) return undefined;
        return pokemonList.filter((element) => element.name.startsWith(name))
    }, [])

    useEffect(() => {
        if (data === undefined) return;
        setPokemons(data.results);
    }, [data])

    const fetchPokemonBySearch = throttle((searchInput: string) => {
        if (data === undefined) return;
        const filteredData = searchPokemonByName(searchInput, data.results);
        if (filteredData !== undefined)
            setPokemons(filteredData);
        else {
            setPokemons(data.results);
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

    console.log("pokemons: ", pokemons)
    return (
        <div>
            <div className={styles.searchWrapper}>
                <div className={styles.headerWrapper}>
                    <div style={{
                        zIndex: 1
                    }}>
                        <InputSearch rounded backgroundColor='green' onChange={throttleSearchInput}/>
                    </div>
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
                <div style={{ height: '100px', width: '100%'}}>
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
