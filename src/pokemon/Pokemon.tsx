import * as React from 'react';
import { PokemonAbility } from './ability/PokemonAbility';
import styles from './pokemon.module.css'
import { PokemonType } from './type/PokemonType';
import { ButtonImage } from './buttonImage/ButtonImage';
import { AbilitySlot, Sprites, SpritesImages, Statistics, TypeSlot } from './PokemonParser';
import { getSpritesKey, capitalizeFirstLetter } from './functions';
import { PokemonStatistic } from './statistic/PokemonStatistic';

export type PokemonProps = {
    name: string;
    order: number;
    weight: number;
    height: number,
    types: TypeSlot[];
    abilities: AbilitySlot[];
    sprites: Sprites;
    statistics: Statistics[];
}

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'

export function Pokemon({ name, order, weight, height, types, sprites, abilities, statistics }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');

    const spriteKey: keyof SpritesImages = getSpritesKey(orientation, shiny, gender)

    const spriteUrl = sprites[spriteKey] ?? "./img/no_sprite.png"
    console.log(spriteKey)

    return (
        <div className={styles.cardContainer}>
            <div className={styles.order}>{`#${order}`}</div>
            <img className={styles.image} src={spriteUrl} alt={name} />
            <div className={styles.name}>{capitalizeFirstLetter(name).replace('_', ' ')}</div>
            <div className={styles.weight}>{weight}</div>
            <div className={styles.height}>{height}</div>
            <div className={styles.typeContainer}>
                {
                    types.map(typeSlot => {
                        let typeImage;
                        if (typeSlot.type.name !== 'unknown' && typeSlot.type.name !== 'shadow') {
                            typeImage = `./img/${typeSlot.type.name}.png`
                        }
                        return <PokemonType key={typeSlot.type.name} type={typeSlot.type} imageUrl={typeImage} />
                    })
                }
            </div >
            <div className={styles.pokemonAbilityContainer}>
                {
                    abilities.map(abilitySlot => {
                        // TODO get text from the url : abilitySlot.url
                        const name: string = capitalizeFirstLetter(abilitySlot.ability.name);
                        return < PokemonAbility key={abilitySlot.ability.name} name={name.replace('-', ' ')} abilityText="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    })
                }
            </div >
            <div className={styles.pokemonStatisticContainer}>
                {
                    statistics.map(statisticElement => {
                        const name: string = capitalizeFirstLetter(statisticElement.stat.name);
                        return < PokemonStatistic key={statisticElement.stat.name} name={name.replace('-', ' ')} value={statisticElement.base_stat} />
                    })
                }
            </div >
            <div className={styles.pokemonButtonContainer}><ButtonImage image='gender' onClick={() => setGender((prev) => prev === 'default' ? 'female' : 'default')} />
                <ButtonImage image='shiny' onClick={() => setShiny(!shiny)} />
                <ButtonImage image='orientation' onClick={() => setOrientation((prev) => prev === 'front' ? 'back' : 'front')} />
            </div></div>
    )
}
