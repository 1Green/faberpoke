import React, { FunctionComponent } from 'react'
import { Pokemon } from 'sections/Search/Search';
import styles from './pokemonList.module.css';

export type PokemonListProps = {
    isLoading?: boolean;
    pokemons?: Pokemon[];
}

const PokemonList: FunctionComponent<PokemonListProps> = ({
    isLoading = false,
    pokemons
}) => {
    const getPokemonImageURL = (url: string): string => {
        const regex = new RegExp(/\d+(?=\/$)/);
        const regexArr = regex.exec(url);
        if (regexArr === null || regexArr.length === 0) return '';

        const pokemonId = regexArr[0];
        if (pokemonId === undefined) return '';
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }

    if (isLoading) return <p>Loading</p>
    if (pokemons === undefined || pokemons.length === 0) {
        return <p>No Pokemon found.</p>
    }
    return (
        <div className={styles.pokemonListWrapper}>
            {pokemons.map((pokemon, index) => (
                <div key={index} className={styles.pokemonListItem} onClick={() => console.log('show pokemon card!')}>
                    <img alt='pokemon' src={getPokemonImageURL(pokemon.url)} className={styles.pokemonImg} />
                </div>
            ))}
        </div>
    )
}

export default PokemonList
