import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemon, getPokemons } from "@/services/api/pokemon";
import { POKEMON, POKEMONS } from "@/services/constants";
import type { IPokemon } from "@/utils/types/pokemon";
import type { IPokemonsList } from "@/utils/types/pokemons";

export const useGetPokemons = (limit: number = 20, offset: number = 0) => {
  return useQuery<IPokemonsList>({
    queryFn: async () => getPokemons(limit, offset),
    queryKey: [POKEMONS, limit, offset],
  });
};

export const useGetPokemonsInfinite = (limit: number = 20) => {
  return useInfiniteQuery<IPokemonsList>({
    queryFn: async ({ pageParam = 0 }) =>
      getPokemons(limit, pageParam as number),
    queryKey: [POKEMONS, limit],
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.reduce(
        (acc, page) => acc + (page.results?.length || 0),
        0,
      );
      if (typeof lastPage?.count === "number") {
        return loaded < lastPage.count ? loaded : undefined;
      }
      return undefined;
    },
  });
};

export const useGetPokemon = (pokemonId: string) => {
  return useQuery<IPokemon>({
    queryFn: async () => getPokemon(pokemonId),
    queryKey: [POKEMON, pokemonId],
    enabled: !!pokemonId,
  });
};
