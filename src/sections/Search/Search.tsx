import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import Input from '../../stories/Input/Input';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchInput from '../../stories/SearchInput/SearchInput';
import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';

interface Pokemon {
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
    const { data } = useSWR<FetchAllPokemonResponse, Error>(getAllPokemonUrl, fetcher);
    const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[] | undefined>();
    const [searchInput, setSearchInput] = useState<string>("");

    const searchPokemonByName = useCallback((name: string, pokemonList: Pokemon[] | undefined): Pokemon[] | undefined => {
        if (pokemonList === undefined) return undefined;
        return pokemonList.filter((element) => element.name.startsWith(name))
    }, [])
 
    useEffect(() => {
        // if (searchInput.length === 0) {
        //     setPokemonsFiltered(undefined);
        //     return;
        // }
        const filteredData = searchPokemonByName(searchInput, data?.results);
        console.log("filtered data: ", filteredData);
        if (filteredData !== undefined)
            setPokemonsFiltered(filteredData);
        else
            setPokemonsFiltered(data?.results);
    }, [searchInput, data, searchPokemonByName]);

    const getPokemonImageURL = (url: string): string => {
        const regex = new RegExp(/\d+(?=\/$)/);
        const regexArr = regex.exec(url);
        if (regexArr === null || regexArr.length === 0) return "";

        const pokemonId = regexArr[0];
        if (pokemonId === undefined) return "";
        // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }

    return (
        <div style={{ backgroundColor: "lightgrey", height: "70vh", overflow: "scroll" }}>
            <div style={{ width: "60px", height: "10px", backgroundColor: "black", borderRadius: "80%"}} />
            <SearchIcon style={{ height: '20px', width: '20px' }} />
            <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
                {pokemonsFiltered !== undefined && pokemonsFiltered.map((pokemon, index) => {
                    return (
                        <div key={index} style={{ flex: '0 0 20%' }}>
                            <img alt='' src={getPokemonImageURL(pokemon.url)} style={{ height: '80px', width: '80px' }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;
