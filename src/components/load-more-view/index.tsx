import { ErrorView } from "@/components/error-view/ErrorView";
import { PokemonGrid } from "@/components/pokemon-grid";
import { Spinner } from "@/icons/Spinner";
import { useGetPokemonsInfinite } from "@/services/loaders/pokemon";
import { CARDS_PAGE_LIMIT } from "@/utils/constants";

const LoadMoreView = () => {
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isFetched,
  } = useGetPokemonsInfinite(CARDS_PAGE_LIMIT);

  if (!isFetched) {
    return <PokemonGrid isLoading />;
  }

  if (isError) {
    return <ErrorView refetch={refetch} />;
  }

  const pokemons = data?.pages.flatMap((page) => page.results);

  return (
    <div className="flex flex-col gap-6">
      <PokemonGrid data={pokemons} />

      <div className="flex justify-center mt-4">
        {hasNextPage &&
          (isFetchingNextPage ? (
            <div className="flex items-center gap-2 justify-center">
              <Spinner />
              <p className="text-gray-700">Loading more Pokemon</p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fetchNextPage()}
              className="px-4 py-2 rounded bg-gray-950 text-white font-semibold cursor-pointer"
            >
              Load More
            </button>
          ))}
      </div>
      <div className="flex justify-center mt-2 text-gray-600 text-sm">
        Showing {pokemons?.length || 0} items
      </div>
    </div>
  );
};

export default LoadMoreView;
