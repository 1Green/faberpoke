import * as React from 'react';
import './pokemonability.css'

export type PokemonAbilityProps = {
    name: string,
    abilityText: string
}

export function PokemonAbility({ name, abilityText }: PokemonAbilityProps) {
    return (
        <div className="pokemon-ability-container">
            <div className="pokemon-ability-name">
                {name}
            </div>
            <div className="pokemon-ability-url">
                <p>{abilityText}</p>
            </div>
        </div>
    )
}
