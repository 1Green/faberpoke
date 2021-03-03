import * as React from 'react';
import './characteristics.css'

export interface Characteristic {
    text: string;
}

export type PokemonCharacteristicProps = {
    characteristic: Characteristic;
}

export function PokemonCharacteristic({ characteristic }: PokemonCharacteristicProps) {
    return (
        <div className="pokemon-characteristic-container">
            <div className="pokemon-characteristic-name">
                {characteristic.text}
            </div>
        </div>
    )
}
