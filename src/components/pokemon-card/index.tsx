import { Link } from "react-router-dom";
import { getIdFromUrl } from "@/utils/functions/getIdFromUrl";

interface IPokemonCard {
  pokemon: {
    name: string;
    url: string;
  };
}
export const PokemonCard = ({ pokemon: { name, url } }: IPokemonCard) => {
  const id = getIdFromUrl(url);
  const sprite = id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    : "";

  return (
    <Link
      to={id ? `/pokemon/${id}` : "#"}
      className="border border-gray-200 rounded-lg p-4 text-center bg-white shadow-sm min-w-[120px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      tabIndex={id ? 0 : -1}
      aria-disabled={!id}
    >
      <div className="bg-gray-200 flex items-center justify-center aspect-square py-4 px-8 mb-6">
        <img
          src={sprite}
          alt={name}
          className="object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="mb-2 font-bold text-gray-800 capitalize">{name}</h3>
      <p className="text-gray-400">#{id?.padStart(3, "0")}</p>
    </Link>
  );
};
