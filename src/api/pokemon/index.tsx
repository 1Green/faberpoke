import { PokeApiResponse } from 'components/pokemon/PokemonParser';

export type PokemonItem = {
    name: string;
    url: string;
}

export type PokemonArray = PokemonItem[];

export type AllPokemonResponse = {
    count: number;
    results: PokemonItem[];
}

export const getAllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000'

export const getAllPokemon = (url: string) => {
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

export const getPokemonId = (url: string) => {
    const regex = new RegExp(/\d+(?=\/$)/);
    const regexArr = regex.exec(url);
    if (regexArr === null || regexArr.length === 0) return '';

    const pokemonId = regexArr[0];
    return pokemonId;
}

export const getPokemon = (url: string) => {
    const pokemonId = getPokemonId(url);
    if (pokemonId === undefined) return undefined;
    const pokemonFromStorage = localStorage.getItem(pokemonId);
    if (pokemonFromStorage !== null) {
        const pokemonParsed = JSON.parse(pokemonFromStorage) as PokeApiResponse;
        return pokemonParsed;
    }
    return fetch(url).then(response => {
        return response.json().then((response: PokeApiResponse): PokeApiResponse => {
            localStorage.setItem(pokemonId, JSON.stringify(response));
            return response;
        })
    })
}
