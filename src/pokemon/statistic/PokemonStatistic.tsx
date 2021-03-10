import * as React from 'react';
import styles from './pokemonstatistic.module.css'

export type PokemonStatisticProps = {
    name: string,
    value: number,
}

export function PokemonStatistic({ name, value }: PokemonStatisticProps) {
    return (
        <div className={styles.pokemonStatisticContainer}>
            <div className={styles.pokemonStatisticName}>
                {name}
            </div>
            <div className={styles.pokemonStatisticValue}>
                {value}
            </div>
        </div>
    )
}
