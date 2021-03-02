import * as React from 'react';
// import { AbilityArray } from './Ability';
import './pokemon.css'
import { PokemonType, Type } from './PokemonType';

export type PokemonProps = {
    name: string;
    types: Type[];
    // sprites: string[];
    // shiny: boolean;
    // stats: string[];
}

export function Pokemon({ name, types }: PokemonProps) {
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-type-container">
                {
                    types.map(type => {
                        return <PokemonType type={type} />
                    })
                }
            </div >
        </div>
    )
}
