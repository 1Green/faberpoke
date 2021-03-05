import * as React from 'react';
import { PokemonAbility } from './ability/PokemonAbility';
import './pokemon.css'
import { PokemonType } from './type/PokemonType';
import { ButtonImg } from './buttonImg/ButtonImg';
import { AbilitySlot, Sprites, SpritesImages, Stat, TypeSlot } from './PokemonParser';
import { getSpritesKey, capitalizeFirstLetter } from './functions';
import { PokemonStat } from './statistic/PokemonStat';

export type PokemonProps = {
    name: string;
    order: number;
    weight: number;
    height: number,
    types: TypeSlot[];
    abilities: AbilitySlot[];
    sprites: Sprites;
    stats: Stat[];
}

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'

export function Pokemon({ name, order, weight, height, types, sprites, abilities, stats }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');

    const spriteKey: keyof SpritesImages = getSpritesKey(orientation, shiny, gender)

    // why do i need to put as string ???
    const spriteUrl = sprites[spriteKey] !== null ? sprites[spriteKey] as string : "./img/no_sprite.png"
    console.log(spriteKey)

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-order">{`#${order}`}</div>
            <img className="pokemon-img" src={spriteUrl} alt={name} />
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-weight">{weight}</div>
            <div className="pokemon-height">{height}</div>
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
                    abilities.map(abilitySlot => {
                        // TODO get text from the url : abilitySlot.url
                        const name: string = capitalizeFirstLetter(abilitySlot.ability.name);
                        return < PokemonAbility key={abilitySlot.ability.name} name={name.replace('-', ' ')} abilityText="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    })
                }
            </div >
            <div className="pokemon-stat-container">
                {
                    stats.map(statElement => {
                        const name: string = capitalizeFirstLetter(statElement.stat.name);
                        return < PokemonStat key={statElement.stat.name} name={name.replace('-', ' ')} value={statElement.base_stat} />
                    })
                }
            </div >
            <div className="pokemon-button-container"><ButtonImg img='gender' onClick={() => setGender((prev) => prev === 'default' ? 'female' : 'default')} />
                <ButtonImg img='shiny' onClick={() => setShiny(!shiny)} />
                <ButtonImg img='orientation' onClick={() => setOrientation((prev) => prev === 'front' ? 'back' : 'front')} />
            </div></div>
    )
}
