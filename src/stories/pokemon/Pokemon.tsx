import * as React from 'react';
import { Ability, PokemonAbility } from './Ability';
// import { AbilityArray } from './Ability';
import './pokemon.css'
import { PokemonType } from './PokemonType';
import { Button } from './Button';
import { TypeSlot } from './PokemonParser';

export type PokemonProps = {
    name: string;
    order: number;
    weight: number;
    types: TypeSlot[];
    abilities: Ability[];
    // sprites: string[];
    // stats: string[];
}

export function Pokemon({ name, order, weight, types, abilities }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);
    // true=female, false=male
    const [gender, setGender] = React.useState(false);

    if (abilities.length !== 4) {
        return (
            <div> Error: abilities need to have a length of 4</div>
        );
    }
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-order">{order}</div>
            <div className="pokemon-weight">{weight}</div>
            <div className="pokemon-type-container">
                {
                    types.map(typeSlot => {
                        let typeImg;
                        if (typeSlot.type.name !== 'unknown' && typeSlot.type.name !== 'shadow') {
                            typeImg = `./img/${typeSlot.type.name}.png`
                        }
                        return <PokemonType key={typeSlot.type.name} type={typeSlot.type} img={typeImg} />
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
            <Button label='Shiny' onClick={() => setShiny(!shiny)} />
            <Button label='Gender' onClick={() => setGender(!gender)} />
        </div>
    )
}

export function parse(rawJson: string) {
    JSON.parse(rawJson);
}
