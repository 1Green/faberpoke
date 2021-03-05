import { Gender, Orientation } from "./Pokemon";
import { SpritesImages } from "./PokemonParser";

export function getSpritesKey(orientation: Orientation, shiny:boolean, gender: Gender ): keyof SpritesImages {
    const key: Array<string |undefined> = [
        orientation,
        shiny ? 'shiny' : undefined,
        gender==='female' ? 'female' : shiny ? undefined : 'default'
    ]
    return key.filter((value) => value!==undefined).join("_") as keyof SpritesImages
}

export function capitalizeFirstLetter([first, ...rest]: string, locale = navigator.language) :string{
    if (first !== undefined) {
        return first.toLocaleUpperCase(locale) + rest.join('')
    }
    else { return '' }
}