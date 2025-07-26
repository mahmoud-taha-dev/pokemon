import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/home";
import { PokemonDetail } from "@/pages/pokemon-detail";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/pokemon/:id", Component: PokemonDetail },
    ],
  },
]);

export default Router;
