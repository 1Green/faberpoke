import * as React from 'react';
import { Type } from './PokemonParser';
import './pokemontype.css'

export type PokemonTypeProps = {
    type: Type;
    img: string | undefined;
}

export function PokemonType({ type, img }: PokemonTypeProps) {
    return img !== undefined ? <img src={img} alt={type.name} /> : null;
}
