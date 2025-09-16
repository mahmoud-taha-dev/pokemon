import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render } from "@/test-utils";
import { Pagination } from ".";

describe("Pagination", () => {
  it("disables Previous on first page and enables Next", () => {
    const changePage = vi.fn();
    render(
      <Pagination
        changePage={changePage}
        totalPages={10}
        page={1}
        limit={20}
      />,
    );

    expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
  });

  it("disables Next on last page", () => {
    const changePage = vi.fn();
    render(
      <Pagination changePage={changePage} totalPages={5} page={5} limit={20} />,
    );

    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });

  it("calls changePage when clicking a page number", async () => {
    const user = userEvent.setup();
    const changePage = vi.fn();

    render(
      <Pagination
        changePage={changePage}
        totalPages={10}
        page={3}
        limit={20}
      />,
    );

    await user.click(screen.getByRole("button", { name: "4" }));
    expect(changePage).toHaveBeenCalledWith(4);
  });
});
