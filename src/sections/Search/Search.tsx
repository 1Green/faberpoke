import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import cx from 'classnames';
import Input from '../../stories/Input/Input'
import styles from './search.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchInput from '../../stories/SearchInput/SearchInput'
import { throttle } from 'lodash'
import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg'
import PokemonList from 'stories/pokemonList/PokemonList'

export interface Pokemon {
    name: string;
    url: string;
}

interface FetchAllPokemonResponse {
    count: number;
    results?: Pokemon[];
}

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

const Search: FunctionComponent = () => {
    const getAllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = useSWR<FetchAllPokemonResponse, Error>(getAllPokemonUrl, fetcher);
    const [pokemons, setPokemons] = useState<Pokemon[] | undefined>();
    const [pokemonsCurrent, setPokemonsCurrent] = useState<Pokemon[] | undefined>();
    const [searchInput, setSearchInput] = useState<string>("");

    const searchPokemonByName = useCallback((name: string, pokemonList: Pokemon[] | undefined): Pokemon[] | undefined => {
        if (pokemonList === undefined) return undefined;
        return pokemonList.filter((element) => element.name.startsWith(name))
    }, [])

    useEffect(() => {
        setPokemons(data?.results);
    }, [data?.results])

    const fetchPokemonBySearch = throttle((searchInput: string) => {
        const filteredData = searchPokemonByName(searchInput, data?.results);
        console.log("filtered data: ", filteredData);
        if (filteredData !== undefined)
            setPokemons(filteredData);
        else
            setPokemons(data?.results);
    }, 100)

    const throttleSearchInput = (input: string) => {
        setSearchInput(input);
        fetchPokemonBySearch(input);
    };

    const isListLoading: boolean = pokemons === undefined && searchInput === '';

    useEffect(() => {
        const paginationOptions = {
            currentPage: 1,
            totalPages: 10,
            pageLimit: 15
        }

        const { currentPage, pageLimit } = paginationOptions
        const offset = (currentPage - 1) * pageLimit;
        const currentPokemons = pokemons?.slice(offset, offset + pageLimit);
        setPokemonsCurrent(currentPokemons);
    }, [pokemons])

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.headerWrapper}>
                <div style={{
                    zIndex: 1
                }}>
                    <SearchIcon style={{ height: '20px', width: '20px' }} />
                    <Input value={searchInput} onChange={(e) => throttleSearchInput(e.target.value)} />
                </div>
                <div className={styles.pokedexDotsWrapper}>
                    <div className={cx(styles.pokedexDot, styles.pokedexDotRed)}/>
                    <div className={cx(styles.pokedexDot, styles.pokedexDotYellow)}/>
                    <div className={cx(styles.pokedexDot, styles.pokedexDotGreen)}/>
                </div>
            </div>
            <div className={styles.listWrapper}>
                <PokemonList
                    isLoading={isListLoading}
                    pokemons={pokemonsCurrent}
                />
            </div>
        </div>
    )
}

export default Search;
