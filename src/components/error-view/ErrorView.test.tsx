import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render } from "@/test-utils";
import { ErrorView } from "./ErrorView";

describe("ErrorView", () => {
  it("renders error message and try again button", () => {
    const refetch = vi.fn(async () => ({ data: undefined }) as any);
    render(<ErrorView refetch={refetch} />);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /try again/i }),
    ).toBeInTheDocument();
  });

  it("calls refetch on click", async () => {
    const user = userEvent.setup();
    const refetch = vi.fn(async () => ({ data: undefined }) as any);

    render(<ErrorView refetch={refetch} />);

    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });
});
