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

export type PokemonStorage = { [key: string]: PokeApiResponse };
export const getAllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000'

const POKEMON_ALL_KEY = 'pokemons';
const POKEMON_INFO_KEY = 'pokemons-info';

/* UTILS */
export const getPokemonId = (url: string) => {
    const regex = new RegExp(/\d+(?=\/$)/);
    const regexArr = regex.exec(url);
    if (regexArr === null || regexArr.length === 0) return '';

    const pokemonId = regexArr[0];
    return pokemonId;
}


/* POKEMON STORAGE FUNCTION */
export const getPokemonFromStorage = (pokemonId: string) => {
    const pokemonsString = localStorage.getItem(POKEMON_INFO_KEY);
    if (pokemonsString === null) return undefined;
    const pokemons = JSON.parse(pokemonsString) as PokemonStorage;
    return pokemons[pokemonId];
}

export const storePokemon = (pokemonId: string, pokemon: PokeApiResponse) => {
    const pokemonsString = localStorage.getItem(POKEMON_INFO_KEY);
    const pokemons = pokemonsString === null ? {} : JSON.parse(pokemonsString) as PokemonStorage;
    pokemons[pokemonId] = pokemon;
    localStorage.setItem(POKEMON_INFO_KEY, JSON.stringify(pokemons));
}

/* POKEMON FETCHERS */
export const getAllPokemon = (url: string) => {
    const pokemonsFromStorage = localStorage.getItem(POKEMON_ALL_KEY)
    if (pokemonsFromStorage !== null) {
        const pokemonsParsed = JSON.parse(pokemonsFromStorage) as AllPokemonResponse;
        return pokemonsParsed;
    }
    return fetch(url).then(response  => {
        return response.json().then((response: AllPokemonResponse): AllPokemonResponse => {
            localStorage.setItem(POKEMON_ALL_KEY, JSON.stringify(response));
            return response;
        }).catch((error) => console.log("json() error: ", error));
    }).catch((error) => console.log("fetch() error: ", error));
}

export const getPokemon = (url: string) => {
    const pokemonId = getPokemonId(url);
    if (pokemonId === undefined) return undefined;
    const pokemonFromStorage = getPokemonFromStorage(pokemonId);
    if (pokemonFromStorage !== undefined) {
        return pokemonFromStorage;
    }
    return fetch(url).then(response => {
        return response.json().then((response: PokeApiResponse): PokeApiResponse => {
            storePokemon(pokemonId, response);
            return response;
        }).catch((error) => console.log("json error: ", error))
    }).catch((error) => console.log("fetch error: ", error));
}
