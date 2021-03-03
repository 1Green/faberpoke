import * as React from 'react';
import { Ability, PokemonAbility } from './Ability';
// import { AbilityArray } from './Ability';
import './pokemon.css'
import { PokemonType, Type } from './PokemonType';
import { Shiny } from './Shiny';

export type PokemonProps = {
    name: string;
    types: Type[];
    abilities: Ability[];
    // sprites: string[];
    // stats: string[];
}

export function Pokemon({ name, types, abilities }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);

    if (abilities.length !== 4) {
        return (
            <div> Error: abilities need to have a length of 4</div>
        );
    }
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-type-container">
                {
                    types.map(type => {
                        return <PokemonType key={type} type={type} />
                    })
                }
            </div >
            <div className="pokemon-ability-container">
                {
                    abilities.map(ability => {
                        return <PokemonAbility key={ability.name} ability={ability} />
                    })
                }
            </div >
            <Shiny label='Shiny' onClick={() => setShiny(!shiny)} />
        </div>
    )
}
