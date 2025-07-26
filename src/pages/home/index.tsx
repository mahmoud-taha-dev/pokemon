import { clsx } from "clsx";
import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { PokemonGrid } from "@/components/pokemon-grid";

const LoadMoreView = lazy(() => import("@/components/load-more-view"));
const PaginationView = lazy(() => import("@/components/pagination-view"));

type View = "pagination" | "loadMore";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("view") as View) || "pagination";

  const changeView = (nextView: View) => {
    const next = new URLSearchParams(searchParams);
    next.set("view", nextView);
    if (nextView === "loadMore") {
      next.delete("page");
    } else {
      next.set("page", "1");
    }
    setSearchParams(next, { replace: true });
  };

  const views: { id: View; label: string }[] = [
    { id: "pagination", label: "Pagination View" },
    { id: "loadMore", label: "Load More View" },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-30 mx-auto py-8 bg-blue-50 min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-2">Pokédex</h1>
          <p className="text-gray-500 mb-4">
            Discover and explore Pokemon with page controls
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {views.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => changeView(id)}
                className={clsx(
                  "px-4 py-2 rounded-md font-semibold border",
                  view === id
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-200 cursor-pointer",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <Suspense fallback={<PokemonGrid isLoading />}>
          {view === "pagination" ? <PaginationView /> : <LoadMoreView />}
        </Suspense>
      </div>
    </div>
  );
};
