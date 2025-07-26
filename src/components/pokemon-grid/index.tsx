import { PokemonCard } from "@/components/pokemon-card";
import { SkeletonCard } from "@/components/selecton-card";
import { CARD_SKELETON_COUNT } from "@/utils/constants";
import type { IPokemonItem } from "@/utils/types/pokemons";

interface IPokemonGrid {
  data?: (IPokemonItem | undefined)[];
  isLoading?: boolean;
}
export const PokemonGrid = ({ data, isLoading }: IPokemonGrid) => (
  <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
    {isLoading
      ? Array.from({ length: CARD_SKELETON_COUNT }).map((_, i) => (
          <SkeletonCard key={`skeleton-${i}`} />
        ))
      : data?.map((pokemon) => {
          return (
            pokemon && <PokemonCard key={pokemon.name} pokemon={pokemon} />
          );
        })}
  </div>
);
