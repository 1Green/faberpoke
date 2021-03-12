export interface PokeApiResponse {
    abilities: AbilitySlot[]
    base_experience: number
    forms: Resource[]
    game_indices: GameIndice[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Move[]
    name: string
    order: number
    past_types?: never[] // maybe present never encountered one
    species: Resource
    sprites: OrientationShinyGenderOtherVersions
    stats: Statistics[]
    types: TypeSlot[]
    weight: number
}
export interface Resource {
    name: string
    url: string
}

export interface FrontGender {
    front_default: string
    front_female: string | null
}
export interface FrontShinyGender extends FrontGender {
    front_shiny: string
    front_shiny_female: string | null
}

export interface OrientationShinyGender extends FrontShinyGender {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
}
export interface FrontDefault {
    front_default: string
}

export interface FrontShiny extends FrontDefault {
    front_shiny: string
}
export interface OrientationDefault extends FrontDefault {
    back_default: string
}

export interface OrientationGray extends OrientationDefault {
    back_gray: string
    front_gray: string
}
export interface OrientationShiny extends OrientationDefault {
    back_shiny: string
    front_shiny: string
}

export interface AbilitySlot {
    ability: Resource
    is_hidden: boolean
    slot: number
}

export interface GameIndice {
    game_index: number
    version: Resource
}

export interface VersionDetail {
    rarity: number
    version: Resource
}

export interface HeldItem {
    item: Resource
    version_details: VersionDetail[]
}

export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: Resource
    version_group: Resource
}

export interface Move {
    move: Resource
    version_group_details: VersionGroupDetail[]
}

export interface Other {
    dream_world: FrontGender
    'official-artwork': FrontDefault
}

export interface GenerationI {
    'red-blue': OrientationGray
    yellow: OrientationGray
}

export interface GenerationIi {
    crystal: OrientationShiny
    gold: OrientationShiny
    silver: OrientationShiny
}

export interface GenerationIii {
    emerald: FrontShiny
    'firered-leafgreen': OrientationShiny
    'ruby-sapphire': OrientationShiny
}

export interface GenerationIv {
    'diamond-pearl': OrientationShinyGender
    'heartgold-soulsilver': OrientationShinyGender
    platinum: OrientationShinyGender
}

export interface OrientationShinyGenderAnimated extends OrientationShinyGender {
    animated: OrientationShinyGender
}

export interface GenerationV {
    'black-white': OrientationShinyGenderAnimated
}

export interface GenerationVi {
    'omegaruby-alphasapphire': FrontShinyGender
    'x-y': FrontShinyGender
}

export interface Icons {
    front_default: string
    front_female: string | null
}

export interface GenerationVii {
    icons: Icons
    'ultra-sun-ultra-moon': FrontShinyGender
}

export interface GenerationViii {
    icons: FrontGender
}

export interface Versions {
    'generation-i': GenerationI
    'generation-ii': GenerationIi
    'generation-iii': GenerationIii
    'generation-iv': GenerationIv
    'generation-v': GenerationV
    'generation-vi': GenerationVi
    'generation-vii': GenerationVii
    'generation-viii': GenerationViii
}

export interface OrientationShinyGenderOtherVersions
    extends OrientationShinyGender {
    other?: Other
    versions?: Versions
}

export interface Statistics {
    base_stat: number
    effort: number
    stat: Resource
}

export interface TypeSlot {
    slot: number
    type: Resource
}
