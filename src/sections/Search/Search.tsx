import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import Input from '../../stories/Input/Input';

interface Pokemon {
    name: string;
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
        if (searchInput.length === 0) {
            setPokemonsFiltered(undefined);
            return;
        }
        const filteredData = searchPokemonByName(searchInput, data?.results);
        setPokemonsFiltered(filteredData);
    }, [searchInput, data, searchPokemonByName]);

    return (
        <div>
            <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            {pokemonsFiltered !== undefined && pokemonsFiltered.map((pokemon, index) => (
                <p key={index}>{pokemon.name}</p>
            ))}
        </div>
    )
}

export default Search;
