export const getPokemons = async (limit: number = 10, offset: number = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon list");
    }
    return response.json();
  } catch (error) {
    throw new Error(
      `Error in getPokemons: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

export const getPokemon = async (pokemonId: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon details");
    }
    return response.json();
  } catch (error) {
    throw new Error(
      `Error in getPokemon: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};
