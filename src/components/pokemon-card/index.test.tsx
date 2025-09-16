import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "@/test-utils";
import { PokemonCard } from ".";

describe("PokemonCard", () => {
  it("renders name, id and image with correct alt and link", () => {
    render(
      <PokemonCard
        pokemon={{
          name: "pikachu",
          url: "https://pokeapi.co/api/v2/pokemon/25/",
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: /pikachu/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();

    const img = screen.getByRole<HTMLImageElement>("img", { name: /pikachu/i });
    expect(img).toBeInTheDocument();

    const link = screen.getByRole<HTMLAnchorElement>("link", {
      name: /pikachu/i,
    });
    expect(link).toHaveAttribute("href", "/pokemon/25");
  });

  it("is not navigable when id is missing", () => {
    render(
      <PokemonCard
        pokemon={{ name: "mystery", url: "https://pokeapi.co/api/v2/pokemon/" }}
      />,
    );

    const link = screen.getByRole<HTMLAnchorElement>("link", {
      name: /mystery/i,
    });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link.getAttribute("tabindex")).toBe("-1");
  });
});
