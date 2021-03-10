import * as React from 'react';
import styles from './pokemonability.module.css'

export type PokemonAbilityProps = {
    name: string,
    abilityText: string
}

export function PokemonAbility({ name, abilityText }: PokemonAbilityProps) {
    return (
        <div className={styles.pokemonAbilityContainer}>
            <div className={styles.pokemonAbilityName}>
                {name}
            </div>
            <div className={styles.pokemonAbilityText}>
                <p>{abilityText}</p>
            </div>
        </div>
    )
}
