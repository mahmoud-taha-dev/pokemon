import { describe, expect, it } from "vitest";
import { getIdFromUrl } from "./getIdFromUrl";

describe("getIdFromUrl", () => {
  it("extracts id from a valid pokemon url", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/25/")).toBe("25");
  });

  it("handles url without trailing slash", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/7")).toBe("7");
  });

  it("returns undefined for non-pokemon url", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/item/1/")).toBeUndefined();
  });

  it("returns undefined when id missing", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/")).toBeUndefined();
  });
});
