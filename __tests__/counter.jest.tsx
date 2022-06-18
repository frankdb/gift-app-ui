import { render, screen } from "@testing-library/react";
import Counter from "../pages/counter";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders the correct count", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    // screen.getByRole("button");
    // const increment = screen.getByRole("button", { name: /increment/i });
    await user.click(screen.getByRole("button", { name: /increment/i }));
    const h3 = screen.getByRole("heading", { name: /Count/ });
    // screen.debug();

    expect(h3).toHaveTextContent("Count: 1");
  });
});
