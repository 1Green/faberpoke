import * as React from 'react';
import styles from './pokemon.module.css'
import { PokemonType } from './type/PokemonType';
import { ButtonImage } from './buttonImage/ButtonImage';
import { OrientationShinyGender, PokeApiResponse } from './PokemonParser';
import { getSpritesKey, capitalizeFirstLetter } from './functions';
import { useLocalStorage } from 'react-use'
import Icon from '../Icon/Icon';
import { RosterCardArray } from 'roster/Roster';

export type Orientation = 'back' | 'front'
export type Gender = 'default' | 'female'
export type Bookmark = 'bookmark-on' | 'bookmark-off'

const colorButtonDisabled = '#CACACA'
const colorButtonActive = 'black'

export function Pokemon({ name, order, weight, height, types, sprites }: PokeApiResponse) {
    const [shiny, setShiny] = React.useState(false);
    const [orientation, setOrientation] = React.useState<Orientation>('front');
    const [gender, setGender] = React.useState<Gender>('default');
    const [bookmarkIcon, setBookmarkIcon] = React.useState<Bookmark>('bookmark-off');
    const [bookmarkRoster, setBookmarkRoster] = useLocalStorage<RosterCardArray>('roster', [{ empty: true, }, { empty: true, }, { empty: true, }, { empty: true, }, { empty: true, }]);

    React.useEffect(() => {
        isBookmarkedPokemon(name) ? setBookmarkIcon('bookmark-on') : setBookmarkIcon('bookmark-off')
    }, [name])

    const typesFiltered = types.filter((typeSlot) =>
        typeSlot.type.name !== 'unknown' &&
        typeSlot.type.name !== 'shadow')

    // Sprite logic
    const spriteKey: keyof OrientationShinyGender = getSpritesKey(orientation, shiny, gender)
    const spriteUrl = sprites[spriteKey] ?? "./img/no_sprite.png" //should never render no_sprite img

    // Button logic
    const onClick = () => setGender(() => gender === 'default' ? 'female' : 'default')
    //conditional rendering of gender button
    const hasFemale = sprites[getSpritesKey('front', false, 'female')] !== null

    // Bookmark Logic
    const onClickBookmark = () => {
        if (bookmarkRoster !== undefined) {
            if (bookmarkIcon === 'bookmark-off') {
                // add to localStorage if space left
                for (let index = 0; index < bookmarkRoster.length; index++) {
                    if (bookmarkRoster[index]?.empty === true) {
                        if (typesFiltered[0]?.type?.name !== undefined) {

                            const color = typesFiltered[0]?.type?.name
                            const spriteFront = sprites[getSpritesKey('front', shiny, gender)] ?? "./img/no_sprite.png"

                            setBookmarkRoster((prevRoster) => {
                                if (prevRoster !== undefined) {
                                    // always take front sprite
                                    prevRoster[index] = { pokemonName: name, pokemonImageUrl: spriteFront, empty: false, color: color }
                                }
                                return prevRoster
                            })
                            setBookmarkIcon('bookmark-on')
                            return
                        }
                    }
                }
                // no place left
                alert('Roster is full of Pokemons ! Please remove one by clicking on the bookmark icon inside it\'s card')
            } else {
                // remove from localStorage
                for (let index = 0; index < bookmarkRoster.length; index++) {
                    if (bookmarkRoster[index]?.pokemonName === name) {
                        setBookmarkRoster((prevRoster) => {
                            if (prevRoster !== undefined) {
                                prevRoster[index] = { pokemonName: undefined, pokemonImageUrl: undefined, empty: true, color: undefined }
                            }
                            return prevRoster;
                        })
                        setBookmarkIcon('bookmark-off')
                        return
                    }
                }
            }
        }
    }


    return (
        <div className={styles.pokemonCardContainer}>
            <div className={styles.pokemonOrderNameType}>
                <div className={styles.pokemonOrder}>{`#${order}`}</div>
                <div className={styles.pokemonName}>{capitalizeFirstLetter(name).replace('-', ' ')}</div>
                <div className={styles.pokemonTypeContainer}>
                    {
                        typesFiltered
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
                                : <div className={styles.emptyDiv}></div>
                        }
                        <ButtonImage name={bookmarkIcon} size='button' onClick={onClickBookmark} />
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
                <Icon name='pokeballCard' size='pokeballCard' color={'#bdbdbd'} className={styles.pokeballIcon} />
            </div>
        </div>
    )
}
function isBookmarkedPokemon(name: string) {
    const rosterItem = window.localStorage.getItem('roster');
    if (rosterItem !== null) {
        const rosterLocalStorage = JSON.parse(rosterItem) as RosterCardArray;
        for (let index = 0; index < rosterLocalStorage.length; index++) {
            if (rosterLocalStorage[index]?.pokemonName === name) {
                return true
            }
        }
    }
    return false
}

export function getRosterLocalStorage() {
    const rosterItem = window.localStorage.getItem('roster');
    if (rosterItem !== null) {
        return JSON.parse(rosterItem) as RosterCardArray;
    }
}
