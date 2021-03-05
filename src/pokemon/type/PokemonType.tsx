import * as React from 'react';
import { Type } from '../PokemonParser';
import styles from './pokemontype.module.css'
export type PokemonTypeProps = {
    type: Type;
    img: string | undefined;
}

export function PokemonType({ type, img }: PokemonTypeProps) {
    return img !== undefined ? <div className={styles.container}><img className={styles.imgtype} src={img} alt={type.name} /></div> : null;
}
