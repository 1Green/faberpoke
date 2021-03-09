import * as React from 'react';
import styles from './pokemon.module.css'
import { PokemonType } from './type/PokemonType';
import { ButtonImage } from './buttonImage/ButtonImage';
import { ReactComponent as PokeballCardIcon } from './svg/pokeballcard.svg';
import { AbilitySlot, Sprites, SpritesImages, Statistics, TypeSlot } from './PokemonParser';
import { getSpritesKey, capitalizeFirstLetter } from './functions';

export type PokemonProps = {
    name: string;
    order: number;
    weight: number;
    height: number,
    types: TypeSlot[];
    abilities?: AbilitySlot[];
    sprites: Sprites;
    statistics?: Statistics[];
}

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'

export function Pokemon({ name, order, weight, height, types, sprites }: PokemonProps) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');

    const onClick = () => setGender(() => gender === 'default' ? 'female' : 'default')
    //conditional rendering of gender button
    const hasFemale: boolean = sprites[getSpritesKey('front', false, 'female')] !== null

    const spriteKey: keyof SpritesImages = getSpritesKey(orientation, shiny, gender)
    const spriteUrl = sprites[spriteKey] ?? "./img/no_sprite.png" //should never render no_sprite img

    return (
        <div className={styles.pokemonCardContainer}>
            <div className={styles.pokemonOrderNameType}>
                <div className={styles.pokemonOrder}>{`#${order}`}</div>
                <div className={styles.pokemonName}>{capitalizeFirstLetter(name).replace('-', ' ')}</div>
                <div className={styles.pokemonTypeContainer}>
                    {
                        types.map(typeSlot => {
                            let typeImage;
                            if (typeSlot.type.name !== 'unknown' && typeSlot.type.name !== 'shadow') {
                                typeImage = `./img/${typeSlot.type.name}.png`
                            }
                            return <PokemonType key={typeSlot.type.name} type={typeSlot.type} imageUrl={typeImage} />
                        })
                    }
                </div>
            </div>
            <div className={styles.pokemonViewer}>
                <div className={styles.pokemonViewerBack}>
                    <div className={styles.pokemonViewerScreen}>
                        <img className={styles.pokemonImage} src={spriteUrl} alt={name} />
                    </div>
                    <div className={styles.pokemonButtonContainer} style={{ justifyContent: hasFemale ? 'space-between' : 'flex-end' }}>
                        {
                            hasFemale ?
                                <div className={styles.genderButtonImages}>
                                    <ButtonImage name='default' gender={gender} onClick={onClick} />
                                    <ButtonImage name='female' gender={gender} onClick={onClick} />
                                </div>
                                : null
                        }
                        <div className={styles.shinyOrientationContainer}>
                            <ButtonImage name='shiny' shiny={shiny} onClick={() => setShiny(!shiny)} />
                            <ButtonImage name='orientation' onClick={() => setOrientation((prev) => prev === 'front' ? 'back' : 'front')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pokemonWeightHeightContainer}>
                <div className={styles.pokemonWeightHeight}>Weight <div className={styles.pokemonWeightValue}>{weight} kg</div></div>

                <div className={styles.pokemonWeightHeight}>Height <div className={styles.pokemonHeightValue}>{height} dm</div></div>
            </div>
            <div className={styles.iconContainer}><PokeballCardIcon fill={'#bdbdbd'} className={styles.pokeballIcon} /></div>
        </div>
    )
}
