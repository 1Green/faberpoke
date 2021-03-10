import React, { FunctionComponent } from 'react'
import { Pokemon } from './Pokemon'
import useSWR from 'swr'
import { PokeApiResponse } from './PokemonParser';

export type PokemonContainerProps = {
    pokemonUrl: string;
}

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

const PokemonContainer: FunctionComponent<PokemonContainerProps> = ({
    pokemonUrl
}) => {
    const { data } = useSWR<PokeApiResponse, Error>(pokemonUrl, fetcher);

    console.log("data: ", data);
    if (data === undefined) return null;
    return (
        <Pokemon {...data} />
    )
}

export default PokemonContainer
