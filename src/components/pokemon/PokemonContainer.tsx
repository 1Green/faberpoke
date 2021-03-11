import React, { FunctionComponent } from 'react'
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

    if (data === undefined) return null;
    return (
        <Pokemon {...data} />
    )
}

export default PokemonContainer
