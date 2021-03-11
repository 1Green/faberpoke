import React, { FunctionComponent } from 'react'
import styles from './pokemon.module.css';
import { Pokemon } from './Pokemon'
import { useHttp } from 'hooks';
import { getPokemon } from 'api/pokemon'

export type PokemonContainerProps = {
    pokemonUrl: string;
}

const PokemonContainer: FunctionComponent<PokemonContainerProps> = ({
    pokemonUrl
}) => {
    const { data } = useHttp(pokemonUrl, getPokemon);

    console.log("data: ", data);
    if (data === undefined) {
        return (
            <div className={styles.pokemonLoaderContainer}>
                <p>Loading..</p>
            </div>
        )
    }
    return (
        <Pokemon {...data} />
    )
}

export default PokemonContainer
