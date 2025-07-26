import { useSearchParams } from "react-router-dom";
import { ErrorView } from "@/components/error-view/ErrorView";
import { Pagination } from "@/components/pagination";
import { PokemonGrid } from "@/components/pokemon-grid";
import { useGetPokemons } from "@/services/loaders/pokemon";
import { CARDS_PAGE_LIMIT } from "@/utils/constants";

const PaginationView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const offset = (page - 1) * CARDS_PAGE_LIMIT;
  const { data, isLoading, isError, refetch, isFetching } = useGetPokemons(
    CARDS_PAGE_LIMIT,
    offset,
  );

  const changePage = (nextPage: number) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(nextPage));
    setSearchParams(next, { replace: true });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const total = data?.count || 0;
  const totalPages = Math.ceil(total / CARDS_PAGE_LIMIT);

  if (isLoading || isFetching) {
    return <PokemonGrid isLoading />;
  }
  if (isError) {
    return <ErrorView refetch={refetch} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <PokemonGrid data={data?.results} />
      <Pagination
        changePage={changePage}
        totalPages={totalPages}
        limit={CARDS_PAGE_LIMIT}
        page={page}
      />
    </div>
  );
};

export default PaginationView;
