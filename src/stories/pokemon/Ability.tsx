import * as React from 'react';
import './ability.css'

export interface Ability {
    name: string;
    url: string;
    isHidden?: boolean;
    slot?: 1 | 2 | 3 | 4;
}

export type PokemonAbilityProps = {
    ability: Ability;
}

export function PokemonAbility({ ability }: PokemonAbilityProps) {
    return (
        <div className="pokemon-ability-container">
            <div className="pokemon-ability-name">
                {ability.name}
            </div>
            <div className="pokemon-ability-url">
                {ability.url}
            </div>
        </div>
    )
}
