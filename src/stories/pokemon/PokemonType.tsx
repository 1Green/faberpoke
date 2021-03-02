import * as React from 'react';
import './pokemontype.css'

export type Type = "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";

export type PokemonTypeProps = {
    type: Type;
}

export function PokemonType({ type }: PokemonTypeProps) {
    return (
        <div className="pokemon-type">{type}</div>
    )
}
