import * as React from 'react';
import { Type } from '../PokemonParser';
import styles from './pokemontype.module.css'
export type PokemonTypeProps = {
    type: Type;
    imageUrl: string | undefined;
}

export function PokemonType({ type, imageUrl }: PokemonTypeProps) {
    return imageUrl !== undefined ? <img className={styles.imageType} src={imageUrl} alt={type.name} /> : null;
}
