export interface IPokemon {
  abilities: IPokemonAbility[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: IPokemonSprites;
  stats: IPokemonStat[];
  weight: number;
}

export interface IPokemonAbility {
  ability: IPokemonSpecies | null;
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IPokemonSpecies;
  order: number | null;
  version_group: IPokemonSpecies;
}

export interface IPokemonGenerationV {
  "black-white": IPokemonSprites;
}

export interface IPokemonGenerationIv {
  "diamond-pearl": IPokemonSprites;
  "heartgold-soulsilver": IPokemonSprites;
  platinum: IPokemonSprites;
}

export interface IPokemonVersions {
  "generation-i": IPokemonGenerationI;
  "generation-ii": IPokemonGenerationIi;
  "generation-iii": IPokemonGenerationIii;
  "generation-iv": IPokemonGenerationIv;
  "generation-v": IPokemonGenerationV;
  "generation-vi": { [key: string]: IPokemonHome };
  "generation-vii": IPokemonGenerationVii;
  "generation-viii": IPokemonGenerationViii;
}

export interface IPokemonOther {
  dream_world: IPokemonDreamWorld;
  home: IPokemonHome;
  "official-artwork": IPokemonOfficialArtwork;
  showdown: IPokemonSprites;
}

export interface IPokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other?: IPokemonOther;
  versions?: IPokemonVersions;
  animated?: IPokemonSprites;
}

export interface IPokemonGenerationI {
  "red-blue": IPokemonRedBlue;
  yellow: IPokemonRedBlue;
}

export interface IPokemonRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface IPokemonGenerationIi {
  crystal: IPokemonCrystal;
  gold: IPokemonGold;
  silver: IPokemonGold;
}

export interface IPokemonCrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface IPokemonGold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface IPokemonGenerationIii {
  emerald: IPokemonOfficialArtwork;
  "firered-leafgreen": IPokemonGold;
  "ruby-sapphire": IPokemonGold;
}

export interface IPokemonOfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface IPokemonHome {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface IPokemonGenerationVii {
  icons: IPokemonDreamWorld;
  "ultra-sun-ultra-moon": IPokemonHome;
}

export interface IPokemonDreamWorld {
  front_default: string;
  front_female: null;
}

export interface IPokemonGenerationViii {
  icons: IPokemonDreamWorld;
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: IPokemonSpecies;
}

export interface IPokemonType {
  slot: number;
  type: IPokemonSpecies;
}
