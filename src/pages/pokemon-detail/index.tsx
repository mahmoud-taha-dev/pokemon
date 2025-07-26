import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorView } from "@/components/error-view/ErrorView";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Spinner } from "@/icons/Spinner";
import { useGetPokemon } from "@/services/loaders/pokemon";

export const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, refetch } = useGetPokemon(id || "");
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length <= 2) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-purple-100">
        <Spinner />
      </div>
    );
  if (isError) {
    return <ErrorView refetch={refetch} />;
  }
  if (!data) return <div className="p-8 text-center">No data found.</div>;

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-30 mx-auto py-8 bg-purple-100 min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-1 px-4 py-2 rounded-md font-semibold border bg-white text-black border-gray-200 cursor-pointer"
        >
          <ArrowLeft /> Back to List
        </button>
        <div className="max-w-3xl mx-auto bg-white shadow mt-8 rounded-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 text-center mb-4">
            <h2 className="text-3xl font-bold mb-3 capitalize">{data.name}</h2>
            <p>#{id?.padStart(3, "0")}</p>
          </div>
          <div className="grid px-8 py-4 gap-8 lg:grid-cols-2">
            <div>
              <div className="px-8">
                <div className="bg-gray-200 flex items-center rounded-full justify-center aspect-square p-4 mb-6 max-w-[300px] mx-auto">
                  <img
                    src={
                      data.sprites?.other?.["official-artwork"]?.front_default
                    }
                    alt={data.name}
                    className="mx-auto mb-4 w-48 h-48 object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-md p-3 text-center">
                  <h4 className="text-gray-600 font-medium">Height</h4>
                  <p className="text-gray-950 font-semibold text-xl">
                    {data.height / 10} m
                  </p>
                </div>
                <div className="bg-gray-200 rounded-md p-3 text-center">
                  <h4 className="text-gray-600 font-medium">Weight</h4>
                  <p className="text-gray-950 font-semibold text-xl">
                    {data.weight / 10} kg
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h2 className="text-gray-950 font-extrabold text-2xl pb-2">
                  Base Stats
                </h2>
                {data.stats?.map((stat) => (
                  <div key={stat.stat.name}>
                    <p className="flex justify-between mb-1 capitalize">
                      <span className="font-semibold text-gray-950">
                        {stat.stat.name}
                      </span>
                      <span className="text-gray-400 font-medium">
                        {stat.base_stat}
                      </span>
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-950 h-2 rounded-full"
                        style={{ width: `${stat.base_stat}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h2 className="text-gray-950 font-extrabold text-2xl pb-2">
                  Abilities
                </h2>
                <div className="space-y-1.5">
                  {data.abilities?.map((ability) => (
                    <div
                      key={ability.ability.name}
                      className="flex items-center gap-2"
                    >
                      <p
                        className={clsx(
                          "border border-gray-200 rounded-full p-1 px-1.5 text-gray-950 font-semibold text-sm",
                          ability.is_hidden ? "bg-gray-200" : "",
                        )}
                      >
                        {ability.ability.name}
                      </p>
                      {ability.is_hidden && (
                        <span className="text-sm text-gray-400">(Hidden)</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-gray-950 font-extrabold text-2xl pb-2">
                  Base experience
                </h2>
                <p className="text-2xl text-purple-600 font-extrabold">
                  {data.base_experience} XP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
