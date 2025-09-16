import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { Home } from ".";

vi.mock("@/services/loaders/pokemon", () => ({
  useGetPokemons: () => ({
    data: { count: 0, results: [] },
    isLoading: false,
    isError: false,
    refetch: vi.fn(),
    isFetching: false,
  }),
  useGetPokemonsInfinite: () => ({
    data: { pages: [{ results: [] }] },
    isError: false,
    fetchNextPage: vi.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
    refetch: vi.fn(),
    isFetched: true,
  }),
}));

describe("Home", () => {
  it("renders title and view toggle buttons", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /pokédex/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /pagination view/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /load more view/i }),
    ).toBeInTheDocument();
  });
});
