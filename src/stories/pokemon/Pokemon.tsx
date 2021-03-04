import * as React from 'react';
import { Ability, PokemonAbility } from './Ability';
// import { AbilityArray } from './Ability';
import './pokemon.css'
import { PokemonType } from './PokemonType';
import { ButtonImg } from './ButtonImg';
import { Sprites, SpritesImages, TypeSlot } from './PokemonParser';
import { getSpritesKey } from './getSprite';

export type PokemonProps = {
    name: string;
    order: number;
    weight: number;
    types: TypeSlot[];
    abilities: Ability[];
    sprites: Sprites;
    // stats: string[];
}

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'

export function Pokemon({ name, order, weight, types, sprites, abilities }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');

    const spriteKey: keyof SpritesImages = getSpritesKey(orientation, shiny, gender)

    // why do i need to put as string ???
    const spriteUrl = sprites[spriteKey] !== null ? sprites[spriteKey] as string : "./img/no_sprite.png"
    console.log(spriteKey)

    if (abilities.length !== 4) {
        return (
            <div> Error: abilities need to have a length of 4</div>
        );
    }


    return (
        <div className="pokemon-card-container">
            <img src={spriteUrl} alt={name} />
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
            <ButtonImg img='gender' onClick={() => setGender((prev) => prev === 'default' ? 'female' : 'default')} />
            <ButtonImg img='shiny' onClick={() => setShiny(!shiny)} />
            <ButtonImg img='orientation' onClick={() => setOrientation((prev) => prev === 'front' ? 'back' : 'front')} />
        </div>
    )
}
