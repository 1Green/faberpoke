import * as React from 'react';
import styles from './pokemon.module.css'
import { PokemonType } from './type/PokemonType';
import { ButtonImage } from './buttonImage/ButtonImage';
import { OrientationShinyGender, PokeApiResponse } from './PokemonParser';
import { getSpritesKey, capitalizeFirstLetter } from './functions';
import Icon from '../Icon/Icon';

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'
export type Bookmark = 'bookmarkon' | 'bookmarkoff'

const colorButtonDisabled = '#CACACA'
const colorButtonActive = 'black'

export function Pokemon({ name, order, weight, height, types, sprites }: PokeApiResponse) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');
    const [bookmark, setBookmark] = React.useState<Bookmark>('bookmarkoff');

    // Sprite logic
    const spriteKey: keyof OrientationShinyGender = getSpritesKey(orientation, shiny, gender)
    const spriteUrl = sprites[spriteKey] ?? "./img/no_sprite.png" //should never render no_sprite img

    // Button logic
    const onClick = () => setGender(() => gender === 'default' ? 'female' : 'default')
    //conditional rendering of gender button
    const hasFemale = sprites[getSpritesKey('front', false, 'female')] !== null

    return (
        <div className={styles.pokemonCardContainer}>
            <div className={styles.pokemonOrderNameType}>
                <div className={styles.pokemonOrder}>{`#${order}`}</div>
                <div className={styles.pokemonName}>{capitalizeFirstLetter(name).replace('-', ' ')}</div>
                <div className={styles.pokemonTypeContainer}>
                    {
                        types
                            .filter((typeSlot) =>
                                typeSlot.type.name !== 'unknown' &&
                                typeSlot.type.name !== 'shadow')
                            .map(typeSlot => {
                                return <PokemonType key={typeSlot.type.name} type={typeSlot.type} imageUrl={`./img/${typeSlot.type.name}.png`} />
                            })
                    }
                </div>
            </div>
            <div className={styles.pokemonViewer}>
                <div className={styles.pokemonViewerBack}>
                    <div className={styles.pokemonViewerScreen}>
                        <img className={styles.pokemonImage} src={spriteUrl} alt={name} />
                    </div>
                    <div className={styles.pokemonButtonContainer}>
                        {
                            hasFemale ?
                                <div className={styles.genderButtonImages}>
                                    <ButtonImage name='default' size='button' color={gender === 'default' ? colorButtonActive : colorButtonDisabled} onClick={onClick} disabled={gender === 'default'} />
                                    <ButtonImage name='female' size='button' color={gender === 'female' ? colorButtonActive : colorButtonDisabled} onClick={onClick} disabled={gender === 'female'} />
                                </div>
                                : <div className={styles.emptyDiv}>{''}</div>
                        }
                        <ButtonImage name={bookmark} size='button' onClick={() => setBookmark(() => bookmark === 'bookmarkon' ? 'bookmarkoff' : 'bookmarkon')} />
                        <div className={styles.shinyOrientationContainer}>
                            <ButtonImage name='shiny' size='button' color={shiny ? colorButtonActive : colorButtonDisabled} onClick={() => setShiny(!shiny)} />
                            <ButtonImage name='orientation' size='button' onClick={() => setOrientation((prev) => prev === 'front' ? 'back' : 'front')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pokemonWeightHeightContainer}>
                <div className={styles.pokemonWeightHeight}>Weight <div className={styles.pokemonWeightValue}>{weight} kg</div></div>

                <div className={styles.pokemonWeightHeight}>Height <div className={styles.pokemonHeightValue}>{height} dm</div></div>
            </div>
            <div className={styles.iconContainer}>
                <Icon name='pokeball' size='pokeball' color={'#bdbdbd'} className={styles.pokeballIcon} />
            </div>
        </div>
    )
}
