import * as React from 'react';
import './pokemonstat.css'

export type PokemonStatProps = {
    name: string,
    value: number,
}

export function PokemonStat({ name, value }: PokemonStatProps) {
    return (
        <div className="pokemon-Stat-container">
            <div className="pokemon-stat-name">
                {name}
            </div>
            <div className="pokemon-stat-value">
                {value}
            </div>
        </div>
    )
}
