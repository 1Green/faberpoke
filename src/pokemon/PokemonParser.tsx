import React from 'react'
import { Pokemon } from './Pokemon'

export type PokemonParserProps = {
    jsonFromApi: PokeApiResponse;
}

export function PokemonParser({ jsonFromApi }: PokemonParserProps) {
    const { id, name, order, weight, height, types, sprites, abilities, stats } = jsonFromApi;
    return (
        <Pokemon key={id} name={name} order={order} weight={weight} height={height} types={types} sprites={sprites} abilities={abilities} statistics={stats} />
    )
}

export interface Ability {
    name: string;
    url: string;
}

export interface AbilitySlot {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Item {
    name: string;
    url: string;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface VersionDetail {
    rarity: number;
    version: Version2;
}

export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

export interface Move2 {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface DreamWorld {
    front_default: string;
    front_female?: null; //any
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
    "official-artwork": OfficialArtwork;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

export interface Yellow {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
}

export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
}

export interface DiamondPearl {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface Platinum {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationIv {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartgoldSoulsilver;
    platinum: Platinum;
}

export interface Animated {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface BlackWhite {
    animated: Animated;
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationV {
    "black-white": BlackWhite;
}

export interface OmegarubyAlphasapphire {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface XY {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire;
    "x-y": XY;
}

export interface Icons {
    front_default: string;
    front_female?: null //any;
}

export interface UltraSunUltraMoon {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationVii {
    icons: Icons;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons2 {
    front_default: string;
    front_female: string | null;
}

export interface GenerationViii {
    icons: Icons2;
}

export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other?: Other;
    versions?: Versions;
}

export type SpritesImages = Omit<Sprites, 'other' | 'versions'>

export interface Stat2 {
    name: string;
    url: string;
}

export interface Statistics {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type {
    name: string;
    url: string;
}

export interface TypeSlot {
    slot: number;
    type: Type;
}

export interface PokeApiResponse {
    abilities: AbilitySlot[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types?: never[]; //any
    species: Species;
    sprites: Sprites;
    stats: Statistics[];
    types: TypeSlot[];
    weight: number;
}




