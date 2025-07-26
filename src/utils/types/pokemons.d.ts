export interface IPokemonsList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: IPokemonItem[];
}

export interface IPokemonItem {
  name: string;
  url: string;
}
